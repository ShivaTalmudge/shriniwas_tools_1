import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Technical Resources | Shriniwas Tools Pune",
  description: "Read technical articles and industry insights on plastic injection moulding, CNC machining, tool steel selection, and press tools by Shriniwas Tools.",
  keywords: ["Moulding Blog", "Tool Room Resources", "CNC Machining Articles", "Injection Moulding Tips"],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
