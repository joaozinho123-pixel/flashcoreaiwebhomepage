
import React from 'react';
import { LOGO_B64, TOOLS } from '../constants';
import ToolCard from './ToolCard';

interface HomePageProps {
    onNavigate: (page: 'tools') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    // Show first 3 tools as a preview
    const toolsPreview = TOOLS.slice(0, 3);

    return (
        <div className="flex flex-col items-center text-center animate-fade-in">
            {/* Hero Section */}
            <section className="w-full py-16 md:py-24">
                <img src={LOGO_B64} alt="Flashcore AI Logo" className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"/>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                    Unleash the Power of <span className="text-yellow-400">Flashcore AI</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                    Experience next-generation intelligence. Flashcore delivers unparalleled speed and precision for your most complex creative and analytical tasks.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="https://flashcore-ai-chat-389399072475.us-west1.run.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg py-4 px-8 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20"
                    >
                        Start Now
                    </a>
                    <button
                        onClick={() => onNavigate('tools')}
                        className="w-full sm:w-auto bg-gray-800 text-white hover:bg-gray-700 font-bold text-lg py-4 px-8 rounded-lg transition-colors duration-300"
                    >
                        Explore Tools
                    </button>
                </div>
            </section>

            {/* Features Preview Section */}
            <section className="w-full py-16 md:py-24 border-t border-gray-900">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                    Integrated AI Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toolsPreview.map((tool, index) => (
                        <ToolCard key={index} title={tool.title} description={tool.description} Icon={tool.Icon} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
