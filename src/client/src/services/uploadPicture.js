import axios from "axios"

const uploadPicture = async (image) => {
    try {
        const formData = new FormData();
        formData.append('image', image);
    
        const response = await axios.post('http://10.247.101.238:80/api/clothing', formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    
        console.log('Data posted successfully:', response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    
}

export default uploadPicture