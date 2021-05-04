// import { useMemo } from "react";

// import axios from "axios";

// export default function useAPI() {
//   const auth = useAuth(localStorage.email);
//   window.auth = auth;
//   const fetcher = useMemo(() => {
//     const axiosInstance = axios.create({
//       baseUrl: process.env.NODE_ENV === "development" ? "http://localhost:9000/api" : "/api",
//       timeout: 30000,
//       headers: {},
//     });
//     axiosInstance.interceptors.request.use(
//       async (config) => {
//         return {
//           ...config,
//           headers: {
//             ...config.headers,
//             Authorization: `Bearer ${auth}`,
//           },
//         };
//       },
//       (error) => Promise.reject(error),
//     );
//     return axiosInstance;
//   }, [auth]);
//   return fetcher;
// }
