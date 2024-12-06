import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { gsap } from 'gsap';

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

    // Add event listener for window resize
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
      const size = 80 + (Math.random() * 80);
      // Simulate delay by "(i * size * .5)"
      const x = windowWidth + (i * size * .5);
      const y = (windowHeight * .25) + (windowHeight * .5 * Math.random());
      const imageUrl = `https://picsum.photos/200/300?random=${i}`;
      const speed = 40 + (Math.random() * 40);

      const box = Matter.Bodies.rectangle(x, y, size, size, {
        restitution: .5,
        render: {
          sprite: {
            texture: imageUrl,
            xScale: size / 200,
            yScale: size / 300,
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
        // Contact the left side of the screen
        if (box.position.x <= (box.bounds.max.x - box.bounds.min.x) / 2) {
          Matter.Body.setVelocity(box, { x: 0, y: box.velocity.y });
          Matter.Body.applyForce(box, box.position, { x: 1, y: 0 });
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
      className="fixed inset-0 z-10 bg-transparent"
      ref={canvasRef}
      width={windowWidth}
      height={windowHeight}
    />
  );
};

export default Objects;
