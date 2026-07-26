import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Blog | Shriniwas Tools & Equipments Pune",
  description: "Insights, guides, and technical articles on plastic injection moulding, CNC machining, and press tools from industry experts.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
