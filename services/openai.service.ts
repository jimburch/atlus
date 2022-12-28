import axios from "axios";

const fetchTextCompletion = async (prompt: string) => {
  return await axios
    .get("/api/text", {
      params: {
        prompt,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const fetchImageGeneration = async (prompt: string) => {
  return await axios
    .get("/api/image", {
      params: {
        prompt,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const openAiApiService = {
  fetchTextCompletion,
  fetchImageGeneration,
};
