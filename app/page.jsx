import RawHtml from "@/components/RawHtml";
import { html } from "@/content/home";

export default function HomePage() {
  return (
    <main>
      <RawHtml html={html} />
    </main>
  );
}
