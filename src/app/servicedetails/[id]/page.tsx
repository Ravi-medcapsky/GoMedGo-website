import { services } from "@/data/services";
import { NotFoundClient } from "./NotFoundClient";
import { ServiceDetailsClient } from "./ServiceDetailsClient";
import type { Service } from "@/types/service";

// ✅ Define props manually
interface PageProps {
  params: {
    id: string;
  };
}

export default function ServiceDetailsPage({ params }: PageProps) {
  const serviceId = Number(params.id);
  const service: Service | undefined = services.find((s) => s.id === serviceId);

  if (!service) {
    return <NotFoundClient />;
  }

  return <ServiceDetailsClient service={service} />;
}

// ✅ Required for static export
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(),
  }));
}
