import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-zinc-900 transition-colors">
      <h1 className="text-4xl font-bold text-red-500 dark:text-red-400">
        404 - Página no encontrada
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 text-center">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
