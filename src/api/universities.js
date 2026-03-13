import { api } from "./client";

export async function getUniversities() {
  const res = await api.get("/universities", {});
  return res.data;
}
