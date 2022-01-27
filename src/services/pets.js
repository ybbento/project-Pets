import client from "../providers/client";
const apiCode = process.env.REACT_APP_API_CODE;
export const listPets = () => client(`pets/${apiCode}`);
export const createPet = (data) =>
	console.log(data) || client.post(`/pets/${apiCode}`, data);
