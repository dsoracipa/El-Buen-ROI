import { notFound } from "next/navigation";
import { EVENTOS } from "@/lib/parche-data";
import EventoDetailClient from "./EventoDetailClient";

export function generateStaticParams() {
  return EVENTOS.map((e) => ({ slug: e.slug }));
}

export default function EventoPage({ params }: { params: { slug: string } }) {
  const evento = EVENTOS.find((e) => e.slug === params.slug);
  if (!evento) return notFound();

  const related = EVENTOS.filter((e) => e.slug !== evento.slug).slice(0, 3);

  return <EventoDetailClient evento={evento} related={related} />;
}
