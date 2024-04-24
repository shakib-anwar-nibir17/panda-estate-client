import axios from "axios";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "panda-estate-server.vercel.app",
    withCredentials: true,
  });

  return axiosSecure;
};

export default useAxiosSecure;
