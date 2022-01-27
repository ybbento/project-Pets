import { listPets } from "../services/pets";
import { useEffect, useState } from "react";

function PublicPage() {
	const [pets, setPets] = useState([]);
	useEffect(() => {
		const request = async () => {
			const { data } = await listPets();
			console.log(data.pets);

			setPets(data.pets);
		};
		request();
	}, []);
	return (
		<>
			{pets.map((pet) => (
				<ul>
					<li>Nome:{pet.name}</li>
					<li>Raça:{pet.breed}</li>
					<li>Idade:{pet.age}</li>
					<li>Espécie:{pet.species}</li>
					<li>
						<img src={pet.url} alt="imagem" />
					</li>
				</ul>
			))}
		</>
	);
}

export default PublicPage;
