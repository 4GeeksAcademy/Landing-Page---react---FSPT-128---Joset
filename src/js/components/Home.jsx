import React from "react";

//include images into your bundle
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const cards = [
	{
		imagen: "https://images3.alphacoders.com/101/thumb-1920-1017431.jpg",
		titulo: "Niña encontrada",
		texto: "Niña con poderes telequinéticos vista en el bosque. Objetos levitando, luces explotando. ¿Amiga o amenaza?",

	},
	{
		imagen: "https://wallpapers.com/images/high/demogorgon-stranger-things-enjkc4vl1rsxw2zu.webp",
		titulo: "Demogorgon",
		texto: " Actividad anómala detectada en Hawkins. Luces parpadeando, ruidos extraños y desapariciones misteriosas.",
	},
	{
		imagen: "https://www.hollywoodreporter.com/wp-content/uploads/2022/06/StrangerThings_StrangerThings4_4_01_08_27_04-H-2022.jpg?w=1296&h=730&crop=1",
		titulo: "Max atrapada en el infierno.",
		texto: " Max Mayfield desaparece en el Upside Down. Vecna la tortura mentalmente.",
	},
	{
		imagen: "https://fotografias-2.larazon.es/clipping/cmsimages01/2025/10/21/9590710A-B636-4FA9-8277-D0B474D800BA/97.jpg?crop=1280,720,x0,y0&width=1600&height=900&optimize=low&format=webply",
		titulo: "Once se prepara para la guerra",
		texto: "La niña con poderes telepáticos regresa a Hawkins. Grietas del Upside Down se expanden. ¿Podrá detener a Vecna antes de que sea tarde?",
	}
];


const Home = () => {
	return (
		<div className="text-center min-vh-100"
			style={{
				backgroundImage: 'url("https://www.xtrafondos.com/wallpapers/stranger-things-welcome-to-hawkins-3328.jpg")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed'  // Fijo al hacer scroll
			}}
		>


			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />


		</div>
	);
};

export default Home;