import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Automotive & Electrical Tooling Pune",
  description: "Providing precision moulds, press tools, and CNC machined components for automotive, electrical, aerospace, and heavy engineering sectors across India.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
