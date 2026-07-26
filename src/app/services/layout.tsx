import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Shriniwas Tools & Equipments, Bhosari, Pune",
  description: "Plastic injection moulding, CNC & VMC machining, wire cut EDM, DMC & Bakelite moulds, jigs & fixtures, and press tools — all in-house at Shriniwas Tools & Equipments.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
