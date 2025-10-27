
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ToolsPage from './components/ToolsPage';
import Modal from './components/Modal';
import LightningBackground from './components/LightningBackground';
import { ABOUT_CONTENT, PRIVACY_CONTENT } from './constants';

type Page = 'home' | 'tools';
type ModalType = 'about' | 'privacy' | null;

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [isPageFading, setIsPageFading] = useState(false);

    const handleNavigate = (page: Page) => {
        if (page === currentPage) return;

        setIsPageFading(true);
        setTimeout(() => {
            setCurrentPage(page);
            setIsPageFading(false);
        }, 300); // Duration of fade-out matches CSS transition
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} />;
            case 'tools':
                return <ToolsPage />;
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };
    
    const renderModalContent = () => {
        switch (activeModal) {
            case 'about':
                return { title: 'About Flashcore AI', content: ABOUT_CONTENT };
            case 'privacy':
                return { title: 'Privacy Policy', content: PRIVACY_CONTENT };
            default:
                return null;
        }
    };

    const modalData = renderModalContent();

    return (
        <div className="relative min-h-screen bg-black overflow-x-hidden">
            <LightningBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header onNavigate={handleNavigate} onShowModal={setActiveModal} />
                <main className={`flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 transition-opacity duration-300 ease-in-out ${isPageFading ? 'opacity-0' : 'opacity-100'}`}>
                    {renderPage()}
                </main>
                <Footer />
            </div>
            {modalData && (
                <Modal title={modalData.title} onClose={() => setActiveModal(null)}>
                    <p className="text-gray-300 whitespace-pre-line">{modalData.content}</p>
                </Modal>
            )}
        </div>
    );
};

export default App;
