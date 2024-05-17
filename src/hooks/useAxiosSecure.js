import axios from "axios";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "https://panda-server-five.vercel.app",
    withCredentials: true,
  });

  return axiosSecure;
};

export default useAxiosSecure;
