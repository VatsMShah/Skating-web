import RawHtml from "@/components/RawHtml";
import { html } from "@/content/about";

export const metadata = { title: "About — CURBTRICK" };

export default function AboutPage() {
  return (
    <main>
      <RawHtml html={html} />
    </main>
  );
}
