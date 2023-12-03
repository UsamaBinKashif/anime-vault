"use server";
import axios from "axios";
import { MAX_LIMIT } from "./constant";

export const fetchAnime = async (page: number) => {
  try {
    const res = await axios.get(
      `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
    );
    return res.data; // Return the data directly
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error; // Re-throw the error for handling elsewhere, if needed
  }
};
