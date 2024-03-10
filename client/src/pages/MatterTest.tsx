import React, { useRef, useEffect } from 'react';
import { Engine, Render, Runner, Bodies, World } from 'matter-js';

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
    
    // 세모
    const triangle = Bodies.polygon(400, 200, 3, 80, { 
      render: { fillStyle: '#0000ff' } // 파랑색으로 채우기
    });

    // 세모-2 x, y, 변, 크기
    const triangle2 = Bodies.polygon(700, 200, 3, 100, { 
      render: { fillStyle: '#7272ff' } // 파랑색으로 채우기
    });
  

    // 동그라미
    const circle = Bodies.circle(450, 50, 40, { 
      render: { fillStyle: '#ff0000' } // 빨강색으로 채우기
    });

    // 네모
    const rectangle = Bodies.rectangle(500, 70, 80, 80, { 
      render: { fillStyle: '#4cc54c' } // 초록색으로 채우기
    });
    
    const ground = Bodies.rectangle(450, 610, 810, 60, { isStatic: true });

    World.add(engine.world, [triangle, triangle2, circle, rectangle, ground]);

    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MatterTest;
