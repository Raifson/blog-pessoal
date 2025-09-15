import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

// Dados mockados dos posts (em um projeto real, viriam de uma API ou banco de dados)
const posts = {
  "primeiro-post": {
    slug: "primeiro-post",
    title: "Bem-vindos ao meu blog!",
    content: `
      <p>Olá! Seja muito bem-vindo ao meu blog pessoal. Este é um espaço que criei para compartilhar meus pensamentos, experiências e aprendizados sobre tecnologia, desenvolvimento web e vida em geral.</p>
      
      <h2>Por que criar um blog?</h2>
      <p>Sempre acreditei que compartilhar conhecimento é uma das melhores formas de aprender e crescer. Através deste blog, pretendo:</p>
      <ul>
        <li>Documentar minha jornada de aprendizado</li>
        <li>Compartilhar dicas e truques úteis</li>
        <li>Conectar com outros desenvolvedores</li>
        <li>Contribuir para a comunidade tech</li>
      </ul>
      
      <h2>O que esperar</h2>
      <p>Nos próximos posts, vou abordar temas como React, Next.js, TypeScript, e muito mais. Também pretendo compartilhar projetos pessoais e reflexões sobre carreira em tecnologia.</p>
      
      <p>Espero que gostem do conteúdo e sintam-se à vontade para interagir!</p>
    `,
    date: "2025-09-14",
    author: "Raifson Bacelar",
    likes: 231
  },
  "aprendendo-nextjs": {
    slug: "aprendendo-nextjs",
    title: "Aprendendo Next.js 15 com App Router",
    content: `
      <p>Next.js 15 trouxe muitas novidades interessantes, especialmente com o App Router que se tornou estável. Neste post, vou compartilhar minha experiência aprendendo essas novas funcionalidades.</p>
      
      <h2>O que é o App Router?</h2>
      <p>O App Router é uma nova forma de estruturar aplicações Next.js, baseada no sistema de arquivos dentro da pasta <code>app/</code>. Ele traz várias vantagens:</p>
      <ul>
        <li>Roteamento mais intuitivo</li>
        <li>Layouts compartilhados</li>
        <li>Server Components por padrão</li>
        <li>Melhor performance</li>
      </ul>
      
      <h2>Server Components vs Client Components</h2>
      <p>Uma das principais mudanças é a distinção clara entre Server e Client Components:</p>
      <ul>
        <li><strong>Server Components:</strong> Executam no servidor, têm acesso direto a APIs e bancos de dados</li>
        <li><strong>Client Components:</strong> Executam no navegador, necessários para interatividade</li>
      </ul>
      
      <h2>Estrutura do projeto</h2>
      <p>A estrutura fica muito mais organizada com o App Router. Cada pasta representa uma rota, e arquivos especiais como <code>layout.tsx</code> e <code>page.tsx</code> têm funções específicas.</p>
      
      <p>Estou muito empolgado com essas mudanças e mal posso esperar para usar em projetos reais!</p>
    `,
    date: "2025-09-14",
    author: "Raifson Bacelar",
    likes: 8
  },
  "server-components": {
    slug: "server-components",
    title: "Server Components vs Client Components",
    content: `
      <p>Uma das principais novidades do Next.js 13+ são os Server Components. Essa funcionalidade revoluciona a forma como pensamos sobre componentes React.</p>
      
      <h2>O que são Server Components?</h2>
      <p>Server Components são componentes React que executam exclusivamente no servidor. Eles têm várias vantagens:</p>
      <ul>
        <li>Acesso direto a bancos de dados e APIs</li>
        <li>Não enviam JavaScript para o cliente</li>
        <li>Melhor performance inicial</li>
        <li>SEO otimizado</li>
      </ul>
      
      <h2>Quando usar cada tipo?</h2>
      <p>A regra é simples: use Server Components por padrão, e Client Components apenas quando precisar de interatividade.</p>
      
      <h3>Use Server Components para:</h3>
      <ul>
        <li>Buscar dados</li>
        <li>Renderizar conteúdo estático</li>
        <li>Acessar recursos do servidor</li>
      </ul>
      
      <h3>Use Client Components para:</h3>
      <ul>
        <li>Gerenciar estado (useState, useReducer)</li>
        <li>Efeitos (useEffect)</li>
        <li>Event listeners</li>
        <li>Hooks do navegador</li>
      </ul>
      
      <h2>Como identificar?</h2>
      <p>Client Components devem ter a diretiva <code>"use client"</code> no topo do arquivo. Server Components não precisam de nenhuma marcação especial.</p>
      
      <p>Essa separação clara torna as aplicações mais performáticas e fáceis de entender!</p>
    `,
    date: "2025-09-14",
    author: "Raifson Bacelar",
    likes: 15
  },
  
  "tailwind-css": {
    slug: "tailwind-css",
    title: "Por que escolhi Tailwind CSS",
    content: `
      <p>Tailwind CSS tem se tornado minha biblioteca de estilização favorita. Neste post, vou explicar os motivos pelos quais adotei esta ferramenta e como ela tem melhorado meu fluxo de desenvolvimento.</p>
      
      <h2>O que é Tailwind CSS?</h2>
      <p>Tailwind é um framework CSS utility-first que fornece classes de baixo nível para construir designs customizados rapidamente.</p>
      
      <h2>Principais vantagens</h2>
      <ul>
        <li><strong>Produtividade:</strong> Escrevo estilos diretamente no HTML/JSX</li>
        <li><strong>Consistência:</strong> Sistema de design padronizado</li>
        <li><strong>Responsividade:</strong> Classes responsivas built-in</li>
        <li><strong>Customização:</strong> Totalmente configurável</li>
        <li><strong>Performance:</strong> CSS otimizado e minificado</li>
      </ul>
      
      <h2>Comparação com CSS tradicional</h2>
      <p>Antes do Tailwind, eu escrevia muito CSS customizado. Agora, raramente preciso sair do HTML para estilizar componentes.</p>
      
      <h3>Antes (CSS tradicional):</h3>
      <pre><code>
.button {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #2563eb;
}
      </code></pre>
      
      <h3>Agora (Tailwind):</h3>
      <pre><code>
&lt;button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"&gt;
  Clique aqui
&lt;/button&gt;
      </code></pre>
      
      <h2>Dicas para começar</h2>
      <ul>
        <li>Use a extensão do VS Code para autocomplete</li>
        <li>Configure o Tailwind CSS IntelliSense</li>
        <li>Aprenda as convenções de nomenclatura</li>
        <li>Use o Tailwind Play para experimentar</li>
      </ul>
      
      <p>Tailwind realmente transformou minha forma de desenvolver interfaces. Recomendo fortemente!</p>
    `,
    date: "2025-09-14",
    author: "Raifson Bacelar",
    likes: 10
  },
  "projeto-concluido-blog-nextjs-desenvolve": {
    slug: "projeto-concluido-blog-nextjs-desenvolve",
    title: "Mais uma conquista! Projeto de Blog com Next.js Concluído",
    content: `
      <p>Projeto 9 - Blog Pessoal Simples, concluído!
      <p> Finalizei mais um projeto do programa Desenvolve (Grupo Boticário & Koru) e o sentimento é de pura gratidão e dever cumprido.</p>
      <p>O desafio foi criar um blog pessoal utilizando Next.js, e foi uma imersão fantástica nas funcionalidades mais atuais da ferramenta. Colocar em prática a estrutura do App Router, a reatividade dos Client Components e a performance dos Server Components foi uma experiência de aprendizado imensa.</p>
      <p>Cada linha de código deste projeto carrega um pouco do apoio que recebi. Por isso, meu muito obrigado aos mestres Luara Rangel e Marcello Menezes, que nos guiaram com maestria, e aos meus companheiros do Boticode [grupo 13], que estiveram sempre presentes, me apoiando, ajudando e colaborando no meu processo de aprendizagem contínuo.</p>
      <p>Essa jornada só reforça que, com um bom time e mentores incríveis, qualquer desafio se torna mais leve. Que venham os próximos!</p>
    `,
    date: "2025-09-14",
    author: "Raifson Bacelar",
    likes: 200
  }
  }
interface PageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header do post */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center justify-between text-gray-600 mb-6">
          <div className="flex items-center space-x-4">
            <span>Por {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <LikeButton initialLikes={post.likes} />
        </div>
      </header>

      {/* Conteúdo do post */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Navegação entre posts */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Outros posts que você pode gostar
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.values(posts)
            .filter(p => p.slug !== post.slug)
            .slice(0, 2)
            .map((relatedPost) => (
              <a
                key={relatedPost.slug}
                href={`/posts/${relatedPost.slug}`}
                className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-medium text-gray-900 mb-2">
                  {relatedPost.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {new Date(relatedPost.date).toLocaleDateString('pt-BR')}
                </p>
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}

// Gerar páginas estáticas para todos os posts
export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

