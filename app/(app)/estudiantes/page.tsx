'use client';

import { TablaEstudiantes } from "./tabla-estudiantes";
// import { Counter_H } from "@/app/_components/contador-hook";
// import { Counter } from "@/app/_components/contador-not-hook";

export default function EstudiantesPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Sistema de Estudiantes</h1>
      <p className="text-muted-foreground mb-6">
        Haz clic en cualquier estudiante para ver sus detalles completos, 
        editarlo o eliminarlo. Para crear un nuevo estudiante, usa el botón 
        Nuevo Estudiante.
      </p>
      <TablaEstudiantes />
      {/* <Counter />
      <Counter_H /> */}
    </main>
  );
}