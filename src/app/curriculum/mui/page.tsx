import type { Metadata } from "next";
import CurriculumPage from "@/app/components/CurriculumPage";
import { curriculumData } from "@/app/curriculumData";

export const metadata: Metadata = {
  title: "MUI UI Design | GDSC Curriculum",
  description:
    "Next.js(App Router) + MUI で AppBar / Card / TextField / sx を組み合わせて実装するハンズオンページ。",
};

export default function MuiCurriculumPage() {
  return <CurriculumPage data={curriculumData.mui} />;
}
