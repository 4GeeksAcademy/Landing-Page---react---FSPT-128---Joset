import React from "react";

//include images into your bundle
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center min-vh-100"
			style={{
        backgroundImage: 'url("https://imagenes.hobbyconsolas.com/files/image_1280_720/uploads/imagenes/2025/10/06/690b235fb2ea3.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'  // Fijo al hacer scroll
      }}
    >


			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center my-5">
				<Card />
			</div>
			<Footer />


		</div>
	);
};

export default Home;