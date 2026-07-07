import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Gallery | Shriniwas Tools & Equipments",
  description: "View our gallery featuring our precision moulds, state-of-the-art machinery, expert team, and corporate events.",
  keywords: ["Shriniwas Tools Gallery", "Mould Manufacturing Images", "Tool Room Photos Pune"],
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
