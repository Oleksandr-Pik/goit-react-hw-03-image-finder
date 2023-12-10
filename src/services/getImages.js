const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40334157-8af7e21c23f15ddda27e49965';

export const getImages = (searchQuery, page, imgPerPage) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: imgPerPage,
  });
  
  return fetch(`${BASE_URL}?${params}`);
};
