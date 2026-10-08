import type { Testimonial } from '../types'

export const testimonialsHead = {
  eyebrow: 'Avaliações',
  title: 'O que dizem os clientes.',
  description: 'Avaliações reais publicadas no Google.',
}

export const testimonials: Testimonial[] = [
  {
    id: 'kelly',
    quote: 'Qualidade muito boa do material, profissional atencioso e ágil com o serviço.',
    author: 'Kelly Souza',
    initials: 'K',
    source: 'Avaliação no Google',
  },
  {
    id: 'valeria',
    quote: 'Profissional de alta capacidade, cumpre com os prazos estabelecidos.',
    author: 'Valeria Pivato',
    initials: 'V',
    source: 'Avaliação no Google',
  },
]
