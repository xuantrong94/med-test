export default function getNameBySlug(arr: any[], slug: string): string {
  return arr.find(item => item.slug === slug)?.name || '';
}
