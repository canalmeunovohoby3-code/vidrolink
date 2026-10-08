# Plano — Site Vidrolink (vidraçaria em Resende/RJ)

## Objetivo
Criar um site institucional profissional para a vidraçaria, com identidade própria,
inspirado na **estrutura e experiência** do site de referência (vidrolink.lovable.app),
porém em **visual claro e sofisticado** e com **10 espaços para fotos reais** dos trabalhos.

Regras: sem cópia literal de código/textos; sem inventar clientes, números,
certificações, endereço ou telefone; dados reais reaproveitados da referência e reescritos.

## Decisões confirmadas
- **Conteúdo:** reutilizar os dados reais da referência e **reescrever** os textos.
  - Empresa: **Vidrolink** — Vidraçaria em Resende/RJ
  - WhatsApp/Tel: **(24) 98151-6446** → `wa.me/5524981516446`
  - Endereço: **R. Nossa Sra. Aparecida, 97 - Paraíso, Resende - RJ, 27536-090**
  - Horário: fecha às 17:00 (conforme referência)
  - Google: **4,3** e 2 avaliações reais (Kelly Souza / Valeria Pivato)
- **Stack:** Vite + React + TypeScript + **CSS próprio por seção** (sem Tailwind, sem HTML estático).
- **Deploy:** Vercel. Build `tsc && vite build` → `dist/`.
- **Performance:** sem bibliotecas de animação; apenas CSS + IntersectionObserver, respeitando `prefers-reduced-motion`.

## Identidade visual (fundo claro + estética de vidro)
- Conceito: **vidro + precisão + acabamento + modernidade + confiança**.
- Paleta (tokens em `tokens.css`): papel off-white frio (`#f5f7f8`), superfícies brancas,
  tinta escura `#0f1720`, acento **teal petróleo** (vidro) `~#0f8a93` com tom claro
  `~#4fb8c4` e tint `#e6f4f5`. Linhas finas `rgba(15,23,32,.08)`. Sem azul-escuro pesado.
- Detalhes "vidro": brilhos suaves, bordas 1px, blur leve no header, leve gradiente de sheen em botões/CTAs.
- Tipografia: display **Space Grotesk**, corpo **Inter**, rótulos **IBM Plex Mono** (Google Fonts).
- Bastante respiro, imagens grandes, hierarquia clara, sombras mínimas, poucos cantos arredondados.

## Estrutura da Home (ordem)
1. **Navbar** — logo, âncoras, CTA "Solicitar orçamento"; menu mobile (drawer).
2. **Hero** — proposta de valor, área de atuação (Resende e região), CTA principal
   + secundário "Conheça nossos serviços"; imagem principal com moldura/placeholder.
3. **Sobre** — apresentação objetiva da empresa (reescrita), pontos de apoio.
4. **Serviços** — cards com ícones (ver lista abaixo).
5. **Diferenciais** — 4 itens reais da referência, reaproveitados.
6. **Avaliações** — nota 4,3 + 2 depoimentos reais do Google.
7. **Galeria "Nossos trabalhos"** — **10 slots de fotos reais** + lightbox.
8. **Área de atuação** — "Atendemos Resende e toda a região" + lista de cidades.
9. **Contato** — WhatsApp/tel, endereço, horário, mapa/rota, CTA; **repete a área de atuação**.
10. **Rodapé** — logo, serviços, contato, área de atuação, copyright.

## Serviços (ajuste solicitado)
- **Adicionar:** Guarda-corpo · Portas e Janelas
- **Remover:** Esquadrias de Alumínio
- Resultado final: Box de Banheiro · Espelhos Sob Medida · Vidros Temperados ·
  Guarda-corpo · Portas e Janelas · Fechamentos Residenciais e Comerciais.
- "Medição e instalação inclusas" vira uma faixa/destaque (não um card de serviço).

## Área de atuação (exatamente estas localidades)
Resende · Penedo · Itatiaia · Porto Real · Quatis · Visconde de Mauá · Maringá · Arapeí · Formoso · toda a região.
Exibida no Hero (linha), na seção dedicada e no Contato/Rodapé. Nenhuma outra cidade.

## Galeria — 10 espaços prontos para trocar
- Pasta: `public/images/galeria/01.webp` … `10.webp` (nomes fixos).
- `src/data/gallery.ts` com 10 itens (`id`, `title`, `ratio`, `image.src`, `alt`, `placeholder`).
- Componente `Media` tenta carregar a imagem e, se ausente/erro (`onError`), mostra um
  **placeholder identificado** ("Imagem 01 — adicione a foto"). Ou seja: basta colar os
  arquivos com o nome certo que aparecem automaticamente.
- Layout: **masonry responsivo** (CSS `columns`, 1→2→3 colunas), sem crop ruim,
  cards com hover elegante (zoom leve + overlay), clique abre **lightbox** (setas, teclado, Esc, foco).
- `LEIA-ME.txt` em `/public/images/galeria/` com instruções de nomes e formatos.

## Logo
- Pasta: `public/images/logo/` com `LEIA-ME.txt`.
- `Logo.tsx` tenta `logo.png`/`logo.svg`; se não existir, exibe **placeholder claramente
  marcado** (caixa tracejada "LOGO OFICIAL AQUI" + nome), sem criar logo fictícia.
- Usado no header e rodapé.

## Componentes e interações
- `Reveal` (IntersectionObserver) para entrada suave de seções/imagens.
- `Media` (imagem + fallback de placeholder + lazy loading + aspect-ratio).
- `Lightbox` (portal, acessível), `WhatsAppFloat` (botão flutuante), `Icons` (SVG inline).
- Microinterações: hover em cards, botões com leve elevação/sheen, transições suaves,
  pequeno movimento no Hero. Tudo sutil e leve; desligado em `prefers-reduced-motion`.

## Estrutura de arquivos
```
index.html · package.json · tsconfig.json · tsconfig.node.json · vite.config.ts · vercel.json · .gitignore · README.md
public/ favicon.svg · robots.txt · sitemap.xml
        images/logo/LEIA-ME.txt · images/galeria/LEIA-ME.txt · images/hero/LEIA-ME.txt
src/ main.tsx · App.tsx · types.ts
     styles/tokens.css · styles/global.css
     data/site.ts · services.ts · differentials.ts · testimonials.ts · gallery.ts
     components/Logo · Reveal · Icons · Media · Lightbox · WhatsAppFloat  (+ .css)
     sections/Navbar · Hero · About · Services · Differentials · Testimonials ·
              Gallery · Coverage · Contact · Footer  (+ .css)
```

## Responsividade
- Mobile-first; validar **390px, 414px** e **1440px**.
- Menu funcional no mobile, botões com alvo de toque confortável, galeria adaptada,
  textos legíveis, espaçamento generoso e CTA de WhatsApp sempre acessível.

## SEO / deploy
- `index.html` em `pt-BR` com title/description, Open Graph e JSON-LD `LocalBusiness`
  usando apenas os dados reais acima. `robots.txt`, `sitemap.xml`, `vercel.json`.
- SPA de página única com âncoras; sem rotas extras.

## Validação
- `npm install` → `npm run typecheck` → `npm run build` → `npm run preview`.
- Conferir visual em 390/414/1440, lightbox, menu mobile e fallback de logo/fotos.

## O que ainda depende do cliente (espaços preparados)
- Arquivo do **logo oficial** → `public/images/logo/`.
- **10 fotos reais** → `public/images/galeria/01.webp` … `10.webp`.
- Foto do **Hero** (opcional) → `public/images/hero/`.
- Confirmação de endereço/horário atuais (hoje vindos da referência).
