
import React from 'react';

interface ToolCardProps {
    title: string;
    description: string;
    Icon: React.ElementType;
    isSelected?: boolean;
    onClick?: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, Icon, isSelected, onClick }) => {
    const cardClasses = `
        bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border 
        transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col group cursor-pointer
        ${isSelected
            ? 'border-yellow-400 shadow-lg shadow-yellow-500/10'
            : 'border-gray-800 hover:border-yellow-400/50'
        }
    `;

    return (
        <div className={cardClasses} onClick={onClick}>
            <div className="flex items-center mb-4">
                <div className="bg-yellow-400/10 p-2 rounded-full mr-4">
                    <Icon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-400 flex-grow">{description}</p>
            {isSelected && (
                <div className="mt-4 pt-4 border-t border-gray-800 animate-fade-in">
                     <a
                        href="https://flashcore-ai-chat-389399072475.us-west1.run.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} 
                        className="w-full text-center block bg-yellow-400 text-black hover:bg-yellow-500 font-bold py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105"
                    >
                        Use Tool
                    </a>
                </div>
            )}
        </div>
    );
};

export default ToolCard;
