import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Infrastructure & Shop Floor | Shriniwas Tools Pune",
  description: "Take a virtual tour of our state-of-the-art engineering tool room in Pune. We feature dedicated CNC machining, EDM, and injection moulding facilities.",
  keywords: ["Engineering Facility Pune", "Tool Room Infrastructure", "Injection Moulding Plant", "CNC Machining Shop Floor"],
};

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
