import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grammar' | 'vocabulary' | 'memorization' | 'dictionary'>('grammar');

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Китайский язык</h1>
        <nav className="nav-buttons">
          <button
            className={`nav-button ${activeTab === 'grammar' ? 'active' : ''}`}
            onClick={() => setActiveTab('grammar')}
          >
            Грамматика
          </button>
          <button
            className={`nav-button ${activeTab === 'vocabulary' ? 'active' : ''}`}
            onClick={() => setActiveTab('vocabulary')}
          >
            Лексика
          </button>
          <button
            className={`nav-button ${activeTab === 'memorization' ? 'active' : ''}`}
            onClick={() => setActiveTab('memorization')}
          >
            Запоминание
          </button>
          <button className={`nav-button ${activeTab === 'dictionary' ? 'active' : ''}`} onClick={() => setActiveTab('dictionary')}>Словарь</button>
        </nav>
      </header>

      <main className="main-content">
        <div className="content-card">
          <MainPage activeTab={activeTab} />
        </div>
      </main>
    </div>
  );
};

export default App;
