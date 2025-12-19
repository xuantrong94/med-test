interface Post {
  id: number;
  title: string;
  slug: string;
  description: string;
  published_at: string;
  created_at: string;
  author: string;
  image: any[];
}

const getImageUrl = (item: Post) => {
  if (Array.isArray(item.image) && item.image.length > 0) {
    const img = item.image[0];
    if (img && typeof img === 'object' && 'url' in img) {
      return `https://cms.medpro.com.vn${img.url}`;
    }
  }
  return '/post-1.png';
};

export default getImageUrl;
