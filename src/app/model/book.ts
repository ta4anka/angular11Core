export interface Book {
  readonly id: number;
  readonly title: string;
  year: number;
  author: string;
  pages?: number | undefined;
  description?: string | undefined;
  price?: number;
}
