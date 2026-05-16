// =============================================
// CLIENT CONFIGURATION - Replace all {{PLACEHOLDER}} values
// =============================================

export const SITE = {
  name: '{{STORE_NAME}}',
  shortName: '{{STORE_SHORT_NAME}}',
  domain: '{{DOMAIN}}',
  url: 'https://{{DOMAIN}}',
} as const;

export const OWNER = {
  name: '{{OWNER_NAME}}',
  role: '{{OWNER_ROLE}}',
  bio: '{{OWNER_BIO}}',
} as const;

export const COMPANY = {
  description: '{{STORE_DESCRIPTION}}',
  since: {{SINCE_YEAR}},
  city: '{{CITY}}',
  state: '{{STATE}}',
} as const;

export const CONTACT = {
  phone: '{{PHONE_FULL}}',
  phoneFormatted: '{{PHONE_FORMATTED}}',
  whatsapp: '{{WHATSAPP_NUMBER}}',
  whatsappLink: 'https://wa.me/{{WHATSAPP_NUMBER}}',
  email: '{{EMAIL}}',
  address: {
    street: '{{STREET}}',
    neighborhood: '{{NEIGHBORHOOD}}',
    city: '{{CITY}}',
    state: '{{STATE}}',
    cep: '{{CEP}}',
    full: '{{FULL_ADDRESS}}',
  },
  instagram: '{{INSTAGRAM_HANDLE}}',
  instagramUrl: 'https://instagram.com/{{INSTAGRAM_HANDLE}}',
} as const;

export const CATEGORIES = [
  { id: '{{CAT_1_ID}}', name: '{{CAT_1_NAME}}', slug: '{{CAT_1_SLUG}}', description: '{{CAT_1_DESC}}' },
  { id: '{{CAT_2_ID}}', name: '{{CAT_2_NAME}}', slug: '{{CAT_2_SLUG}}', description: '{{CAT_2_DESC}}' },
  { id: '{{CAT_3_ID}}', name: '{{CAT_3_NAME}}', slug: '{{CAT_3_SLUG}}', description: '{{CAT_3_DESC}}' },
] as const;

export const DIFFERENTIALS = [
  { icon: '{{DIFF_1_ICON}}', title: '{{DIFF_1_TITLE}}', description: '{{DIFF_1_DESC}}' },
  { icon: '{{DIFF_2_ICON}}', title: '{{DIFF_2_TITLE}}', description: '{{DIFF_2_DESC}}' },
  { icon: '{{DIFF_3_ICON}}', title: '{{DIFF_3_TITLE}}', description: '{{DIFF_3_DESC}}' },
  { icon: '{{DIFF_4_ICON}}', title: '{{DIFF_4_TITLE}}', description: '{{DIFF_4_DESC}}' },
] as const;

export const FAQ = [
  { question: '{{FAQ_1_Q}}', answer: '{{FAQ_1_A}}' },
  { question: '{{FAQ_2_Q}}', answer: '{{FAQ_2_A}}' },
  { question: '{{FAQ_3_Q}}', answer: '{{FAQ_3_A}}' },
] as const;
