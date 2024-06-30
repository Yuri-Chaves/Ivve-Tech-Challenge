export default function EnglishAbout() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <p>The project <span className="text-orange-600 font-semibold">Chuck Norris Facts</span> was developed for the technical challenge by <a href="https://ivve.tech/" className="text-[#79E23C] font-semibold">Ivve.tech</a>.</p>
      <h3>Technical Sheet</h3>
      <h4>Website:</h4>
      <p>The project was developed using <a href="https://nextjs.org/" className="text-cyan-500 font-semibold">Next.js</a> and <a href="https://tailwindcss.com/" className="text-cyan-500 font-semibold">Tailwind CSS</a>.</p>
      <p>For the components, <a href="https://ui.shadcn.com/" className="text-cyan-500 font-semibold">shadcn</a> was used.</p>
      <p>API requests are made using the <a href="https://axios-http.com/" className="text-cyan-500 font-semibold">axios</a> library.</p>
      <p>The project follows a folder structure that separates the application layer from the service layer, facilitating code maintenance.</p>
      <h4>API:</h4>
      <p>The project was developed using <a href="https://nodejs.org/" className="text-cyan-500 font-semibold">NodeJs</a> and <a href="https://expressjs.com/" className="text-cyan-500 font-semibold">Express</a>.</p>
      <p>To obtain the facts, a request is made to <a href="https://api.chucknorris.io/" className="text-cyan-500 font-semibold">chucknorris.io</a> using the <a href="https://axios-http.com/">axios</a> library.</p>
      <p>After obtaining the facts, they are translated into Portuguese and Spanish using the <a href="https://github.com/thedaviddelta/lingva-scraper" className="text-cyan-500 font-semibold">lingva scraper</a> library.</p>
      <p>The API returns the fact with the original information and the <i>value</i> in the languages: Portuguese, Spanish, and English.</p>
    </section>
  )
}