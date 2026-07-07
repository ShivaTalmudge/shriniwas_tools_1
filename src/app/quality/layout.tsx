import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance & ISO 9001:2015 | Shriniwas Tools Pune",
  description: "Shriniwas Tools ensures zero-defect manufacturing through rigorous quality control, CMM inspection, and ISO 9001:2015 certified processes in Pune.",
  keywords: ["Quality Assurance", "ISO 9001:2015 Tool Room", "CMM Inspection Pune", "Precision Engineering Quality"],
};

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
