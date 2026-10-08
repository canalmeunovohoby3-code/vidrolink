export type ImageAsset = {
  src?: string
  alt: string
  placeholder?: string
}

export type ServiceIconName =
  | 'box'
  | 'espelho'
  | 'temperado'
  | 'guarda-corpo'
  | 'portas-janelas'
  | 'fechamento'

export type Service = {
  id: string
  index: string
  title: string
  description: string
  icon: ServiceIconName
}

export type DifferentialIconName = 'qualidade' | 'atendimento' | 'prazo' | 'instalacao'

export type Differential = {
  index: string
  title: string
  description: string
  icon: DifferentialIconName
}

export type Testimonial = {
  id: string
  quote: string
  author: string
  initials: string
  source: string
}

export type GalleryItem = {
  id: string
  index: string
  title: string
  ratio: string
  image: ImageAsset
}

export type NavItem = {
  label: string
  id: string
}

export type AboutHighlight = {
  title: string
  description: string
}
