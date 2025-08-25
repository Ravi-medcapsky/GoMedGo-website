import { services } from "@/data/services";
import { NotFoundClient } from "./NotFoundClient";
import { ServiceDetailsClient } from "./ServiceDetailsClient";
import type { Service } from "@/types/service";
import type { PageProps } from "next";

export default function ServiceDetailsPage({ params }: PageProps<{ id: string }>) {
  const serviceId = Number(params.id);
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
