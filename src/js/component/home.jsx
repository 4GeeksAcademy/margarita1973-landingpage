import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Card from "./card";
import Cards from "./cards";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container align-items-center">
				<Hero h1Text="AulaCiencia" firstText="Aquí encontrarás una amplia variedad de recursos didácticos diseñados para hacer que el aprendizaje de materias como química, biología, genética y física sea más accesible, interactivo y emocionante."
					secondText="Nuestro objetivo es inspirar curiosidad y fomentar la comprensión a través de materiales innovadores, guías paso a paso y actividades prácticas que te ayudarán a dominar conceptos clave. Tanto si buscas reforzar lo aprendido en clase, como si deseas explorar nuevos temas por tu cuenta, esta página es el lugar ideal para ti."
					thirdText="Te invitamos a navegar por nuestras secciones, experimentar con nuestros recursos y descubrir el placer del aprendizaje." />
				<Cards />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
