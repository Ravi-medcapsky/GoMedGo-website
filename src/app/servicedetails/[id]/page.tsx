import { NotFoundClient } from "./NotFoundClient";
import { ServiceDetailsClient } from "./ServiceDetailsClient";
import { services } from "@/data/services";

export default function ServiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const serviceId = Number(params.id); // Next passes string, convert to number
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <NotFoundClient />;
  }

  return <ServiceDetailsClient service={service} />;
}

// ✅ Required for `output: export`
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(), // force string, Next.js requires this
  }));
}
