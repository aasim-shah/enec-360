import axios from "axios";
const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAllVideos = async (lang: string) => {
  try {
    const response = await axios.get(baseurl + "/api/videos/all", {
      headers: {
        "Content-Type": "application/json",
        language: lang,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//  pushign
export const deleteVideo = async (id: string) => {
  try {
    const response = await axios.delete(baseurl + `/api/videos/delete/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to delete video", error);
    throw error;
  }
};

export const addLanuage = async (data: any) => {
  try {
    const response = await axios.post(baseurl + "/api/languages/", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/// fetch all languages
export const fetchAllLanguages = async () => {
  try {
    const response = await axios.get(baseurl + "/api/languages", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch languages", error);
    throw error;
  }
};

// delete language
export const deleteLanguage = async (id: string) => {
  try {
    const response = await axios.delete(baseurl + `/api/languages/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to delete language", error);
    throw error;
  }
};

// get all stats

export const fetchStats = async () => {
  try {
    const response = await axios.get(baseurl + "/api/videos/stats", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch stats", error);
    throw error;
  }
};
