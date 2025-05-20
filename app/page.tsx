import BouncyAccordian from "@/components/BouncyAccordian/BouncyAccordian";
import DynamicIsland from "@/components/DynamicIsland/DynamicIsland";
import SharedLayout from "@/components/iOSCard/iosStore";
import { Tabs } from "@/components/TabsTransition/Tabs";
import { TrashAnimation } from "@/components/TrashComponent/Component";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BouncyAccordian/>
    </div>
    
  );
}
