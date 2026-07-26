import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Shriniwas Tools & Equipments | Pune",
  description: "Get a quote for plastic injection moulds, wire cut EDM, or DMC mould manufacturing. Located in MIDC Bhosari, Pune. Call +91 98608 22818.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
