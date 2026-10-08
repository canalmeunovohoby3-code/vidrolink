# Vidrolink — Site institucional

Site da vidraçaria Vidrolink (Resende/RJ). Stack: **Vite + React + TypeScript + CSS próprio**.
Deploy previsto na **Vercel** (build gera `dist/`).

## Comandos

```bash
npm install      # instala dependências
npm run dev      # ambiente de desenvolvimento
npm run typecheck
npm run build    # gera dist/
npm run preview  # pré-visualiza o build
```

## Onde colocar o conteúdo real do cliente

- **Logo oficial:** `public/images/logo/` → `logo.svg` ou `logo.png`
  (ver `public/images/logo/LEIA-ME.txt`). Sem o arquivo, aparece um placeholder
  marcado como "LOGO OFICIAL AQUI".
- **10 fotos dos trabalhos:** `public/images/galeria/01.webp` … `10.webp`
  (ver `public/images/galeria/LEIA-ME.txt`). Sem os arquivos, cada espaço mostra
  um placeholder identificado. Basta colar as fotos com os nomes corretos.
- **Foto do Hero (opcional):** `public/images/hero/hero.webp`.

## Dados editáveis

Todo o conteúdo textual e os dados de contato ficam em `src/data/`:

- `site.ts` — nome, telefone/WhatsApp, endereço, horário, nota do Google, área de atuação.
- `services.ts` — serviços exibidos.
- `differentials.ts` — diferenciais.
- `testimonials.ts` — avaliações reais do Google.
- `gallery.ts` — os 10 espaços da galeria.

## Pendências de infraestrutura

- Definir o **domínio final** e atualizar: `public/robots.txt`, `public/sitemap.xml`
  e `<link rel="canonical">` / `og:url` em `index.html` (hoje com `https://vidrolink.com.br/`).
- Confirmar **endereço e horário** atuais com o cliente (hoje conforme o site de referência).
