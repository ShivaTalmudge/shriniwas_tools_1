import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Profile | Shriniwas Tools & Equipments, Bhosari, Pune",
  description: "Shriniwas Tools & Equipments — ISO 9001:2015 certified manufacturer of thermoplastic/thermoset moulds, jigs, fixtures & engineering components since 2006, Bhosari, Pune.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
