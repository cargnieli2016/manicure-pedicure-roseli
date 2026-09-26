# Roseli Manicure e Pedicure

Site profissional da Roseli, manicure e pedicure em Caieiras, São Paulo. Apresenta os serviços, a experiência profissional e facilita o agendamento pelo WhatsApp.

**Acesse o site:** [cargnieli2016.github.io/manicure-pedicure-roseli](https://cargnieli2016.github.io/manicure-pedicure-roseli/)

## Sobre o projeto

- Página responsiva para serviços de manicure e pedicure.
- Informações sobre atendimento e experiência em Caieiras/SP.
- Contato e agendamento direto pelo WhatsApp.
- Pré-renderização para publicação estática no GitHub Pages.

## Tecnologias

- React 19 e TypeScript
- TanStack Start e TanStack Router
- Vite e Tailwind CSS

## Executar localmente

Requisitos: Node.js 20 ou superior e npm.

```sh
npm install
npm run dev
```

O servidor local ficará disponível em `http://localhost:5173`.

Para gerar o build de produção:

```sh
npm run build
```

## Publicação

Cada push para a branch `main` executa o workflow do GitHub Actions, gera a versão estática e publica o conteúdo de `.output/public` no GitHub Pages.

Na primeira publicação, configure o repositório em **Settings → Pages → Build and deployment → Source → GitHub Actions**.
