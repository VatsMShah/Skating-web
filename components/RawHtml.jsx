/*
  Renders markup that was extracted from the original 10Web-hosted
  WordPress export. It's plain HTML (Tailwind utility classes,
  inline SVG icons), not JSX, so dangerouslySetInnerHTML is the
  correct tool here rather than a bug to fix. See README.md for the
  plan to gradually break these sections into real components.
*/
export default function RawHtml({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
