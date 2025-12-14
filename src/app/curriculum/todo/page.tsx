import type { Metadata } from "next";
import CurriculumPage from "@/app/components/CurriculumPage";
import { curriculumData } from "@/app/curriculumData";

export const metadata: Metadata = {
  title: "TODOリストアプリ作成 | GDSC Curriculum",
  description:
    "docs/next-js.mdを参考に、Viteで学んだ基礎を統合して実践的なTODOリストアプリを作成するハンズオンカリキュラム。",
};

export default function TodoCurriculumPage() {
  return <CurriculumPage data={curriculumData.todo} />;
}

