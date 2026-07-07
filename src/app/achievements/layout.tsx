import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements & Milestones | Shriniwas Tools Pune",
  description: "Discover the journey of Shriniwas Tools since 2006, our ISO 9001:2015 certification, and our track record of delivering 500+ precision moulds.",
  keywords: ["ISO Certified Tool Room", "Shriniwas Tools History", "Mould Manufacturing Milestones", "Engineering Excellence Pune"],
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
