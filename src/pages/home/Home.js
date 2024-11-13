import React from 'react';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import QuestionForm from '../../components/QuestionForm'
import QuestionCards from '../../components/QuestionCards'
import './Home.css';

const Home = () => {
    const handlePrint = () => window.print();
    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob(["Conteúdo para download"], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "conteudo.txt";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <NavBar />
            <main className="flex flex-1">
                {/* Lateral Sidebar */}
                <aside className="bg-white p-4 w-1/4">
                {/* https://i.imgur.com/dQP9Zmd.gif */}
                <QuestionForm />
                </aside>
                {/* Main content */}
                <section className="flex-1 p-4">
                    <QuestionCards />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
