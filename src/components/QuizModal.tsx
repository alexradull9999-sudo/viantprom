import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { equipmentCategories, EquipmentCategory, EquipmentOption } from '../data/equipment';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategoryId?: string | null;
}

type Step = 'category' | 'specs' | 'urgency' | 'productCategory' | 'budget' | 'messenger' | 'form' | 'success' | 'disqualified';

export function QuizModal({ isOpen, onClose, initialCategoryId }: QuizModalProps) {
  const [step, setStep] = useState<Step>('category');
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory | null>(null);
  const [selectedOption, setSelectedOption] = useState<EquipmentOption | null>(null);
  
  const [urgency, setUrgency] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [messenger, setMessenger] = useState('');
  
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (initialCategoryId) {
        const cat = equipmentCategories.find(c => c.id === initialCategoryId);
        if (cat) {
          setSelectedCategory(cat);
          setStep('specs');
          return;
        }
      }
      setStep('category');
      setSelectedCategory(null);
    }
  }, [isOpen, initialCategoryId]);

  if (!isOpen) return null;

  const handleCategorySelect = (category: EquipmentCategory) => {
    setSelectedCategory(category);
    setStep('specs');
  };

  const handleOptionSelect = (option: EquipmentOption) => {
    setSelectedOption(option);
    if (option.valid) {
      setStep('urgency');
    } else {
      setStep('disqualified');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ 
      category: selectedCategory?.name, 
      option: selectedOption?.label, 
      urgency,
      productCategory,
      budget,
      messenger,
      phone 
    });
    setStep('success');
  };

  const resetQuiz = () => {
    setStep('category');
    setSelectedCategory(null);
    setSelectedOption(null);
    setUrgency('');
    setProductCategory('');
    setBudget('');
    setMessenger('');
    setPhone('');
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetQuiz, 300);
  };

  const urgencyOptions = ['В течение месяца', '1-3 месяца', 'Полгода и более', 'Просто прицениваюсь'];
  const productCategoryOptions = ['Мясо', 'Птица', 'Рыба', 'Овощи/Фрукты', 'Другое'];
  const budgetOptions = ['До 2 млн ₽', '2 - 5 млн ₽', '5 - 10 млн ₽', 'Более 10 млн ₽', 'Пока не определен'];
  const messengerOptions = ['Telegram', 'WhatsApp', 'Messenger Max'];

  const renderOptions = (options: string[], onSelect: (val: string) => void) => (
    <div className="space-y-3">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className="w-full text-left p-4 border border-viant-200 rounded-xl hover:border-brand-accent hover:bg-viant-50 transition-all flex justify-between items-center group"
        >
          <span className="font-medium text-viant-800 group-hover:text-brand-accent-hover">{opt}</span>
          <ArrowRight className="h-4 w-4 text-viant-400 group-hover:text-brand-accent" />
        </button>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-viant-900/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto"
            >
              <div className="flex justify-between items-center p-6 border-b border-viant-100">
                <h2 className="text-xl font-bold text-viant-900">
                  {step === 'category' && 'Какое оборудование вас интересует?'}
                  {step === 'specs' && `Требования: ${selectedCategory?.name}`}
                  {step === 'urgency' && 'Как срочно вам нужно оборудование?'}
                  {step === 'productCategory' && 'Для какой категории продукции нужно оборудование?'}
                  {step === 'budget' && 'Какой бюджет вы рассматриваете?'}
                  {step === 'messenger' && 'Где вам удобнее получить каталог?'}
                  {step === 'form' && 'Оставьте номер для получения каталога'}
                  {step === 'success' && 'Заявка принята'}
                  {step === 'disqualified' && 'Внимание'}
                </h2>
                <button
                  onClick={handleClose}
                  className="text-viant-400 hover:text-viant-600 transition-colors p-2 rounded-full hover:bg-viant-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-grow">
                {step === 'category' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {equipmentCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat)}
                        className="text-left p-4 border border-viant-200 rounded-xl hover:border-brand-accent hover:bg-viant-50 transition-all group"
                      >
                        <h3 className="font-semibold text-viant-900 group-hover:text-brand-accent-hover mb-1">{cat.name}</h3>
                        <p className="text-xs text-viant-500">{cat.minProd}</p>
                      </button>
                    ))}
                  </div>
                )}

                {step === 'specs' && selectedCategory && (
                  <div className="space-y-3">
                    <p className="text-viant-600 mb-4">Выберите требуемые характеристики или производительность:</p>
                    {selectedCategory.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionSelect(opt)}
                        className="w-full text-left p-4 border border-viant-200 rounded-xl hover:border-brand-accent hover:bg-viant-50 transition-all flex justify-between items-center group"
                      >
                        <span className="font-medium text-viant-800 group-hover:text-brand-accent-hover">{opt.label}</span>
                        <ArrowRight className="h-4 w-4 text-viant-400 group-hover:text-brand-accent" />
                      </button>
                    ))}
                    <button 
                      onClick={() => setStep('category')}
                      className="mt-6 text-sm text-viant-500 hover:text-viant-800 underline underline-offset-4"
                    >
                      Назад к выбору оборудования
                    </button>
                  </div>
                )}

                {step === 'urgency' && renderOptions(urgencyOptions, (val) => { setUrgency(val); setStep('productCategory'); })}
                {step === 'productCategory' && renderOptions(productCategoryOptions, (val) => { setProductCategory(val); setStep('budget'); })}
                {step === 'budget' && renderOptions(budgetOptions, (val) => { setBudget(val); setStep('messenger'); })}
                {step === 'messenger' && renderOptions(messengerOptions, (val) => { setMessenger(val); setStep('form'); })}

                {step === 'form' && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="bg-viant-50 p-4 rounded-lg mb-6 border border-viant-100">
                      <p className="text-sm text-viant-600">Способ связи:</p>
                      <p className="font-semibold text-viant-900">{messenger}</p>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-viant-700 mb-1">Ваш телефон</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-viant-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                        placeholder="+7 958 581-24-12"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold rounded-lg shadow-md transition-colors mt-4"
                    >
                      Получить каталог и расчет
                    </button>
                    <p className="text-xs text-center text-viant-500 mt-4">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                    </p>
                  </form>
                )}

                {step === 'success' && (
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-viant-900 mb-2">Спасибо!</h3>
                    <p className="text-viant-600 mb-8 max-w-md mx-auto">
                      Мы отправим каталог и информацию по оборудованию в выбранный вами мессенджер ({messenger}) в ближайшее время.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-8 py-3 bg-viant-900 hover:bg-viant-800 text-white font-medium rounded-lg transition-colors"
                    >
                      Закрыть
                    </button>
                  </div>
                )}

                {step === 'disqualified' && (
                  <div className="text-center py-10">
                    <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                      <AlertCircle className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-viant-900 mb-4">Оборудование не подходит под ваш запрос</h3>
                    <p className="text-viant-600 mb-8 max-w-md mx-auto leading-relaxed">
                      К сожалению, мы специализируемся исключительно на <strong>промышленном оборудовании высокой мощности</strong> для крупных производств. 
                      <br/><br/>
                      Вашим требованиям больше подойдет оборудование другого класса (для малого бизнеса или HoReCa), которое мы не поставляем.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => setStep('specs')}
                        className="px-6 py-3 bg-viant-100 hover:bg-viant-200 text-viant-800 font-medium rounded-lg transition-colors"
                      >
                        Изменить параметры
                      </button>
                      <button
                        onClick={handleClose}
                        className="px-6 py-3 bg-viant-900 hover:bg-viant-800 text-white font-medium rounded-lg transition-colors"
                      >
                        Закрыть
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
