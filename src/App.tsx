import { useState, useEffect, useCallback } from 'react';
import { Navigation, Footer } from '@/shared/components';
import { Hero, Stats, Services, About, Testimonials } from '@/features/home';
import { Contact } from '@/features/contact';
import { AICoach } from '@/features/ai-coach';
import { ConsultingPage } from '@/features/consulting';
import { MotivationPage } from '@/features/motivation';
import { BioPage } from '@/features/bio';
import { NotFoundPage } from '@/features/error';
import { useSEO } from '@/hooks';
import type { ViewType } from '@/shared/types';

type ExtendedViewType = ViewType | '404';

/**
 * Main Application Component
 * Handles routing, view management and SEO
 */
function App() {
    const [currentView, setCurrentView] = useState<ExtendedViewType>('home');

    // Apply SEO for current view
    useSEO(currentView === '404' ? 'home' : currentView);

    // Handle hash-based routing
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '') as ViewType;
            const validViews: ViewType[] = ['home', 'consulting', 'motivation', 'bio', 'contact'];

            if (validViews.includes(hash)) {
                setCurrentView(hash);
                window.scrollTo(0, 0);
            } else if (!hash || hash === 'home') {
                setCurrentView('home');
            } else {
                // Unknown hash - show 404
                setCurrentView('404');
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initial check

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleNavigate = useCallback((view: string) => {
        setCurrentView(view as ViewType);
        window.location.hash = view;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const renderView = () => {
        switch (currentView) {
            case 'consulting':
                return <ConsultingPage />;
            case 'motivation':
                return <MotivationPage />;
            case 'bio':
                return <BioPage />;
            case 'contact':
                return (
                    <div className="pt-24">
                        <Contact />
                    </div>
                );
            case '404':
                return <NotFoundPage onNavigate={handleNavigate} />;
            default:
                return (
                    <div className="animate-in">
                        <Hero />
                        <Stats />
                        <Services onNavigate={handleNavigate} />
                        <About />
                        <Testimonials />
                        <Contact />
                    </div>
                );
        }
    };

    // Don't show navigation/footer on 404 page
    if (currentView === '404') {
        return (
            <div className="min-h-screen">
                <NotFoundPage onNavigate={handleNavigate} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-offwhite">
            <Navigation currentView={currentView} onNavigate={handleNavigate} />

            <main>
                {renderView()}
            </main>

            <Footer onNavigate={handleNavigate} />
            <AICoach />
        </div>
    );
}

export default App;
