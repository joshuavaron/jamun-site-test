import { Helmet } from "react-helmet-async";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSchemaProps {
  faqs: FAQItem[];
}

/**
 * FAQSchema component for adding FAQPage structured data (JSON-LD)
 * This helps search engines display FAQ rich snippets in search results
 *
 * Usage:
 * <FAQSchema faqs={[
 *   { question: "What is Model UN?", answer: "Model UN is..." },
 *   { question: "How do I register?", answer: "You can register by..." }
 * ]} />
 */
export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
}
