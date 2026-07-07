import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Machinery & Equipment | Shriniwas Tools Pune",
  description: "Explore our state-of-the-art machinery including CNC VMCs, Wire Cut EDMs, Sparking EDMs, and high-tonnage injection moulding machines.",
  keywords: ["CNC VMC Pune", "Wire Cut EDM Machines", "Tool Room Machinery", "Injection Moulding Equipment"],
};

export default function MachineryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
