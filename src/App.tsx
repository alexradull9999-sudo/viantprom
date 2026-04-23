/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Catalog } from './components/Catalog';
import { About } from './components/About';
import { CtaProposal } from './components/CtaProposal';
import { ServiceSupport } from './components/ServiceSupport';
import { Trust } from './components/Trust';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { QuizModal } from './components/QuizModal';
import { CallbackModal } from './components/CallbackModal';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [initialCategory, setInitialCategory] = useState<string | null>(null);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const handleOpenQuiz = (categoryId: string | null = null) => {
    setInitialCategory(categoryId);
    setIsQuizOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-viant-900">
      <Header onOpenCallback={() => setIsCallbackModalOpen(true)} />
      <Hero onOpenQuiz={() => handleOpenQuiz(null)} />
      <Features />
      <Catalog onOpenQuiz={(id) => handleOpenQuiz(id)} onOpenCallback={() => setIsCallbackModalOpen(true)} />
      <About />
      <CtaProposal />
      <ServiceSupport onOpenCallback={() => setIsCallbackModalOpen(true)} />
      <Trust />
      <Contacts />
      <Footer onOpenQuiz={handleOpenQuiz} />
      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
        initialCategoryId={initialCategory}
      />
      <CallbackModal 
        isOpen={isCallbackModalOpen} 
        onClose={() => setIsCallbackModalOpen(false)} 
      />
    </div>
  );
}
