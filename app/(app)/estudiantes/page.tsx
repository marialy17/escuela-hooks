import { TablaEstudiantes } from "./tabla-estudiantes";

export default function EstudiantesPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Sistema de Estudiantes</h1>
      <TablaEstudiantes />
    </main>
  );
}