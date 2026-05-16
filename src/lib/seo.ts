import { SITE, COMPANY, CONTACT } from './constants';

export function generateTitle(pageTitle: string): string {
  return `${pageTitle} — ${SITE.shortName}`;
}

export function generateDescription(text: string): string {
  return text.length > 157 ? text.substring(0, 157) + '...' : text;
}

export function generateStoreSchema(overrides: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: SITE.name,
    description: COMPANY.description,
    url: SITE.url,
    telephone: CONTACT.phoneFormatted,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.cep,
      addressCountry: 'BR',
    },
    priceRange: '$$',
    ...overrides,
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
