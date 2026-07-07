import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Shriniwas Tools Pune",
  description: "Shriniwas Tools serves diverse industries including Automotive, Electrical, Electronics, OEM, and Heavy Engineering with precision moulds and components.",
  keywords: ["Automotive Tooling Pune", "Electrical Moulds India", "Industrial Tool Room", "OEM Component Manufacturing"],
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
