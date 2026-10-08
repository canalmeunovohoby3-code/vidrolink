import type { GalleryItem } from '../types'

export const galleryHead = {
  eyebrow: 'Trabalhos realizados',
  title: 'Instalações que falam por si',
  description: 'Projetos entregues em residências e comércios de Resende e região.',
}

const photos = [
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/5.jpeg',
  '/6.jpeg',
  '/7.jpeg',
  '/8.jpeg',
  '/9.jpeg',
]

export const gallery: GalleryItem[] = photos.map((src, index) => {
  const label = `Imagem ${String(index + 1).padStart(2, '0')}`
  return {
    id: `img-${String(index + 1).padStart(2, '0')}`,
    index: label,
    title: label,
    ratio: '4 / 5',
    image: {
      src,
      alt: 'Trabalho realizado pela Vidrolink',
      placeholder: `${label} — adicione a foto`,
    },
  }
})
