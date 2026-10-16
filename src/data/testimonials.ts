import type { Testimonial, VideoTestimonial } from '../types'

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
  {
    id: 'lucas',
    quote: 'Fui muito bem atendido e foi onde eu achei o melhor preço.',
    author: 'Lucas Máximo',
    initials: 'L',
    source: 'Depoimento de cliente',
  },
  {
    id: 'fernanda',
    quote: 'Serviço de excelência! Ótimo custo!',
    author: 'Fernanda Fontoura',
    initials: 'F',
    source: 'Depoimento de cliente',
  },
]

export const videoTestimonialsHead = {
  eyebrow: 'Depoimentos',
  title: 'Depoimentos em vídeo',
  description: 'Vídeos gravados por clientes atendidos em Resende e região.',
}

export const videoTestimonials: VideoTestimonial[] = [
  { id: 'video-01', title: 'Depoimento 01', src: '/video1.mp4' },
  { id: 'video-02', title: 'Depoimento 02', src: '/video2.mp4' },
  { id: 'video-03', title: 'Depoimento 03', src: '/video3.mp4' },
]
