import { notFound } from "next/navigation";
import { PLANES_ALL } from "@/lib/parche-data";
import PlanDetailClient from "./PlanDetailClient";

export function generateStaticParams() {
  return PLANES_ALL.map((p) => ({ slug: p.slug }));
}

export default function PlanPage({ params }: { params: { slug: string } }) {
  const plan = PLANES_ALL.find((p) => p.slug === params.slug);
  if (!plan) return notFound();

  const related = PLANES_ALL.filter(
    (p) => p.cat === plan.cat && p.slug !== plan.slug
  ).slice(0, 3);

  return <PlanDetailClient plan={plan} related={related} />;
}
