import { motion } from 'motion/react';
import { equipmentCategories } from '../data/equipment';
import { ArrowRight } from 'lucide-react';

interface CatalogProps {
  onOpenQuiz: (categoryId: string) => void;
  onOpenCallback: () => void;
}

export function Catalog({ onOpenQuiz, onOpenCallback }: CatalogProps) {
  return (
    <section id="catalog" className="py-24 bg-viant-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viant-900 mb-4">
            Каталог промышленного оборудования
          </h2>
          <p className="text-lg text-viant-600">
            Мы поставляем только высокопроизводительные решения для крупных предприятий пищевой промышленности.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-viant-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-viant-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-viant-600 mb-6 text-sm flex-grow">
                  {category.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-viant-100">
                    <span className="text-sm text-viant-500">Производительность</span>
                    <span className="text-sm font-semibold text-viant-900">{category.minProd}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-viant-100">
                    <span className="text-sm text-viant-500">Стоимость</span>
                    <span className="text-sm font-semibold text-viant-900">{category.minPrice}</span>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuiz(category.id)}
                  className="w-full flex items-center justify-center py-3 px-4 bg-viant-100 hover:bg-viant-200 text-viant-900 text-sm font-medium rounded-md transition-colors"
                >
                  Подобрать модель
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: equipmentCategories.length * 0.1 }}
            className="bg-viant-900 rounded-xl shadow-sm border border-viant-800 overflow-hidden hover:shadow-md transition-shadow group flex flex-col justify-center items-center text-center p-8 md:col-span-2 lg:col-span-2 relative"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Не нашли в каталоге?
              </h3>
              <p className="text-viant-300 mb-8 max-w-lg mx-auto">
                Оставьте запрос на нужное оборудование, и наши инженеры подберут оптимальное решение под ваши задачи.
              </p>
              <button 
                onClick={onOpenCallback}
                className="inline-flex items-center justify-center py-3 px-8 bg-brand-accent hover:bg-brand-accent-hover text-white font-medium rounded-md transition-colors shadow-lg shadow-brand-accent/20"
              >
                Оставить запрос
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
