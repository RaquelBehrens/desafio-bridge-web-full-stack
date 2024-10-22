import axios from 'axios';

const TOPNUMBER_API_BASE_URL = "http://localhost:8080/api/v1/topnumbers"

class TopNumberService {

    getTopNumbers() {
        return axios.get(TOPNUMBER_API_BASE_URL);
    }

    createTopNumber(number) {
        return axios.post(TOPNUMBER_API_BASE_URL, number);
    }

    getTopNumberByNumber(number) {
        return axios.get(TOPNUMBER_API_BASE_URL + "/" + number);
    }

    deleteTopNumber(number) {
        return axios.delete(TOPNUMBER_API_BASE_URL + "/" + number);
    }
}

export default new TopNumberService()