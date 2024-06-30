export default function PortugueseAbout() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <p>
        O projeto <span className="text-orange-600 font-semibold">Chuck Norris Facts</span> foi desenvolvido para o desafio técnico da <a href="https://ivve.tech/" className="text-[#79E23C] font-semibold">Ivve.tech</a>.</p>
      <h3>Ficha técnica</h3>
      <h4>Site:</h4>
      <p>O projeto foi desenvolvido utilizando <a href="https://nextjs.org/" className="text-cyan-500 font-semibold">Next.js</a> e <a href="https://tailwindcss.com/" className="text-cyan-500 font-semibold">Tailwind CSS</a>.</p>
      <p>para os componentes foi utilizado o <a href="https://ui.shadcn.com/" className="text-cyan-500 font-semibold">shadcn</a>.</p>
      <p>As requisições para a Api são feitas utilizando a biblioteca <a href="https://axios-http.com/" className="text-cyan-500 font-semibold">axios</a>.</p>
      <p>O projeto segue uma estrutura de pastas que separa a camada de aplicação da camada de serviço. Facilitando a manutenção do código.</p>
      <h4>API:</h4>
      <p>O projeto foi desenvolvido utilizando <a href="https://nodejs.org/" className="text-cyan-500 font-semibold">NodeJs</a> e <a href="https://expressjs.com/" className="text-cyan-500 font-semibold">Express</a>.</p>
      <p>Para obter os fatos é realizada uma requisição para <a href="https://api.chucknorris.io/" className="text-cyan-500 font-semibold">chucknorris.io</a> utilizando a biblioteca <a href="https://axios-http.com/">axios</a>.</p> 
      <p>Após obter os fatos, é realizada uma tradução para os idiomas português e espanhol utilizando a biblioteca <a href="https://github.com/thedaviddelta/lingva-scraper" className="text-cyan-500 font-semibold">lingva scraper</a>.</p>
      <p>A API retorna o fato com as informações originais e o <i>value</i> com os idiomas: português, espanhol e inglês.</p>
    </section>
  )
}