import { services } from "@/data/services";
import { NotFoundClient } from "./NotFoundClient";
import { ServiceDetailsClient } from "./ServiceDetailsClient";
import type { Service } from "@/types/service";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServiceDetailsPage({ params }: PageProps) {

  const resolvedParams = await params;
  const serviceId = Number(resolvedParams.id);
  const service: Service | undefined = services.find((s) => s.id === serviceId);

  if (!service) {
    return <NotFoundClient />;
  }

  return <ServiceDetailsClient service={service} />;
}

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(),
  }));
}