
export const Education = () => {
  return (
    <section id="education" className="py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Educación y Formación</h2>

        {/* Educación Formal */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Educación Formal</h3>
          <ul className="space-y-4">
            <li>
              <h4 className="text-xl font-medium text-gray-800">Bachiller en Ingeniería Agronómica</h4>
              <p className="text-gray-600">Universidad XYZ (201X - 201X)</p>
              <p className="text-gray-500 text-sm">Desarrollé habilidades de análisis, trabajo colaborativo y manejo de datos agrícolas.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium text-gray-800">Técnico en Informática</h4>
              <p className="text-gray-600">Instituto ABC (202X - 202X)</p>
              <p className="text-gray-500 text-sm">Aprendí fundamentos de programación, desarrollo web y bases de datos.</p>
            </li>
          </ul>
        </div>

        {/* Cursos y Certificaciones */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Cursos y Certificaciones</h3>
          <ul className="space-y-4">
            <li>
              <p className="text-xl font-medium text-gray-800">Curso ASP.NET Core y C# Bootcamp</p>
              <p className="text-gray-600">Udemy (2024)</p>
            </li>
            <li>
              <p className="text-xl font-medium text-gray-800">React y Redux</p>
              <p className="text-gray-600">Platzi (2023)</p>
            </li>
          </ul>
        </div>

        {/* Aprendizaje Autodidacta */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Aprendizaje Autodidacta</h3>
          <p className="text-gray-600">
            Profundicé en JavaScript, React y Tailwind CSS mediante proyectos personales disponibles en mi
            <a
              href="https://github.com/tuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-1"
            >
              GitHub
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
