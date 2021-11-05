import axios from "axios";

/* configure a pre-configured client */
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID sJBceKS5BxdFMQnZX5Bozs1Y3Wnq7L9V-Fvu2nNBEkc",
      },
});