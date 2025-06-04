"use client";
import { MainContent } from "@/components/mainContent";
import { AppContent, AppWrapper } from "./page.style";

export default function Home() {
  return (
    <AppWrapper>
      <AppContent>
        <MainContent></MainContent>
      </AppContent>
    </AppWrapper>
  );
}
