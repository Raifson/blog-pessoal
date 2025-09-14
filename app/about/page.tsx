import Image from "next/image";
export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header da página */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sobre mim
        </h1>
        <p className="text-xl text-gray-600">
          Conheça um pouco mais sobre quem está por trás deste blog
        </p>
      </div>

      {/* Conteúdo principal */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="prose prose-lg max-w-none">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            {/* Foto com borda degradê */}
            <div className="flex-shrink-0">
            {/* Foto com borda degradê */}
            <div className="w-28 h-32 p-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <Image
            src="/minhaft.jpg"   
            alt="Raí Bacelar"
            width={120}
            height={120}
            className="rounded-full object-cover"
               />
                </div>
                </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Raifson Bacelar</h2>
              <p className="text-gray-600 mb-4">
                Desenvolvedor Full Stack apaixonado por tecnologia e inovação. 
                Especializado em React, Next.js, Node.js e tecnologias modernas de desenvolvimento web.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  React
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Next.js
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  JavaScript
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Minha História</h3>
              <p className="text-gray-700 leading-relaxed">
                Minha jornada mistura código, educação e autodescoberta. Estudo Engenharia de
                Software na Faculdade Leonardo da Vinci e também Letras Inglês na UNEB, porque 
                acredito que unir tecnologia e linguagem abre portas para criar experiências que 
                impactam pessoas de forma única.

                Este blog é meu espaço para compartilhar aprendizados, ideias fora da caixinha e projetos que 
                nascem do encontro entre programação, criatividade e reflexão pessoal.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">O que você encontrará aqui</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Tutoriais sobre React, Next.js e outras tecnologias modernas</li>
                <li>Dicas e truques de desenvolvimento</li>
                <li>Reflexões sobre carreira em tecnologia</li>
                <li>Projetos pessoais e estudos de caso</li>
                <li>Novidades do mundo da programação</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vamos nos conectar!</h3>
              <p className="text-gray-700 mb-4">
                Adoraria ouvir de você! Sinta-se à vontade para entrar em contato comigo através 
                das redes sociais ou por email.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de contato */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Entre em contato
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="text-center">
    <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="igGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f58529" />
            <stop offset="0.5" stopColor="#dd2a7b" />
            <stop offset="1" stopColor="#515bd4" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igGradient)" />
        <circle cx="12" cy="12" r="3.5" fill="white" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="white" />
      </svg>
    </div>
    <h4 className="font-medium text-gray-900 mb-1">Instagram</h4>
    <p className="text-gray-600 text-sm">@raiffson</p>
  </div>

          
          <div className="text-center">
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h4 className="font-medium text-gray-900 mb-1">LinkedIn</h4>
            <p className="text-gray-600 text-sm">raifson-bacelar</p>
          </div>
          
          <div className="text-center">
  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
    <svg
      className="w-6 h-6 text-red-600"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
      2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
      4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  </div>
  <h4 className="font-medium text-gray-900 mb-1">Email</h4>
  <p className="text-gray-600 text-sm">raiffson@gmail.com</p>
</div>

        </div>
      </div>
    </div>
  );
}

