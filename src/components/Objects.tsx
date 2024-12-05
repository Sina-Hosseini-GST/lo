import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

interface Box {
  x: number;
  y: number;
  size: number;
  imageUrl: string;
  isMoving: boolean;
  isReachedLeft: boolean;
  isHavingPhysics: boolean;
}

interface MovingDivsProps {
  numberOfObjects: number;
}

const MovingDivs: React.FC<MovingDivsProps> = ({ numberOfObjects }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;

    const canvas = canvasRef.current;
    const render = Matter.Render.create({
      element: document.body,
      engine: engine,
      canvas: canvas!,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    const boxes: Matter.Body[] = [];

    for (let i = 0; i < numberOfObjects; i++) {
      const size = 100 + (Math.random() * 100);
      const x = window.innerWidth + size;
      const y = (window.innerHeight / 2) * Math.random();
      const imageUrl = `https://picsum.photos/200/300?random=${i}`;
      const speed = 20 + (Math.random() * 20)

      const box = Matter.Bodies.rectangle(x, y, size, size, {
        restitution: 0.5,
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

    Matter.Events.on(engine, 'collisionStart', (event) => {
      const pairs = event.pairs;
      pairs.forEach((pair) => {
        const { bodyA, bodyB } = pair;
        // console.log('Collision detected between:', bodyA.id, 'and', bodyB.id);
      });
    });

    const update = () => {
      Matter.Engine.update(engine);

      boxes.forEach((box) => {
        if (box.position.x <= 0) {
          Matter.Body.setVelocity(box, { x: 0, y: 0 });
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
  }, [numberOfObjects]);

  return (
    <canvas
      className="fixed inset-0 z-10 bg-transparent"
      ref={canvasRef}
    />
  );
};

export default MovingDivs;
