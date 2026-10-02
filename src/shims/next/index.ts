export interface Metadata {
  title?: string | { default: string; template: string };
  description?: string;
  keywords?: string[] | string;
  authors?: { name: string; url?: string }[];
  creator?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: { url: string; width?: number; height?: number; alt?: string }[] | string[];
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
  };
  alternates?: {
    canonical?: string;
  };
}

export type ResolvingMetadata = Promise<Metadata>;
