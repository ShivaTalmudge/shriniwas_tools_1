import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufactured Plastic & DMC Components | Shriniwas Tools Pune",
  description: "Explore our range of manufactured products including DMC switchgear components, plastic electrical enclosures, and precision machined parts in Pune.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
