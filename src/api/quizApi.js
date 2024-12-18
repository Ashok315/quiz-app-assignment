import axios from 'axios';

// Mock API URL
// const baseUrl=import.meta.env.VITE_API_BASE_URL;

const api=axios.create({
    baseURL:"https://5o89y.wiremockapi.cloud/"
});

// this is use for the handle globally (e.g. loading, errors)
export const setupInterceptors=(loading)=>{
     // Request Interceptor
    api.interceptors.request.use(
        (config) => {
        loading(true); 
        return config;
        },
        (error) => {
        loading(false); 
        return Promise.reject(error);
        }
    );

    // Response Interceptor
    api.interceptors.response.use(
        (response) => {
        loading(false); 
        return response;
        },
        (error) => {
        loading(false); 
        return Promise.reject(error);
        }
    );
}


const quizAPI = {
  fetchQuestionsAPI: async () => {
    try {
      const response = await api.get(`/questions`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
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
        throw new Error(error.message);
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
