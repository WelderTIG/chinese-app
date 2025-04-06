import React from 'react';
import GrammarSection from '../components/GrammarSection';
import VocabularySection from '../components/VocabularySection';
import MemorizationSection from '../components/MemorizationSection';

interface MainPageProps {
    activeTab: 'grammar' | 'vocabulary' | 'memorization';
}

const MainPage: React.FC<MainPageProps> = ({ activeTab }) => {
    return (
        <div className="main-page">
            {activeTab === 'grammar' && <GrammarSection />}
            {activeTab === 'vocabulary' && <VocabularySection />}
            {activeTab === 'memorization' && <MemorizationSection />}
        </div>
    );
};

export default MainPage;