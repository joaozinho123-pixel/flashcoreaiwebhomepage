
import React, { useState } from 'react';
import { TOOLS } from '../constants';
import ToolCard from './ToolCard';

const ToolsPage: React.FC = () => {
    const [selectedTool, setSelectedTool] = useState<number | null>(null);

    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Our <span className="text-yellow-400">AI Toolbox</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                    A comprehensive suite of powerful, integrated tools designed to amplify your productivity and creativity.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {TOOLS.map((tool, index) => (
                    <ToolCard 
                        key={index} 
                        title={tool.title} 
                        description={tool.description} 
                        Icon={tool.Icon}
                        isSelected={selectedTool === index}
                        onClick={() => setSelectedTool(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToolsPage;
