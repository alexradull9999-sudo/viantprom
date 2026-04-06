import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Settings, Factory } from 'lucide-react';
import { LiveProduction } from './LiveProduction';

interface HeroProps {
  onOpenQuiz: () => void;
}

export function Hero({ onOpenQuiz }: HeroProps) {
  return (
    <div className="relative bg-viant-50 text-viant-900 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Split */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full lg:w-[60%] bg-viant-50" />
        <div className="hidden lg:block w-[40%] bg-viant-950 relative">
          <div 
            className="absolute top-0 left-0 h-full w-32 bg-viant-950 -translate-x-1/2"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-viant-200 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                <span className="text-xs font-bold text-viant-600 uppercase tracking-wider">Оборудование в наличии · Б/У с гарантией</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Запустим линию <br />
                быстрее, чем <br />
                <span className="text-brand-accent italic font-serif">новая поставка.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-viant-600 mb-12 max-w-xl leading-relaxed">
                Обслуженное оборудование ведущих брендов. <br />
                <span className="font-bold text-viant-900">Проверено, готово к работе.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-20">
                <button 
                  onClick={onOpenQuiz}
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-xl transition-all shadow-xl shadow-brand-accent/20 group"
                >
                  Подобрать оборудование
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <a 
                  href="#catalog"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-viant-900 bg-white hover:bg-viant-100 border border-viant-200 rounded-xl transition-all shadow-sm"
                >
                  Смотреть каталог
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Live Production Counter */}
          <div className="lg:col-span-5 hidden lg:block">
            <LiveProduction />
          </div>

        </div>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-viant-100 flex items-center group hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-viant-50 flex items-center justify-center mr-5 group-hover:bg-brand-accent/10 transition-colors">
              <Factory className="h-6 w-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="font-bold text-viant-900">Высокая мощность</h3>
              <p className="text-xs text-viant-500 mt-1">До 20 тонн в час</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-viant-100 flex items-center group hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-viant-50 flex items-center justify-center mr-5 group-hover:bg-brand-accent/10 transition-colors">
              <ShieldCheck className="h-6 w-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="font-bold text-viant-900">Надёжность</h3>
              <p className="text-xs text-viant-500 mt-1">Гарантия 2 года и сервис</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-viant-100 flex items-center group hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-viant-50 flex items-center justify-center mr-5 group-hover:bg-brand-accent/10 transition-colors">
              <Settings className="h-6 w-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="font-bold text-viant-900">Интеграция</h3>
              <p className="text-xs text-viant-500 mt-1">В любые производственные линии</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
