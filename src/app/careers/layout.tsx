import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Shriniwas Tools & Equipments Pune",
  description: "Explore career opportunities at Shriniwas Tools. We are hiring CNC operators, tool makers, and quality inspectors in Pune.",
  keywords: ["Careers Shriniwas Tools", "Tool Room Jobs Pune", "CNC Operator Jobs", "Tool Maker Vacancies"],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
