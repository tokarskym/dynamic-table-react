import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1';

export const fetchBooksByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/volumes?q=subject:${category}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching books', error);
    return [];
  }
};

export const fetchBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${BASE_URL}/volumes?q=inauthor:${author}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching books by author', error);
    return [];
  }
};
