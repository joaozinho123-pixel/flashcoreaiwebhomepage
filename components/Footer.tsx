
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black bg-opacity-30">
            <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Flashcore AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
