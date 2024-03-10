import React, { useRef, useEffect } from 'react';
import { Engine, Render, Runner, Bodies, World } from 'matter-js';
import Matter from 'matter-js';

const MatterTest: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const engine = Engine.create();
    const render = Render.create({
      canvas: canvasRef.current!,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false
      }
    });
    const runner = Runner.create();
    
    const triangle = Bodies.polygon(400, 200, 3, 80, { render: { fillStyle: '#0000ff' } });
    const triangle2 = Bodies.polygon(700, 200, 3, 100, { render: { fillStyle: '#7272ff' } });
    const circle = Bodies.circle(450, 50, 40, { render: { fillStyle: '#ff0000' } });
    const rectangle = Bodies.rectangle(500, 70, 80, 80, { render: { fillStyle: '#4cc54c' } });
    const ground = Bodies.rectangle(450, 610, 810, 60, { isStatic: true });

    World.add(engine.world, [triangle, triangle2, circle, rectangle, ground]);

    Runner.run(runner, engine);
    Render.run(render);

    const handleCanvasClick = (event: MouseEvent) => {
      const mouseX = event.clientX - canvasRef.current!.getBoundingClientRect().left;
      const mouseY = event.clientY - canvasRef.current!.getBoundingClientRect().top;

      const bodiesUnderMouse = Matter.Query.point(engine.world.bodies, { x: mouseX, y: mouseY });

      bodiesUnderMouse.forEach(body => {
        console.log('클릭된 바디:', body);
      });
    };

    canvasRef.current?.addEventListener('click', handleCanvasClick);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MatterTest;
