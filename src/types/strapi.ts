export interface StrapiBaseEntry {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  documentId: string;
}

export interface StrapiMeta {
  pagination: StrapiPagination;
}
export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiImageFormats {
  thumbnail?: StrapiImageFormat;
  small?: StrapiImageFormat;
  medium?: StrapiImageFormat;
  large?: StrapiImageFormat;
}

export interface StrapiMediaV5 {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: StrapiImageFormats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: "local" | "cloudinary" | "aws-s3";
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
