export default function SpanishAbout() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <p>El proyecto <span className="text-orange-600 font-semibold">Chuck Norris Facts</span> fue desarrollado para el desafío técnico de <a href="https://ivve.tech/" className="text-[#79E23C] font-semibold">Ivve.tech</a>.</p>
      <h3>Ficha técnica</h3>
      <h4>Sitio web:</h4>
      <p>El proyecto fue desarrollado utilizando <a href="https://nextjs.org/" className="text-cyan-500 font-semibold">Next.js</a> y <a href="https://tailwindcss.com/" className="text-cyan-500 font-semibold">Tailwind CSS</a>.</p>
      <p>Para los componentes se utilizó <a href="https://ui.shadcn.com/" className="text-cyan-500 font-semibold">shadcn</a>.</p>
      <p>Las solicitudes a la API se realizan utilizando la biblioteca <a href="https://axios-http.com/" className="text-cyan-500 font-semibold">axios</a>.</p>
      <p>El proyecto sigue una estructura de carpetas que separa la capa de aplicación de la capa de servicio, facilitando el mantenimiento del código.</p>
      <h4>API:</h4>
      <p>El proyecto fue desarrollado utilizando <a href="https://nodejs.org/" className="text-cyan-500 font-semibold">NodeJs</a> y <a href="https://expressjs.com/" className="text-cyan-500 font-semibold">Express</a>.</p>
      <p>Para obtener los hechos se realiza una solicitud a <a href="https://api.chucknorris.io/" className="text-cyan-500 font-semibold">chucknorris.io</a> utilizando la biblioteca <a href="https://axios-http.com/">axios</a>.</p>
      <p>Después de obtener los hechos, se traducen a los idiomas portugués y español utilizando la biblioteca <a href="https://github.com/thedaviddelta/lingva-scraper" className="text-cyan-500 font-semibold">lingva scraper</a>.</p>
      <p>La API devuelve el hecho con la información original y el <i>value</i> en los idiomas: portugués, español e inglés.</p>
    </section>
  )
}