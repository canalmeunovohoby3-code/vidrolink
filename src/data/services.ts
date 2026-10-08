import type { Service } from '../types'

export const servicesHead = {
  eyebrow: 'Nossos serviços',
  title: 'Soluções completas em vidro',
  description:
    'Do orçamento à instalação, cada projeto é feito sob medida, com medição no local e acabamento caprichado.',
}

export const services: Service[] = [
  {
    id: 'box',
    index: '01',
    title: 'Box de Banheiro',
    description:
      'Box de vidro sob medida, com ferragens de qualidade e instalação com acabamento perfeito para o seu banheiro.',
    icon: 'box',
  },
  {
    id: 'espelhos',
    index: '02',
    title: 'Espelhos Sob Medida',
    description:
      'Espelhos cortados e lapidados nas medidas exatas do seu ambiente — para banheiros, quartos e áreas comerciais.',
    icon: 'espelho',
  },
  {
    id: 'temperados',
    index: '03',
    title: 'Vidros Temperados',
    description:
      'Vidro temperado de alta resistência para portas, sacadas, tampos e divisórias, com segurança em cada detalhe.',
    icon: 'temperado',
  },
  {
    id: 'guarda-corpo',
    index: '04',
    title: 'Guarda-corpo',
    description:
      'Guarda-corpos em vidro para escadas, sacadas e mezaninos, unindo segurança e transparência no seu projeto.',
    icon: 'guarda-corpo',
  },
  {
    id: 'portas-janelas',
    index: '05',
    title: 'Portas e Janelas',
    description:
      'Portas e janelas com vidro, sob medida, para valorizar o conforto e o design do seu espaço.',
    icon: 'portas-janelas',
  },
  {
    id: 'fechamentos',
    index: '06',
    title: 'Fechamentos Residenciais e Comerciais',
    description:
      'Fechamentos de varandas, coberturas e fachadas com vidro para residências, lojas e escritórios em Resende e região.',
    icon: 'fechamento',
  },
]
