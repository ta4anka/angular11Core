export interface Book {
  readonly title: string;
  year: number;
  author: string;
  pages?: number | undefined;
  description?: string | undefined;
  price?: number;
}
