import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api"; // or use whatever link terminal outputs you


// uses axios to fetch data from backend
export const getCandlestickData = async () => {
  const response = await axios.get(`${API_URL}/candlestick-data/`);
  return response.data;
};

export const getLineChartData = async () => {
  const response = await axios.get(`${API_URL}/line-chart-data/`);
  return response.data;
};

export const getBarChartData = async () => {
  const response = await axios.get(`${API_URL}/bar-chart-data/`);
  return response.data;
};

export const getPieChartData = async () => {
  const response = await axios.get(`${API_URL}/pie-chart-data/`);
  return response.data;
};
