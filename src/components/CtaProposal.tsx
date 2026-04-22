import { motion } from 'motion/react';
import { FileText, ArrowRight, CheckCircle2, MessageCircle, Send, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

export function CtaProposal() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messenger, setMessenger] = useState('whatsapp');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Yandex.Metrika Goal
    if (typeof (window as any).ym !== 'undefined') {
      (window as any).ym(108714253, 'reachGoal', 'send');
    }

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-viant-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-viant-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left side - Content */}
            <div className="p-10 md:p-16 bg-viant-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-brand-accent/20 rounded-xl mb-6 text-brand-accent">
                  <FileText className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Получите КП с индивидуальным подбором пищевого оборудования
                </h2>
                <p className="text-viant-300 text-lg mb-8">
                  Наши инженеры проанализируют ваши задачи, производственные мощности и бюджет, чтобы предложить оптимальное решение.
                </p>
                <ul className="space-y-4">
                  {[
                    'Точный расчет производительности',
                    'Подбор оптимальных моделей',
                    'План интеграции в текущую линию',
                    'Расчет сроков окупаемости'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-viant-200">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-viant-900 mb-2">Заявка отправлена!</h3>
                  <p className="text-viant-600">
                    Наш специалист свяжется с вами в ближайшее время для уточнения деталей.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-viant-700 mb-3">
                      Куда отправить предложение?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                        { id: 'telegram', label: 'Telegram', icon: Send },
                        { id: 'max', label: 'Макс', icon: MessageSquare }
                      ].map((m) => {
                        const Icon = m.icon;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setMessenger(m.id)}
                            className={`py-3 px-2 rounded-lg border flex flex-col items-center justify-center gap-2 transition-all ${
                              messenger === m.id 
                                ? 'border-brand-accent bg-brand-accent/10 text-brand-accent' 
                                : 'border-viant-200 text-viant-600 hover:border-viant-300 hover:bg-viant-50'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-xs font-medium">{m.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-viant-700 mb-2">
                      Номер телефона
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-viant-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                      placeholder="+7 958 581-24-12"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg transition-colors shadow-lg shadow-brand-accent-hover/20"
                  >
                    Получить предложение
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <p className="text-xs text-viant-500 text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
