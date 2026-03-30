import { motion } from 'motion/react';
import { ShieldCheck, UserCog, Headset, MapPin, Package, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Расширенная гарантия на оборудование',
    description: '2 года безусловной гарантии'
  },
  {
    icon: UserCog,
    title: 'Более 16 лет стаж инженеров',
    description: 'в области упаковочных машин по техническим и технологическим вопросам'
  },
  {
    icon: Headset,
    title: '24/7 работа сервисного отдела',
    description: 'Получайте консультацию по телефону или видеосвязи в любое время'
  },
  {
    icon: MapPin,
    title: 'Выездная инженерная служба',
    description: 'При возникновении нестандартной ситуации вызовите инженеров к себе на предприятие. В любой момент'
  },
  {
    icon: Package,
    title: 'Запасные части в наличии',
    description: 'Готовы отправиться в любой момент к вам'
  }
];

interface ServiceSupportProps {
  onOpenCallback: () => void;
}

export function ServiceSupport({ onOpenCallback }: ServiceSupportProps) {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-viant-900 mb-6 uppercase tracking-tight"
          >
            Сервис и поддержка
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-brand-accent mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-viant-50 rounded-2xl p-8 border border-viant-100 hover:border-brand-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-viant-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-accent transition-all duration-300">
                  <Icon className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-viant-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-viant-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: services.length * 0.1 }}
            className="bg-viant-900 rounded-2xl p-8 border border-viant-800 hover:shadow-lg transition-all group flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10 flex flex-col items-center h-full justify-center w-full">
              <h3 className="text-xl font-bold text-white mb-4">
                Нужна помощь специалистов?
              </h3>
              <p className="text-viant-300 mb-6 text-sm">
                Оставьте заявку, и наши инженеры оперативно решат вашу задачу.
              </p>
              <button 
                onClick={onOpenCallback}
                className="w-full inline-flex items-center justify-center py-3 px-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-medium rounded-lg transition-colors shadow-lg shadow-brand-accent/20"
              >
                Связаться с сервис центром
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
