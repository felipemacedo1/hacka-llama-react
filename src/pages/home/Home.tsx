import React from 'react';
import Sidebar from '../../components/lsidebar/LeftSideBar';
import PageContent from '../home/PageContent';
import './Home.css';

function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo da Página */}
      <div className="flex-1 overflow-y-auto">
        <PageContent />
      </div>
    </div>
  );
}

export default Home;
