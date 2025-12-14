import type { Metadata } from "next";
import CurriculumPage from "@/app/components/CurriculumPage";
import { curriculumData } from "@/app/curriculumData";

export const metadata: Metadata = {
  title: "React Fundamentals with Vite | GDSC Curriculum",
  description:
    "Viteをベースにした React 入門カリキュラム。環境構築から useState とフォームまで学べます。",
};

export default function ViteCurriculumPage() {
  return <CurriculumPage data={curriculumData.vite} />;
}

