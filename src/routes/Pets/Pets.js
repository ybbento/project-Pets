import { listPets } from "../../services/pets";
import { useEffect, useState } from "react";
import "./Pets.css";
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
			<div className="pets">
				{pets.map((pet) => (
					<ul className="pet-item">
						<li>
							<img src={pet.url} alt="imagem" className="pet-image" />
						</li>
						<div className="pet-data">
							<li>
								<span>Nome:</span>
								{pet.name}
							</li>
							<li>
								<span>Raça:</span>
								{pet.breed}
							</li>
							<li>
								<span>Idade:</span>
								{pet.age} anos
							</li>
							<li>
								<span>Espécie:</span>
								{pet.species}
							</li>
						</div>
					</ul>
				))}
			</div>
		</>
	);
}

export default PublicPage;
