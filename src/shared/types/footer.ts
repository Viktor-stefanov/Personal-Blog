/** An entry without an `href` renders as plain text (e.g. a public key). */
export type FooterEntry = {
  label: string;
  href?: string;
  external?: boolean;
};

export type FooterColumn = {
  label: string;
  entries: FooterEntry[];
};

export type FooterProps = {
  brand: string;
  tagline: string;
  columns: FooterColumn[];
  note: string;
  meta?: string;
  className?: string;
};
