
import React from 'react';

const LightningBolt: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="absolute opacity-0" style={style}>
        <svg
            width="50"
            height="100"
            viewBox="0 0 50 100"
            className="w-full h-full"
            fill="rgba(250, 204, 21, 0.2)"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M25 0 L15 50 H35 L25 100 L35 40 H15 L25 0Z" />
        </svg>
    </div>
);

const LightningBackground: React.FC = () => {
    const bolts = Array.from({ length: 15 });

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <style>
                {`
                    @keyframes flash {
                        0%, 50%, 100% {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                        55% {
                            opacity: 0.7;
                            transform: scale(1.1);
                        }
                        65% {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                    }
                `}
            </style>
            {bolts.map((_, i) => {
                const style: React.CSSProperties = {
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 60 + 20}px`,
                    height: `${Math.random() * 120 + 40}px`,
                    animation: `flash ${Math.random() * 5 + 3}s linear ${Math.random() * 5}s infinite`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                };
                return <LightningBolt key={i} style={style} />;
            })}
        </div>
    );
};

export default LightningBackground;
