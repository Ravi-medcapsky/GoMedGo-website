import { NotFoundClient } from "./NotFoundClient";
import { ServiceDetailsClient } from "./ServiceDetailsClient";
import { services } from "@/data/services";

interface Props {
  params: { id: string };
}

// ✅ Required for static export
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(), // must be string for Next.js
  }));
}

export default function ServiceDetailsPage({ params }: Props) {
  const serviceId = Number(params.id);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <NotFoundClient />;
  }

  return <ServiceDetailsClient service={service} />;
}
