import type { Differential } from '../types'

export const differentialsHead = {
  eyebrow: 'Por que a Vidrolink',
  title: 'Diferenciais que aparecem nas avaliações reais',
  description: 'Pontos citados com frequência por clientes atendidos em Resende e região.',
}

export const differentials: Differential[] = [
  {
    index: '01',
    title: 'Material de qualidade comprovada',
    description: 'Vidros e ferragens selecionados, com a durabilidade que os clientes reconhecem.',
    icon: 'qualidade',
  },
  {
    index: '02',
    title: 'Atendimento ágil e atencioso',
    description:
      'Resposta rápida pelo WhatsApp e acompanhamento próximo, do primeiro contato à entrega.',
    icon: 'atendimento',
  },
  {
    index: '03',
    title: 'Cumprimento rigoroso de prazos',
    description: 'As datas combinadas são datas cumpridas, com instalação dentro do prazo acordado.',
    icon: 'prazo',
  },
  {
    index: '04',
    title: 'Profissional de alta capacidade técnica',
    description: 'Instalação precisa, acabamento caprichado e segurança em cada detalhe.',
    icon: 'instalacao',
  },
]
