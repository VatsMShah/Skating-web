import RawHtml from "@/components/RawHtml";
import { html } from "@/content/events";

export const metadata = { title: "Events — CURBTRICK" };

export default function EventsPage() {
  return (
    <main>
      <RawHtml html={html} />
    </main>
  );
}
