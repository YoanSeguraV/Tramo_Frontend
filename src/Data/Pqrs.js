import axios from "axios";
const URL = "https://backend-tramo.vercel.app/";
export const getPqrs = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};
