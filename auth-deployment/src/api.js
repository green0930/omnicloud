
import axios from 'axios'
export const API_BASE_URL = "http://localhost:4000"

const axiosInstance = axios.create({
    baseURL: API_BASE_URL
});

export default axiosInstance;

export const fetchPics = async () => {
    const { data } = await axiosInstance.get("/pics-hard-mode", {
        params: {
            size: 5000000,
        },
    });
    return data
};
// uploaded pic from back to end
export const uploadPic = async data => {
    const formData = new FormData();
    
    // FormData is a predefined function
    formData.append("photo", data)
    let result = await axiosInstance.post("/pics", formData)
    return result
}
export const getPhotos = () => {
    const photos = axiosInstance.get("/pics")
    return photos
}