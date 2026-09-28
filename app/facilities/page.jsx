import RawHtml from "@/components/RawHtml";
import { html } from "@/content/facilities";

export const metadata = { title: "Facilities — CURBTRICK" };

export default function FacilitiesPage() {
  return (
    <main>
      <RawHtml html={html} />
    </main>
  );
}
