export type EquipmentOption = {
  id: string;
  label: string;
  valid: boolean;
};

export type EquipmentCategory = {
  id: string;
  name: string;
  description: string;
  minProd: string;
  minPrice: string;
  image: string;
  options: EquipmentOption[];
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: 'grinders',
    name: 'Волчки / мясорубки',
    description: 'Промышленные волчки для измельчения мяса',
    minProd: 'от 1300 кг/час',
    minPrice: 'По запросу',
    image: '/images/48121753.png.webp',
    options: [
      { id: '130', label: '130 мм (от 1300 кг/ч)', valid: true },
      { id: '160', label: '160 мм (от 3000 кг/ч)', valid: true },
      { id: '200', label: '200 мм (от 2000 кг/ч)', valid: true },
      { id: '300', label: '300 мм (до 10000 кг/ч)', valid: true },
      { id: 'small', label: 'Менее 130 мм / Менее 1300 кг/ч', valid: false },
    ]
  },
  {
    id: 'cutters',
    name: 'Вакуумные куттеры',
    description: 'Высокоскоростные куттеры для тонкого измельчения в вакууме',
    minProd: 'объем от 120 л',
    minPrice: 'По запросу',
    image: '/images/cutter.png',
    options: [
      { id: '120', label: '120 л', valid: true },
      { id: '200', label: '200 л', valid: true },
      { id: '300', label: '300 л', valid: true },
      { id: '500', label: '500 л', valid: true },
      { id: 'above500', label: 'Выше 500 л', valid: true },
    ]
  },
  {
    id: 'packaging',
    name: 'Упаковочное оборудование',
    description: 'Автоматические линии упаковки',
    minProd: 'от 20 упаковок/мин',
    minPrice: 'По запросу',
    image: '/images/upaknew.jpg',
    options: [
      { id: 'meat', label: 'Мясо', valid: true },
      { id: 'fish', label: 'Рыба', valid: true },
      { id: 'cheese', label: 'Сыр', valid: true },
      { id: 'bakery', label: 'Хлебобулочные', valid: true },
      { id: 'other', label: 'Другое', valid: true },
    ]
  },
  {
    id: 'weighing',
    name: 'Весовое этикетировочное оборудование',
    description: 'Точное взвешивание и этикетировка',
    minProd: 'от 30 шт/мин',
    minPrice: 'По запросу',
    image: '/images/weighing.webp',
    options: [
      { id: '30', label: '30 шт/мин', valid: true },
      { id: '50', label: '50 шт/мин', valid: true },
      { id: '70', label: '70 шт/мин', valid: true },
      { id: 'above70', label: 'Выше 70 шт/мин', valid: true },
    ]
  },
  {
    id: 'separators',
    name: 'Сепараторы для мяса и рыбы',
    description: 'Механическая обвалка и сепарирование',
    minProd: 'от 1000 кг/час',
    minPrice: 'По запросу',
    image: '/images/separator.png',
    options: [
      { id: 'meat', label: 'Мясо', valid: true },
      { id: 'fish', label: 'Рыба', valid: true },
      { id: 'other', label: 'Другое', valid: true },
    ]
  },
  {
    id: 'forming',
    name: 'Шприцы вакуумные',
    description: 'Формовка полуфабрикатов',
    minProd: 'от 1000 кг/час',
    minPrice: 'По запросу',
    image: '/images/formnew.png',
    options: [
      { id: '1000', label: '1000 кг/ч', valid: true },
      { id: '2000', label: '2000 кг/ч', valid: true },
      { id: '3000', label: '3000 кг/ч', valid: true },
      { id: 'above3000', label: 'Свыше 3000 кг/ч', valid: true },
    ]
  },
  {
    id: 'frying',
    name: 'Фритюрное оборудование',
    description: 'Промышленные фритюрницы',
    minProd: 'от 500 кг/час',
    minPrice: 'По запросу',
    image: '/images/fritprom.jpg',
    options: [
      { id: '500', label: '500 кг/ч', valid: true },
      { id: '1000', label: '1000 кг/ч', valid: true },
      { id: '1500', label: '1500 кг/ч', valid: true },
      { id: 'above1500', label: 'Свыше 1500 кг/ч', valid: true },
    ]
  },
  {
    id: 'breading',
    name: 'Панировщики Льезон',
    description: 'Линии панировки и нанесения льезона',
    minProd: 'ширина от 400 мм',
    minPrice: 'По запросу',
    image: '/images/planirovshikinew.webp',
    options: [
      { id: '400', label: '400 мм', valid: true },
      { id: '600', label: '600 мм', valid: true },
      { id: '1000', label: '1000 мм', valid: true },
      { id: 'above1000', label: 'Свыше 1000 мм', valid: true },
    ]
  },
  {
    id: 'portioners',
    name: 'Порционеры',
    description: 'Точное порционирование продукта',
    minProd: 'от 1200 кг/час',
    minPrice: 'По запросу',
    image: '/images/portioner.png',
    options: [
      { id: 'meat', label: 'Мясо', valid: true },
      { id: 'fish', label: 'Рыба', valid: true },
      { id: 'cheese', label: 'Сыр', valid: true },
      { id: 'other', label: 'Другое', valid: true },
    ]
  },
  {
    id: 'fillers',
    name: 'Инъекторы',
    description: 'Вакуумное наполнение колбасных изделий',
    minProd: 'от 3000 кг/час',
    minPrice: 'По запросу',
    image: '/images/injector.webp',
    options: [
      { id: '3000-5000', label: '3000-5000 кг/ч', valid: true },
      { id: '6000', label: 'До 6000 кг/ч', valid: true },
      { id: 'above6000', label: 'Свыше 6000 кг/ч', valid: true },
    ]
  }
];
