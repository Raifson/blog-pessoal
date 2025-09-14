import PostCard from "@/components/PostCard";

// Dados mockados dos posts (em um projeto real, viriam de uma API ou banco de dados)
const posts = [
  {
    slug: "primeiro-post",
    title: "Bem-vindos ao meu blog!",
    excerpt: "Este é o meu primeiro post neste blog pessoal. Aqui vou compartilhar minhas experiências, aprendizados e reflexões sobre tecnologia, vida e muito mais. Espero que gostem do conteúdo!",
    date: "2025-09-14",
    author: "Raifson Bacelar"
  },
  {
    slug: "aprendendo-nextjs",
    title: "Aprendendo Next.js 15 com App Router",
    excerpt: "Neste post, vou compartilhar minha experiência aprendendo Next.js 15 com o novo App Router. Descobri muitas funcionalidades interessantes que facilitam o desenvolvimento de aplicações React modernas.",
    date: "2025-09-14",
    author: "Raifson Bacelar"
  },
  {
    slug: "server-components",
    title: "Server Components vs Client Components",
    excerpt: "Uma das principais novidades do Next.js 13+ são os Server Components. Neste artigo, explico as diferenças entre Server e Client Components e quando usar cada um deles.",
    date: "2025-09-14",
    author: "Raifson Bacelar"
  },
  {
    slug: "tailwind-css",
    title: "Por que escolhi Tailwind CSS",
    excerpt: "Tailwind CSS tem se tornado minha escolha favorita para estilização. Neste post, explico os motivos pelos quais adotei esta biblioteca e como ela tem melhorado meu fluxo de desenvolvimento.",
    date: "2025-09-14",
    author: "Raifson Bacelar"
  },
  {
  title: "Mais uma Conquista! Projeto 9 de Blog com Next.js Concluído",
  date: "2025-09-14", 
  excerpt: "Finalizei mais um projeto do programa Desenvolve (Grupo Boticário & Koru) e o sentimento é de pura gratidão e dever cumprido. Confira os detalhes!",
  slug: "projeto-concluido-blog-nextjs-desenvolve",
  author: "Raifson Bacelar",
  content: `
Mais uma conquista! Finalizei mais um projeto do programa Desenvolve (Grupo Boticário & Koru) e o sentimento é de pura gratidão e dever cumprido.

O desafio foi criar um blog pessoal utilizando Next.js, e foi uma imersão fantástica nas funcionalidades mais atuais da ferramenta. Colocar em prática a estrutura do App Router, a reatividade dos Client Components e a performance dos Server Components foi uma experiência de aprendizado imensa.

Cada linha de código deste projeto carrega um pouco do apoio que recebi. Por isso, meu muito obrigado aos mestres Luara Rangel e Marcello Menezes, que nos guiaram com maestria, e aos meus companheiros do Boticode [grupo 13], que estiveram sempre presentes, me apoiando, ajudando e colaborando no meu processo de aprendizagem contínuo.

Essa jornada só reforça que, com um bom time e mentores incríveis, qualquer desafio se torna mais leve. Que venham os próximos!


  `
}
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Header da página */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindos ao meu blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Aqui compartilho meus pensamentos, experiências e aprendizados sobre tecnologia, 
          desenvolvimento web e vida em geral.
        </p>
      </div>

      {/* Lista de posts */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Seção de boas-vindas */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Obrigado por visitar!
        </h2>
        <p className="text-gray-700 mb-6">
          Este blog é um espaço onde posso compartilhar conhecimento e conectar com outras pessoas 
          que têm interesses similares. Sinta-se à vontade para explorar os posts e deixar seus likes!
        </p>
        <div className="flex justify-center space-x-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Next.js 15
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            TypeScript
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  );
}
