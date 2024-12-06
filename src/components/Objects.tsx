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

    const imageSize = 300;

    for (let i = 0; i < numberOfObjects; i++) {
      const size = 120 + (Math.random() * 30);
      // Simulate delay by "(i * size)"
      const x = windowWidth + (i * size);
      const y = (windowHeight * .75 * Math.random());
      const imageUrl = `https://picsum.photos/${imageSize}/${imageSize}?random=${i}`;
      const speed = 80 + (Math.random() * 20);

      const box = Matter.Bodies.rectangle(x, y, size, size, {
        restitution: .25,
        render: {
          sprite: {
            texture: imageUrl,
            xScale: size / imageSize,
            yScale: size / imageSize,
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
        // Check if the box touches the left side of the screen
        if (box.position.x <= (box.bounds.max.x - box.bounds.min.x) / 2) {
          // Stop going to the left, and go down
          Matter.Body.setVelocity(box, { x: 0, y: box.velocity.y });
          // Bounce
          Matter.Body.applyForce(box, box.position, { x: .25, y: 0 });
        }
      });

      Matter.Render.world(render);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <canvas
      className="fixed inset-0 z-20 bg-transparent"
      ref={canvasRef}
      width={windowWidth}
      height={windowHeight}
    />
  );
};

export default Objects;
