import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Shriniwas Tools & Equipments | ISO 9001:2015 Mould, Die & Tooling Manufacturer, Pune",
  },
  description:
    "ISO 9001:2015 certified manufacturer of plastic moulds, press tools, jigs, fixtures & precision machined components in Bhosari, Pune. 9 CNC Wire Cut machines, 3 VMCs. Get a quote.",
};

export default function Home() {
  return <HomeClient />;
}
