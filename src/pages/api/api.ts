import axios from "axios"

const apiLocal = "https://localhost:7057/api/";

const apiRemota ="";

//criar endereço da api detro do axios
export const api = axios.create({
//Criar uma constante com o nome para a API
    baseURL: apiLocal
})