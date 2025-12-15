const URLS = [
  {
    key: 'home',
    label: 'Trang chủ',
    url: '/benh-vien-mat',
  },
  {
    key: 'about',
    label: 'Giới thiệu',
    url: '/gioi-thieu',
  },
  {
    key: 'process',
    label: 'Quy trình',
    url: '/quy-trinh',
  },
  {
    key: 'services',
    label: 'Hướng dẫn',
    url: '/huong-dan-benh-nhan',
  },
  {
    key: 'faq',
    label: 'Thắc mắc',
    url: '/thac-mac',
  },
  {
    key: 'contact',
    label: 'Liên hệ',
    url: '/lien-he',
  },
];

const getUrlsByKey = (keys: string[]) => {
  const result: typeof URLS = [];
  for (const key of keys) {
    const found = URLS.find(item => item.key === key);
    if (found) {
      result.push(found);
    }
  }
  return result;
};

const HEADER_URLS = getUrlsByKey([
  'home',
  'about',
  'process',
  'services',
  'faq',
  'contact',
]);

export { URLS, HEADER_URLS };
