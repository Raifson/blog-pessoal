# Blog Pessoal - Next.js 15

Um blog pessoal simples e moderno desenvolvido com Next.js 15, TypeScript e Tailwind CSS, demonstrando os conceitos fundamentais do App Router, Server Components e Client Components.

## 🚀 Funcionalidades

- **Página inicial** - Lista de posts do blog com Server Components
- **Posts individuais** - Páginas dinâmicas para cada post usando roteamento dinâmico
- **Página sobre** - Página estática com informações pessoais
- **Navegação global** - Layout compartilhado entre todas as páginas
- **Botão de curtir** - Interatividade com Client Components
- **Design responsivo** - Layout mobile-first com Tailwind CSS

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **React** - Biblioteca para interfaces de usuário

## 📁 Estrutura do Projeto

```
blog-pessoal/
├── app/
│   ├── layout.tsx          # Layout global com navegação
│   ├── page.tsx            # Página inicial (lista de posts)
│   ├── about/
│   │   └── page.tsx        # Página sobre
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx    # Post individual dinâmico
│   └── globals.css         # Estilos globais
├── components/
│   ├── PostCard.tsx        # Card do post (Server Component)
│   └── LikeButton.tsx      # Botão curtir (Client Component)
├── public/                 # Arquivos estáticos
└── package.json           # Dependências e scripts
```

## 🏃‍♂️ Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação e Execução

1. **Clone ou extraia o projeto**
   ```bash
   cd blog-pessoal
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 🎯 Conceitos Demonstrados

### App Router
- Roteamento baseado em sistema de arquivos
- Páginas definidas por `page.tsx`
- Layouts com `layout.tsx`
- Rotas dinâmicas com `[slug]`

### Server Components (Padrão)
- Componentes que executam no servidor
- Melhor performance e SEO
- Acesso direto a dados
- Sem JavaScript enviado ao cliente

### Client Components
- Componentes interativos com estado
- Executam no navegador
- Necessários para `useState`, `useEffect`, eventos
- Marcados com `"use client"`

### Roteamento Dinâmico
- URLs baseadas em parâmetros (`/posts/[slug]`)
- Geração de páginas estáticas
- Acesso aos parâmetros da URL

## 🎨 Design e Estilização

- **Mobile-first** - Design responsivo que prioriza dispositivos móveis
- **Tailwind CSS** - Estilização utility-first para desenvolvimento rápido
- **Animações** - Transições suaves e efeitos hover
- **Tipografia** - Sistema de tipografia otimizado para leitura
- **Cores** - Paleta de cores moderna e acessível

## 📱 Responsividade

O projeto foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- **Mobile** (< 768px) - Layout em coluna única
- **Tablet** (768px - 1024px) - Layout adaptado para tablets
- **Desktop** (> 1024px) - Layout completo com múltiplas colunas

## 🔧 Personalização

### Adicionando Novos Posts

Para adicionar novos posts, edite o array `posts` em:
- `app/page.tsx` (página inicial)
- `app/posts/[slug]/page.tsx` (posts individuais)

### Modificando Estilos

- **Estilos globais**: `app/globals.css`
- **Componentes**: Classes Tailwind nos arquivos `.tsx`
- **Configuração Tailwind**: `tailwind.config.ts`

### Personalizando Informações

- **Dados pessoais**: `app/about/page.tsx`
- **Título do site**: `app/layout.tsx`
- **Informações do autor**: Arquivos de posts

## 🚀 Deploy

O projeto pode ser facilmente deployado em plataformas como:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **GitHub Pages** (com export estático)

Para build de produção:
```bash
npm run build
```

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e demonstração dos conceitos do Next.js 15.

## 🤝 Contribuição

Sinta-se à vontade para fazer fork do projeto e contribuir com melhorias!

---

**Desenvolvido com ❤️ usando Next.js 15, TypeScript e Tailwind CSS**
