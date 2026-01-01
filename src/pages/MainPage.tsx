import React from 'react';
import GrammarSection from '../components/GrammarSection';
import VocabularySection from '../components/VocabularySection';
import MemorizationSection from '../components/MemorizationSection';
import DictionaryExplorer from '../components/DictionaryExplorer';

interface MainPageProps {
    activeTab: 'grammar' | 'vocabulary' | 'memorization' | 'dictionary';
}

const MainPage: React.FC<MainPageProps> = ({ activeTab }) => {
    return (
        <div className="main-page">
            {activeTab === 'grammar' && <GrammarSection />}
            {activeTab === 'vocabulary' && <VocabularySection />}
            {activeTab === 'memorization' && <MemorizationSection />}
            {activeTab === 'dictionary' && <DictionaryExplorer />}
        </div>
    );
};

export default MainPage;
