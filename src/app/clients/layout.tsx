import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients & Partnerships | Shriniwas Tools Pune",
  description: "Shriniwas Tools is a trusted manufacturing partner to over 100 clients across India, providing high-quality tooling and injection moulded components.",
  keywords: ["Shriniwas Tools Clients", "Manufacturing Partner Pune", "OEM Tooling Supplier", "Industrial Partnerships"],
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
