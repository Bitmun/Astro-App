import axios from 'axios';

const API_URL = 'https://poker247tech.ru/get_horoscope/';

export const fetchHoroscope = async (sign: string, language = 'translated') => {
  const response = await axios.post(API_URL, {
    sign,
    language,
    period: 'today',
  });
  return response.data;
};
