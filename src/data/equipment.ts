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
    minProd: 'от 1,3 т/час',
    minPrice: 'По запросу',
    image: '/images/grinder.png',
    options: [
      { id: '130', label: '130 мм (от 1,3 т/ч)', valid: true },
      { id: '160', label: '160 мм (от 3 т/ч)', valid: true },
      { id: '200', label: '200 мм (от 2 т/ч)', valid: true },
      { id: '300', label: '300 мм (до 10 т/ч)', valid: true },
      { id: 'small', label: 'Менее 130 мм / Менее 1,3 т/ч', valid: false },
    ]
  },
  {
    id: 'cutters',
    name: 'Куттеры',
    description: 'Высокоскоростные куттеры для тонкого измельчения',
    minProd: 'объем от 200 л',
    minPrice: 'По запросу',
    image: '/images/cutter.png',
    options: [
      { id: '200', label: 'Объем от 200 л (загрузка от 100 кг)', valid: true },
      { id: 'small', label: 'Объем менее 200 л', valid: false },
    ]
  },
  {
    id: 'packaging',
    name: 'Упаковочное оборудование',
    description: 'Автоматические линии упаковки',
    minProd: 'от 20 упаковок/мин',
    minPrice: 'По запросу',
    image: '/images/packaging.webp',
    options: [
      { id: '20', label: 'От 20 упаковок/мин', valid: true },
      { id: 'small', label: 'Менее 20 упаковок/мин', valid: false },
    ]
  },
  {
    id: 'weighing',
    name: 'Весовое и весоэтикетировочное оборудование',
    description: 'Точное взвешивание и этикетировка',
    minProd: 'от 20 упаковок/мин',
    minPrice: 'По запросу',
    image: '/images/weighing.webp',
    options: [
      { id: '20', label: 'От 20 упаковок/мин', valid: true },
      { id: 'small', label: 'Менее 20 упаковок/мин', valid: false },
    ]
  },
  {
    id: 'separators',
    name: 'Сепараторы для мяса / рыбы',
    description: 'Механическая обвалка и сепарирование',
    minProd: 'от 200 кг/час',
    minPrice: 'По запросу',
    image: '/images/separator.png',
    options: [
      { id: '200', label: 'От 200 кг/час', valid: true },
      { id: 'small', label: 'Менее 200 кг/час', valid: false },
    ]
  },
  {
    id: 'forming',
    name: 'Формовочные машины',
    description: 'Формовка полуфабрикатов',
    minProd: 'от 300 кг/час',
    minPrice: 'По запросу',
    image: '/images/forming.webp',
    options: [
      { id: '400', label: 'Ширина ленты от 400 мм / от 300 кг/час', valid: true },
      { id: 'small', label: 'Менее 400 мм / менее 300 кг/час', valid: false },
    ]
  },
  {
    id: 'frying',
    name: 'Фритюрное оборудование',
    description: 'Промышленные фритюрницы',
    minProd: 'от 300 кг/час',
    minPrice: 'По запросу',
    image: '/images/fryer.jpg',
    options: [
      { id: '300', label: 'От 300 кг/час', valid: true },
      { id: 'small', label: 'Менее 300 кг/час', valid: false },
    ]
  },
  {
    id: 'breading',
    name: 'Панировщики / льезон',
    description: 'Линии панировки и нанесения льезона',
    minProd: 'от 300 кг/час',
    minPrice: 'По запросу',
    image: '/images/breading.webp',
    options: [
      { id: '400', label: 'Ширина ленты от 400 мм / от 300 кг/час', valid: true },
      { id: 'small', label: 'Менее 400 мм / менее 300 кг/час', valid: false },
    ]
  },
  {
    id: 'portioners',
    name: 'Порционеры',
    description: 'Точное порционирование продукта',
    minProd: 'от 1,2 т/час',
    minPrice: 'По запросу',
    image: '/images/portioner.png',
    options: [
      { id: '1200', label: 'От 1,2 т/час', valid: true },
      { id: 'small', label: 'Менее 1,2 т/час', valid: false },
    ]
  },
  {
    id: 'injectors',
    name: 'Инъекторы',
    description: 'Инъектирование мяса и рыбы',
    minProd: 'от 90 кг/час',
    minPrice: 'По запросу',
    image: '/images/injector.webp',
    options: [
      { id: '90', label: 'От 90 кг/час / ширина конвейера от 300 мм', valid: true },
      { id: 'small', label: 'Менее 90 кг/час / менее 300 мм', valid: false },
    ]
  }
];
