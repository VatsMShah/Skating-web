import RawHtml from "@/components/RawHtml";
import { html } from "@/content/contact";

export const metadata = { title: "Contact — CURBTRICK" };

export default function ContactPage({ searchParams }) {
  const sent = searchParams?.sent === "1";

  return (
    <main>
      {sent && (
        <div className="bg-primary text-primary-foreground text-sm font-medium text-center py-3 px-4">
          Thanks — your message has been sent. We'll get back to you shortly.
        </div>
      )}
      <RawHtml html={html} />
    </main>
  );
}
