// app/page.tsx

/**
 * Página principal de la aplicación.
 * Implementa un diseño centrado y responsive para el contenido inicial.
 */

export default function Home() {
  const sections = [
    { name: "Estudiantes", href: "/estudiantes" },
    { name: "Maestros", href: "/maestros" },
    { name: "Materias", href: "/materias" },
    { name: "Salones", href: "/salones" },
    { name: "Horarios", href: "/horarios" },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Bienvenido al Sistema Escolar</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <a
              key={section.name}
              href={section.href}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border text-lg font-semibold text-gray-700 hover:bg-gray-50"
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
