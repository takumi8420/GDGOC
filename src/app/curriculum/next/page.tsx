import type { Metadata } from "next";
import CurriculumPage from "@/app/components/CurriculumPage";
import { curriculumData } from "@/app/curriculumData";

export const metadata: Metadata = {
  title: "Next.js Fundamentals | GDSC Curriculum",
  description:
    "Viteで基礎を学んだ後、Next.js（App Router）を使った実践的なWebアプリケーション開発を学ぶ追加カリキュラム。",
};

export default function NextCurriculumPage() {
  return <CurriculumPage data={curriculumData.next} />;
}

