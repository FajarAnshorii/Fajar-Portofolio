"use client";

export default function Particles() {
  return (
    <>
      <style>{`
        .particle-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0 !important;
        }

        .particle-bg .orb-1 {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%);
          filter: blur(80px);
          animation: orbFloat1 8s ease-in-out infinite;
          pointer-events: none;
          z-index: 1 !important;
        }

        .particle-bg .orb-2 {
          position: absolute;
          bottom: 15%;
          right: 10%;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%);
          filter: blur(80px);
          animation: orbFloat2 10s ease-in-out infinite;
          pointer-events: none;
          z-index: 1 !important;
        }

        .particle-bg .orb-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%);
          filter: blur(70px);
          animation: orbFloat3 12s ease-in-out infinite;
          pointer-events: none;
          z-index: 1 !important;
        }

        .particle-bg .firefly {
          position: absolute;
          background: radial-gradient(circle, #fff 0%, rgba(255, 255, 200, 0.8) 30%, rgba(100, 149, 237, 0.4) 60%, transparent 100%);
          border-radius: 50%;
          animation: fireflyGlow 4s ease-in-out infinite;
          z-index: 2 !important;
        }

        .particle-bg .firefly-bright {
          position: absolute;
          background: radial-gradient(circle, #fff 0%, rgba(255, 255, 255, 0.9) 20%, rgba(37, 99, 235, 0.6) 50%, transparent 80%);
          border-radius: 50%;
          animation: fireflyGlowBright 3s ease-in-out infinite;
          z-index: 3 !important;
        }

        @keyframes orbFloat1 {
          0%, 100% {
            opacity: 0.5;
            transform: translate(0, 0) scale(1);
          }
          25% {
            opacity: 0.8;
            transform: translate(30px, -20px) scale(1.1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-20px, 30px) scale(1.05);
          }
          75% {
            opacity: 0.9;
            transform: translate(20px, 20px) scale(1.15);
          }
        }

        @keyframes orbFloat2 {
          0%, 100% {
            opacity: 0.5;
            transform: translate(0, 0) scale(1);
          }
          33% {
            opacity: 0.8;
            transform: translate(-40px, 30px) scale(1.1);
          }
          66% {
            opacity: 0.6;
            transform: translate(30px, -20px) scale(1.08);
          }
        }

        @keyframes orbFloat3 {
          0%, 100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translate(-45%, -55%) scale(1.2);
          }
        }

        @keyframes fireflyGlow {
          0%, 100% {
            opacity: 0.2;
            transform: translate(0, 0) scale(0.8);
            box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.3);
          }
          25% {
            opacity: 0.8;
            transform: translate(15px, -10px) scale(1.2);
            box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.7), 0 0 40px 10px rgba(100, 149, 237, 0.4);
          }
          50% {
            opacity: 1;
            transform: translate(-10px, 15px) scale(1.5);
            box-shadow: 0 0 30px 8px rgba(255, 255, 255, 0.9), 0 0 60px 15px rgba(37, 99, 235, 0.5);
          }
          75% {
            opacity: 0.6;
            transform: translate(20px, 10px) scale(1.1);
            box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes fireflyGlowBright {
          0%, 100% {
            opacity: 0.3;
            transform: translate(0, 0) scale(1);
            box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.4), 0 0 20px 8px rgba(37, 99, 235, 0.3);
          }
          50% {
            opacity: 1;
            transform: translate(25px, -20px) scale(1.8);
            box-shadow: 0 0 40px 12px rgba(255, 255, 255, 1), 0 0 80px 25px rgba(37, 99, 235, 0.6);
          }
        }
      `}</style>

      <div className="particle-bg">
        {/* Large Floating Gradient Orbs */}
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="orb-3" />

        {/* Fireflies - Like Kunang-kunang (smaller, moving) */}
        <div className="firefly" style={{ left: '8%', top: '15%', width: '6px', height: '6px', animationDelay: '0s', animationDuration: '4s' }} />
        <div className="firefly" style={{ left: '20%', top: '35%', width: '5px', height: '5px', animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <div className="firefly" style={{ left: '35%', top: '10%', width: '7px', height: '7px', animationDelay: '1s', animationDuration: '4.5s' }} />
        <div className="firefly" style={{ left: '50%', top: '25%', width: '5px', height: '5px', animationDelay: '1.5s', animationDuration: '3.8s' }} />
        <div className="firefly" style={{ left: '65%', top: '40%', width: '6px', height: '6px', animationDelay: '2s', animationDuration: '4.2s' }} />
        <div className="firefly" style={{ left: '80%', top: '18%', width: '5px', height: '5px', animationDelay: '0.8s', animationDuration: '3.6s' }} />
        <div className="firefly" style={{ left: '90%', top: '30%', width: '7px', height: '7px', animationDelay: '1.3s', animationDuration: '4.8s' }} />
        <div className="firefly" style={{ left: '12%', top: '55%', width: '6px', height: '6px', animationDelay: '1.8s', animationDuration: '3.9s' }} />
        <div className="firefly" style={{ left: '28%', top: '70%', width: '5px', height: '5px', animationDelay: '2.2s', animationDuration: '4.1s' }} />
        <div className="firefly" style={{ left: '42%', top: '60%', width: '7px', height: '7px', animationDelay: '0.3s', animationDuration: '3.7s' }} />
        <div className="firefly" style={{ left: '58%', top: '75%', width: '6px', height: '6px', animationDelay: '0.7s', animationDuration: '4.3s' }} />
        <div className="firefly" style={{ left: '72%', top: '65%', width: '5px', height: '5px', animationDelay: '1.2s', animationDuration: '3.4s' }} />
        <div className="firefly" style={{ left: '85%', top: '55%', width: '7px', height: '7px', animationDelay: '1.7s', animationDuration: '4.6s' }} />
        <div className="firefly" style={{ left: '5%', top: '85%', width: '6px', height: '6px', animationDelay: '2.5s', animationDuration: '3.8s' }} />
        <div className="firefly" style={{ left: '18%', top: '90%', width: '5px', height: '5px', animationDelay: '0.2s', animationDuration: '4.4s' }} />
        <div className="firefly" style={{ left: '32%', top: '82%', width: '7px', height: '7px', animationDelay: '0.6s', animationDuration: '3.5s' }} />
        <div className="firefly" style={{ left: '48%', top: '88%', width: '6px', height: '6px', animationDelay: '1.1s', animationDuration: '4s' }} />
        <div className="firefly" style={{ left: '62%', top: '92%', width: '5px', height: '5px', animationDelay: '1.6s', animationDuration: '3.6s' }} />
        <div className="firefly" style={{ left: '78%', top: '80%', width: '7px', height: '7px', animationDelay: '2.1s', animationDuration: '4.5s' }} />
        <div className="firefly" style={{ left: '95%', top: '85%', width: '6px', height: '6px', animationDelay: '2.8s', animationDuration: '3.9s' }} />

        {/* Bright Fireflies - Extra bright kunang-kunang */}
        <div className="firefly-bright" style={{ left: '15%', top: '20%', width: '8px', height: '8px', animationDelay: '0s', animationDuration: '5s' }} />
        <div className="firefly-bright" style={{ left: '45%', top: '12%', width: '10px', height: '10px', animationDelay: '1.5s', animationDuration: '4s' }} />
        <div className="firefly-bright" style={{ left: '75%', top: '28%', width: '8px', height: '8px', animationDelay: '0.8s', animationDuration: '4.5s' }} />
        <div className="firefly-bright" style={{ left: '25%', top: '65%', width: '10px', height: '10px', animationDelay: '2s', animationDuration: '5.5s' }} />
        <div className="firefly-bright" style={{ left: '55%', top: '72%', width: '8px', height: '8px', animationDelay: '1.2s', animationDuration: '4.2s' }} />
        <div className="firefly-bright" style={{ left: '88%', top: '60%', width: '10px', height: '10px', animationDelay: '0.4s', animationDuration: '5s' }} />
        <div className="firefly-bright" style={{ left: '10%', top: '45%', width: '8px', height: '8px', animationDelay: '1.8s', animationDuration: '4.8s' }} />
        <div className="firefly-bright" style={{ left: '68%', top: '85%', width: '10px', height: '10px', animationDelay: '2.5s', animationDuration: '5.2s' }} />
      </div>
    </>
  );
}
