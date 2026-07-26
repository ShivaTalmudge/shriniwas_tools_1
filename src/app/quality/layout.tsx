import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance & ISO 9001:2015 Certification | Shriniwas Tools & Equipments",
  description: "Shriniwas Tools & Equipments is ISO 9001:2015 certified for manufacture of dies, moulds and moulded products, backed by a dedicated inspection process at every stage.",
};

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
