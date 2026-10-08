export const site = {
  name: 'Vidrolink',
  tagline: 'Vidraçaria em Resende — RJ',
  logoCandidates: ['/images/logo/logo.png'],
  logoWidth: 1103,
  logoHeight: 728,
  wordmark: 'VIDROLINK',
  wordmarkSub: 'Vidraçaria',
  phoneDisplay: '(24) 98151-6446',
  email: 'vidrolinkpivato79@gmail.com',
  whatsappNumber: '5524981516446',
  address: 'R. Nossa Sra. Aparecida, 97 - Paraíso, Resende - RJ, 27536-090',
  addressShort: 'R. Nossa Sra. Aparecida, 97 — Paraíso, Resende - RJ',
  hours: 'Fecha às 17:00',
  rating: '4,3',
  ratingValue: 4.3,
  ratingLabel: 'Avaliações reais no Google',
} as const

export const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Gostaria de solicitar um orçamento.'

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address,
)}`

export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.address,
)}&t=m&z=16&output=embed`

export const coverage = {
  title: 'Atendemos Resende e toda a região',
  lead: 'Instalações residenciais e comerciais com medição no local e acabamento profissional.',
  cities: [
    'Resende',
    'Penedo',
    'Itatiaia',
    'Porto Real',
    'Quatis',
    'Visconde de Mauá',
    'Maringá',
    'Arapeí',
    'Formoso',
  ],
  closing:
    'Atendemos Resende, Penedo, Itatiaia, Porto Real, Quatis, Visconde de Mauá, Maringá, Arapeí, Formoso e toda a região.',
} as const

export const credibility = {
  score: site.rating,
  label: 'Avaliações reais no Google',
  title: 'O que os clientes mais destacam',
  items: ['Qualidade do material', 'Agilidade no serviço', 'Cumprimento de prazo'],
} as const

export const hero = {
  eyebrow: 'Vidraçaria em Resende — RJ',
  titleLead: 'Vidros sob medida com',
  titleAccent: 'precisão e acabamento',
  subtitle:
    'Projetos e instalações de vidro para residências e comércios: box de banheiro, espelhos, vidros temperados, guarda-corpo, portas e janelas — com medição no local e acabamento impecável.',
  primaryCta: 'Solicitar orçamento',
  secondaryCta: 'Ver serviços',
  trust: 'Orçamento rápido pelo WhatsApp',
  image: {
    src: '/HERO.jpeg',
    alt: 'Fechamento de varanda em vidro instalado pela Vidrolink',
    placeholder: 'Adicione a foto principal',
  },
} as const

export const about = {
  eyebrow: 'A empresa',
  title: 'A Vidrolink é uma vidraçaria de Resende.',
  paragraphs: [
    'Trabalhamos com vidros sob medida e instalações residenciais e comerciais, do orçamento à instalação.',
    'Medimos no local, indicamos a solução adequada para cada ambiente e executamos com acabamento caprichado — sempre com resposta ágil pelo WhatsApp.',
  ],
  highlights: [
    { title: 'Sob medida', description: 'Cada peça é produzida para as medidas exatas do ambiente.' },
    { title: 'Medição e instalação', description: 'Vamos até o local, medimos e instalamos com agilidade.' },
    { title: 'Residencial e comercial', description: 'Casas, lojas, escritórios e obras em Resende e região.' },
  ],
} as const

export const location = {
  eyebrow: 'Onde estamos',
  title: 'Visite nossa vidraçaria em Resende',
  addressLabel: 'Endereço',
  hoursLabel: 'Horário',
  phoneLabel: 'Telefone / WhatsApp',
  mapsCta: 'Abrir no Google Maps',
  whatsappCta: 'Falar agora pelo WhatsApp',
  coverageLabel: 'Área de atuação',
} as const

export const ctaBanner = {
  title: 'Precisa de vidro sob medida? Fale com a Vidrolink.',
  description:
    'Envie uma mensagem pelo WhatsApp, receba seu orçamento com agilidade e agende a medição no seu horário.',
  cta: 'Solicitar Orçamento no WhatsApp',
  note: 'Atendimento rápido',
} as const
