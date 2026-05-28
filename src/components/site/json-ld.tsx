const BASE_URL = "https://namham-dp.com";

interface JsonLdProps {
  type: "WebSite" | "Organization" | "WebPage" | "ContactPage" | "AboutPage";
  name?: string;
  description?: string;
  url?: string;
}

export function JsonLd({ type, name, description, url }: JsonLdProps) {
  const baseOrg = {
    "@type": "Organization",
    name: "Namham DP",
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.ico`,
  };

  let schema: Record<string, unknown>;

  switch (type) {
    case "WebSite":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Namham DP",
        url: BASE_URL,
        description:
          "A modern media platform for digital publishing, video, and creator content.",
        publisher: baseOrg,
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };
      break;
    case "Organization":
      schema = {
        "@context": "https://schema.org",
        ...baseOrg,
        description:
          "Modern media platform for digital publishing and creator content.",
        sameAs: [],
      };
      break;
    default:
      schema = {
        "@context": "https://schema.org",
        "@type": type,
        name: name ?? "Namham DP",
        description,
        url: url ?? BASE_URL,
        isPartOf: { "@type": "WebSite", url: BASE_URL },
      };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
