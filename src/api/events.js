import { api } from "./client";

export async function getEvents() {
  const res = await api.get("/events", {});
  return res.data;
}
