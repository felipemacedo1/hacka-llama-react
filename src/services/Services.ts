import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lojagamesy.onrender.com/', // API Base URL
});

/**
 * Fetches data from a given URL and sets it to the provided state function.
 * @param url - API endpoint
 * @param setData - State setter function
 */
export const fetchData = async (url: string, setData: Function) => {
  const response = await api.get(url);
  setData(response.data);
};

/**
 * Sends a POST request to a given URL with the provided data and sets the response.
 * @param url - API endpoint
 * @param data - Data to be sent
 * @param setData - State setter function
 */
export const createData = async (
  url: string,
  data: Object,
  setData: Function
) => {
  const response = await api.post(url, data);
  setData(response.data);
};

/**
 * Sends a PUT request to update data at a given URL and sets the response.
 * @param url - API endpoint
 * @param data - Data to be updated
 * @param setData - State setter function
 */
export const updateData = async (
  url: string,
  data: Object,
  setData: Function
) => {
  const response = await api.put(url, data);
  setData(response.data);
};

/**
 * Sends a DELETE request to a given URL.
 * @param url - API endpoint
 */
export const deleteData = async (url: string) => {
  await api.delete(url);
};
