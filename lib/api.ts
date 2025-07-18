import axios from "axios";

axios.defaults.baseURL = "https://your-energy.b.goit.study/api";

export interface Exercise {
  _id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  description: string;
  rating: number;
  burnedCalories: number;
  time: number;
  popularity: number;
}

export interface ExercisesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Exercise[];
}

export interface FilterExercises {
  page: string;
  perPage: string;
  totalPages: number;
  results: Exercise[];
}

export interface RatingExercises {
  rate: number;
  email: string;
  review: string;
}

export interface QouteResponse {
  author: string;
  quote: string;
}

export interface SubscriptionResponse {
  message: string;
}

export async function getExercises() {
  const res = await axios.get<ExercisesResponse>("/exercises");
  return res.data;
}

export async function getExercisesById(id: string) {
  const res = await axios.get<Exercise>(`/exercises/${id}`);
  return res.data;
}

export async function updategetExercises(id: string, payload: RatingExercises) {
  const res = await axios.patch<Exercise>(`/exercises/${id}/rating`, payload);
  return res.data;
}

export async function getFilters() {
  const res = await axios.get<FilterExercises>("/filters");
  return res.data;
}

export async function getQuote() {
  const res = await axios.get<QouteResponse>("/quote");
  return res;
}

export async function createSubscription(email: string) {
  const res = await axios.post<SubscriptionResponse>("/subscription", email);
  return res.data;
}
