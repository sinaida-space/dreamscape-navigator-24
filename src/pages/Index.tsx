import { Suspense, lazy } from "react";
import HeroSection from "@/components/sections/HeroSection";
import BlockersSection from "@/components/sections/BlockersSection";
import ToolsSection from "@/components/sections/ToolsSection";
import PencilVsLLMSection from "@/components/sections/PencilVsLLMSection";
import PhasesSection from "@/components/sections/PhasesSection";
import MatrixSection from "@/components/sections/MatrixSection";
import ChecklistSection from "@/components/sections/ChecklistSection";
import AISection from "@/components/sections/AISection";
import FooterSection from "@/components/sections/FooterSection";
import NavigationDots from "@/components/NavigationDots";

const GalaxyBackground = lazy(() => import("@/components/GalaxyBackground"));

export default function Index() {
  return (
    <div className="relative min-h-screen bg-nebula">
      <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
        <GalaxyBackground />
      </Suspense>

      <NavigationDots />

      <main className="relative z-10">
        <div id="hero"><HeroSection /></div>
        <div id="blockers"><BlockersSection /></div>
        <div id="tools"><ToolsSection /></div>
        <div id="pencil-llm"><PencilVsLLMSection /></div>
        <div id="phases"><PhasesSection /></div>
        <div id="matrix"><MatrixSection /></div>
        <div id="checklist"><ChecklistSection /></div>
        <div id="ai"><AISection /></div>
        <div id="footer"><FooterSection /></div>
      </main>
    </div>
  );
}
