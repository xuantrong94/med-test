const URLS = [
  {
    key: 'home',
    label: 'Trang chủ',
    url: '/benh-vien-mat',
  },
  {
    key: 'about',
    label: 'Giới thiệu',
    url: '/benh-vien-mat/gioi-thieu',
  },
  {
    key: 'process',
    label: 'Quy trình',
    url: '/benh-vien-mat/quy-trinh',
  },
  {
    key: 'services',
    label: 'Hướng dẫn',
    url: '/benh-vien-mat/huong-dan-benh-nhan',
  },
  {
    key: 'faq',
    label: 'Thắc mắc',
    url: '/benh-vien-mat/thac-mac',
  },
  {
    key: 'contact',
    label: 'Liên hệ',
    url: '/benh-vien-mat/lien-he',
  },
  {
    key: 'news',
    label: 'Tin tức',
    url: '/benh-vien-mat/tin-tuc',
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

const getUrlByKey = (key: string) => {
  const found = URLS.find(item => item.key === key);
  return found?.url || '/';
};

const HEADER_URLS = getUrlsByKey([
  'home',
  'about',
  'process',
  'services',
  'faq',
  'contact',
]);

export { URLS, HEADER_URLS, getUrlByKey };
