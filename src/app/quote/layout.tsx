import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Shriniwas Tools Pune",
  description: "Request a competitive quotation for plastic injection moulds, DMC moulds, press tools, and CNC machining services from Shriniwas Tools & Equipments.",
  keywords: ["Request Quote", "Tool Room Quotation", "Mould Pricing Pune", "CNC Machining Cost"],
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
