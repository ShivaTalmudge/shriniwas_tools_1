import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure & Machinery | Shriniwas Tools & Equipments",
  description: "9 CNC Wire Cut machines, 3 VMCs, EDM, surface grinders and moulding presses up to 300 tons — full manufacturing capability at Shriniwas Tools & Equipments, Bhosari, Pune.",
};

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
