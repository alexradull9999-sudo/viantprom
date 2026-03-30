import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export function Contacts() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contacts" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-viant-900 mb-6 uppercase tracking-tight"
          >
            Контакты
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-brand-accent mx-auto rounded-full"
          />
        </div>

        <div className="bg-viant-50 rounded-3xl overflow-hidden shadow-lg border border-viant-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-10 md:p-16 bg-viant-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-accent rounded-full opacity-20 blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Свяжитесь с нами</h3>
                <p className="text-viant-300 mb-10">
                  Готовы обсудить ваш проект? Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                      <Phone className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-viant-400 mb-1">Телефон</p>
                      <a href="tel:+79585812412" className="text-lg font-semibold hover:text-brand-accent transition-colors">
                        +7 958 581-24-12
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                      <Mail className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-viant-400 mb-1">Email</p>
                      <a href="mailto:info@viantprom.ru" className="text-lg font-semibold hover:text-brand-accent transition-colors">
                        info@viantprom.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                      <MapPin className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-viant-400 mb-1">Офис</p>
                      <p className="text-lg font-semibold">
                        г. Москва, ул. Промышленная, д. 1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-viant-900 mb-2">Спасибо за обращение!</h3>
                  <p className="text-viant-600">
                    Мы получили ваши контактные данные и скоро перезвоним.
                  </p>
                </motion.div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-viant-900 mb-6">Оставить заявку</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-viant-700 mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-viant-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-viant-700 mb-2">
                        Номер телефона
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-viant-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                        placeholder="+7 958 581-24-12"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg transition-colors shadow-lg shadow-brand-accent-hover/20"
                    >
                      Отправить
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <p className="text-xs text-viant-500 text-center mt-4">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
