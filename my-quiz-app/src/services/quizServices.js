import axios from "axios";

const API_URL = "https://opentdb.com/api.php?amount=10";

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    throw error;
  }
};
