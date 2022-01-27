import "./CreatePet.css";
import { createPet } from "../../services/pets";

function CreatePet() {
	const handleSubmit = async (event) => {
		try {
			console.log("uepa");
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			const name = formData.get("name");
			const breed = formData.get("breed");
			const age = formData.get("age");
			const species = formData.get("species");
			const gender = formData.get("gender");
			const tutor = formData.get("tutor");
			const url = formData.get("url");
			const data = {
				name,
				breed,
				age,
				species,
				gender,
				tutor,
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
					Idade: <input type="number" name="age" className="input-age" />
				</label>

				<label htmlFor="species">
					Espécie:
					<select name="species">
						<option value="Gato">Gato</option>
						<option value="Cachorro">Cachorro</option>
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
