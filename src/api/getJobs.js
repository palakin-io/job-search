import axios from "axios";

const getJobs = async () => {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    let url = `${baseUrl}/jobs`;
    let response = await axios.get(url);

    if (response.data.length > 0) {
        return response.data;
    }
}

export default getJobs;