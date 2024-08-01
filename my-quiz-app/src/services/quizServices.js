import axios from "axios";

const url = "https://opentdb.com/api.php?amount=10";

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching data ${error}`);
    throw error;
  }
};
