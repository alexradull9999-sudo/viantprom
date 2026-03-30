import { motion } from 'motion/react';
import { CheckCircle, Clock, Zap, Shield } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-brand-accent" />,
      title: 'Высокая производительность',
      description: 'Оборудование рассчитано на непрерывную работу в условиях крупных пищевых производств.'
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-accent" />,
      title: 'Европейское качество',
      description: 'Используем надежные комплектующие и передовые технологии сборки.'
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-accent" />,
      title: 'Быстрая окупаемость',
      description: 'Снижение издержек и увеличение объемов выпускаемой продукции.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-accent" />,
      title: 'Сервисная поддержка',
      description: 'Пусконаладочные работы, обучение персонала и гарантийное обслуживание.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-viant-900 mb-4">
            Почему выбирают наше оборудование
          </h2>
          <p className="text-lg text-viant-600">
            Мы предлагаем комплексные решения для модернизации и оснащения мясоперерабатывающих предприятий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-viant-50 rounded-2xl border border-viant-100 hover:border-brand-accent/30 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-viant-900 mb-3">{feature.title}</h3>
              <p className="text-viant-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
