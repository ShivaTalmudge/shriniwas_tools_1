import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Shriniwas Tools & Equipments Pune",
  description: "Get in touch with Shriniwas Tools & Equipments for precision moulds and machining solutions. Located in MIDC Bhosari, Pune.",
  keywords: ["Contact Shriniwas Tools", "Tool Room Pune Contact", "Mould Manufacturer India Contact"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
