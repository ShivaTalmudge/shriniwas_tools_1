import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Moulds & Press Tools | Shriniwas Tools Pune",
  description: "Explore our range of precision products including plastic injection moulds, DMC moulds, rubber moulds, Bakelite moulds, jigs & fixtures, and press tools.",
  keywords: ["Plastic Moulds", "DMC Moulds", "Rubber Moulds", "Bakelite Moulds", "Jigs and Fixtures", "Press Tools", "Pune"],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
