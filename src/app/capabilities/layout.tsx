import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Engineering Tool Room Pune",
  description: "Explore the advanced manufacturing capabilities of Shriniwas Tools, a leading engineering tool room in Pune offering CAD/CAM design, CNC machining, and EDM.",
  keywords: ["Engineering Tool Room Pune", "CNC Machining Capabilities", "Wire Cut EDM Pune", "Mould Making Process"],
};

export default function CapabilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
