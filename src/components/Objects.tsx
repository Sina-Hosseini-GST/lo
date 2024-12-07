import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

interface NumberOfObjects {
  numberOfObjects: number;
}

const Objects: React.FC<NumberOfObjects> = ({ numberOfObjects }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const engine = Matter.Engine.create();
    const world = engine.world;

    const canvas = canvasRef.current;

    const render = Matter.Render.create({
      element: document.body,
      engine: engine,
      canvas: canvas!,
      options: {
        width: windowWidth,
        height: windowHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    const boxes: Matter.Body[] = [];

    for (let i = 0; i < numberOfObjects; i++) {
      const boxSize = 100 + (Math.random() * 25);
      // Simulate delay by "(i * boxSize)"
      const x = windowWidth + (i * boxSize);
      const y = (windowHeight * .75 * Math.random());
      const texture = `https://s2.svgbox.net/materialui.svg?ic=fastfood`;
      // Using the link above, the texture has the width and height of 24
      const textureSize = 24;
      const speed = 80 + (Math.random() * 20);

      const box = Matter.Bodies.rectangle(x, y, boxSize, boxSize, {
        restitution: .25,
        render: {
          sprite: {
            texture,
            xScale: boxSize / textureSize,
            yScale: boxSize / textureSize,
          },
        },
      });

      boxes.push(box);

      Matter.Body.setVelocity(box, { x: - speed, y: 0 });
    }

    Matter.World.add(world, boxes);

    const update = () => {
      Matter.Engine.update(engine);

      boxes.forEach((box) => {
        const boxWidth = (box.bounds.max.x - box.bounds.min.x);
        // Check if the box touches the left side of the screen
        if (box.position.x <= boxWidth / 2) {
          // Stop from going to the left
          Matter.Body.setPosition(box, { x: boxWidth / 2, y: box.position.y });
          // Go down
          Matter.Body.setVelocity(box, { x: 0, y: box.velocity.y });
        }
      });

      Matter.Render.world(render);
      requestAnimationFrame(update);
    };

    update();
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <canvas
      className="fixed inset-0 z-10 pointer-events-none"
      ref={canvasRef}
      width={windowWidth}
      height={windowHeight}
    />
  );
};

export default Objects;
