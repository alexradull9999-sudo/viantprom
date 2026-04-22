import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setIsSubmitted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Yandex.Metrika Goal
    if (typeof (window as any).ym !== 'undefined') {
      (window as any).ym(108714253, 'reachGoal', 'send');
    }

    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-viant-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-viant-400 hover:text-viant-600 hover:bg-viant-50 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-viant-900 mb-2">Заявка принята!</h3>
                  <p className="text-viant-600">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-viant-900 mb-2">Оставьте заявку</h3>
                  <p className="text-viant-600 mb-6 text-sm">
                    Введите ваш номер телефона, и мы перезвоним вам для уточнения деталей.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-phone" className="block text-sm font-medium text-viant-700 mb-1">
                        Номер телефона
                      </label>
                      <input
                        type="tel"
                        id="modal-phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-viant-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                        placeholder="+7 958 581-24-12"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg transition-colors shadow-lg shadow-brand-accent-hover/20 mt-2"
                    >
                      Жду звонка
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <p className="text-xs text-viant-500 text-center mt-4">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
