"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table";

export function TablaEstudiantes() {
  const estudiantes = useQuery(api.estudiantes.obtenerEstudiantes);

  if (estudiantes === undefined) {
    return <div>Cargando estudiantes...</div>;
  }

  return (
    <Table>
      <TableCaption>Lista de estudiantes registrados</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Matrícula</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Correo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {estudiantes.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} className="text-center">
              No hay estudiantes registrados
            </TableCell>
          </TableRow>
        ) : (
          estudiantes.map((estudiante) => (
            <TableRow key={estudiante._id}>
              <TableCell className="font-medium">
                  {estudiante.numMatricula}
                </TableCell>
                <TableCell>{estudiante.nombre}</TableCell>
                <TableCell>{estudiante.correo}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}