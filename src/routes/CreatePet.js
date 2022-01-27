import "./CreatePet.css";
import { createPet } from "../services/pets";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
const schema = yup.object({
	name: yup.string().required("Nome do pet é obrigatório"),
	breed: yup.string().required("Raça do pet é obrigatório"),
	species: yup.string().required("Espécie do pet é obrigatório"),
	gender: yup.string().required("Gênero do pet é obrigatório"),
	age: yup.string().required("Idade do pet é obrigatório"),
});

function CreatePet() {
	const {
		register,

		formState: { errors },
		setValue,
		reset,
	} = useForm({ resolver: yupResolver(schema) });
	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			const name = formData.get("name");
			const breed = formData.get("breed");
			const age = formData.get("age");
			const species = formData.get("species");
			const gender = formData.get("gender");

			const url = formData.get("url");
			const data = {
				name,
				breed,
				age,
				species,
				gender,

				url,
			};
			console.log(data);
			await createPet(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="createApp">
			<form className="createForm" onSubmit={handleSubmit}>
				<label>
					Nome: <input type="text" name="name" />
				</label>
				<label>
					Raça: <input type="text" name="breed" />
				</label>
				<label>
					Idade: <input type="number" name="age" />
				</label>

				<label htmlFor="species">
					Espécie:
					<select name="species">
						<option value="cat">Gato</option>
						<option value="dog">Cachorro</option>
					</select>
				</label>
				<label htmlFor="gender">
					Gênero:
					<select name="gender">
						<option value="male">Macho</option>
						<option value="female">Fêmea</option>
					</select>
				</label>

				<label>
					Url: <input type="text" name="url" />
				</label>
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

export default CreatePet;
