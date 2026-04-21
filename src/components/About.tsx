import { motion } from 'motion/react';
import { Target, Wrench, CheckCircle, MessageSquare } from 'lucide-react';

export function About() {
  const points = [
    {
      icon: <Target className="h-6 w-6 text-brand-accent" />,
      title: 'Наша цель',
      description: 'Обеспечить производителей пищевой отрасли доступным оборудованием для самых различных технологических целей.'
    },
    {
      icon: <Wrench className="h-6 w-6 text-brand-accent" />,
      title: 'Обслуженное Б/У',
      description: 'Реализуем оборудование для мясного, молочного, хлебопекарного, кондитерского и прочих производств.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-accent" />,
      title: 'Проверка и тест-драйв',
      description: 'Всё оборудование проходит техническую проверку. Проводим тест-драйв при клиенте.'
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-brand-accent" />,
      title: 'Консультация',
      description: 'Профессиональный подбор и обслуживание оборудования для решения ваших конкретных задач.'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-viant-900 mb-6">
              О компании <span className="text-brand-accent">Виантпром</span>
            </h2>
            <div className="space-y-6 text-lg text-viant-600 mb-10">
              <p>
                Наша цель обеспечить производителей пищевой отрасли доступным оборудованием для самых различных технологических целей.
              </p>
              <p>
                Мы реализуем обслуженное <strong>Б/У оборудование</strong> для пищевого производства: мясного, молочного, хлебопекарного, кондитерского и прочих.
              </p>
              <p>
                Всё реализуемое нами оборудование проходит техническую проверку, кроме того мы проводим тест-драйв оборудования при клиенте.
              </p>
              <p>
                Оказываем профессиональную консультацию по подбору и обслуживанию пищевого оборудования, необходимого для решения ваших конкретных производственных задач.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-accent rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
            <div className="relative bg-viant-50 rounded-3xl p-8 sm:p-10 border border-viant-100 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {points.map((point, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-viant-100 flex items-center justify-center mb-4">
                      {point.icon}
                    </div>
                    <h3 className="text-lg font-bold text-viant-900 mb-2">{point.title}</h3>
                    <p className="text-sm text-viant-600 leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
