import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Settings, Factory } from 'lucide-react';
import { LiveProduction } from './LiveProduction';

interface HeroProps {
  onOpenQuiz: () => void;
}

export function Hero({ onOpenQuiz }: HeroProps) {
  return (
    <div className="relative bg-viant-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          alt="Industrial Equipment" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-viant-900 via-viant-900/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Промышленное оборудование для <span className="text-brand-accent">мясо- и рыбопереработки</span>
              </h1>
              <p className="text-lg md:text-xl text-viant-300 mb-10 max-w-2xl">
                Поставляем высокопроизводительные решения для крупных пищевых производств. Надежность, мощность и европейские стандарты качества.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button 
                  onClick={onOpenQuiz}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-hover rounded-md transition-colors shadow-lg shadow-brand-accent-hover/20"
                >
                  Подобрать оборудование
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <a 
                  href="#catalog"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-viant-800 hover:bg-viant-700 border border-viant-700 rounded-md transition-colors"
                >
                  Смотреть каталог
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-viant-800 pt-8"
            >
              <div className="flex items-start">
                <Factory className="h-8 w-8 text-brand-accent mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Высокая мощность</h3>
                  <p className="text-sm text-viant-400">От 1 тонны в час</p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="h-8 w-8 text-brand-accent mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Надежность</h3>
                  <p className="text-sm text-viant-400">Гарантия и сервис</p>
                </div>
              </div>
              <div className="flex items-start">
                <Settings className="h-8 w-8 text-brand-accent mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Интеграция</h3>
                  <p className="text-sm text-viant-400">В любые линии</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Live Production Counter */}
          <div className="lg:col-span-5 hidden md:block">
            <LiveProduction />
          </div>

        </div>
      </div>
    </div>
  );
}
