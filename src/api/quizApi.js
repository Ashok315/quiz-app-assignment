import axios from 'axios';

// Mock API URL
const baseUrl=import.meta.env.VITE_API_BASE_URL;

const api=axios.create({
    baseURL:baseUrl
});

const quizAPI = {

  fetchQuestionsAPI: async () => {
    try {
      const response = await api.get(`/questions`);
      return response.data;
    } catch (error) {
      console.error('Error fetching questions', error);
      throw error;
    }
  },

  submitAnswerAPI: async (quizId, questionId, answers, timeTaken) => {
    try {
      const response = await api.post(`/submit`, {
        quizId,
        questionId,
        answers,
        timeTaken
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting answer', error);
      throw error;
    }
  },

  finishQuizAPI: async (quizId) => {
    try {
      const response = await api.post(`/finish`, { quizId });
      return response.data;
    } catch (error) {
      console.error('Error finishing quiz', error);
      throw error;
    }
  }
};

export default quizAPI;
