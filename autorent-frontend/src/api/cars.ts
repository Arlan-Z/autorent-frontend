import api from "./axios";

export async function getCars() {
  const res = await api.get("/cars");
  return res.data;
}
