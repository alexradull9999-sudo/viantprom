import { Factory, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-viant-950 text-viant-300 py-16 border-t border-viant-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-white p-3 rounded-xl inline-flex">
                <img 
                  src="/images/herologo.png" 
                  alt="ВИАНТПРОМ Logo" 
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-viant-400 max-w-md leading-relaxed mb-8">
              Комплексные поставки высокопроизводительного промышленного оборудования для предприятий мясо- и рыбоперерабатывающей отрасли.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-brand-accent mr-3 shrink-0" />
                <a href="tel:+79585812412" className="hover:text-white transition-colors">+7 958 581-24-12</a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-brand-accent mr-3 shrink-0" />
                <a href="mailto:info@viantprom.ru" className="hover:text-white transition-colors">info@viantprom.ru</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-accent mr-3 shrink-0" />
                <span>Московская область, Люберецкий район, д.Машково, Машковский проезд, 10А</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Оборудование</h3>
            <ul className="space-y-3">
              <li><a href="#catalog" className="text-viant-400 hover:text-white transition-colors">Волчки и куттеры</a></li>
              <li><a href="#catalog" className="text-viant-400 hover:text-white transition-colors">Упаковочные линии</a></li>
              <li><a href="#catalog" className="text-viant-400 hover:text-white transition-colors">Формовочные машины</a></li>
              <li><a href="#catalog" className="text-viant-400 hover:text-white transition-colors">Фритюрное оборудование</a></li>
              <li><a href="#catalog" className="text-viant-400 hover:text-white transition-colors">Инъекторы</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-viant-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-viant-500">
            &copy; {new Date().getFullYear()} Виантпром. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-viant-500 hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-sm text-viant-500 hover:text-white transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
