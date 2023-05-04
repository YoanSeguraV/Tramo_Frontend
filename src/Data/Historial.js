const URL = "https://backend-tramo.vercel.app/natural/verHistoriales";
// HISTORIAL 

import axios from "axios";
  
  export const getHistorial = async () => {
    const response = axios.get(URL);
    return response;
  };