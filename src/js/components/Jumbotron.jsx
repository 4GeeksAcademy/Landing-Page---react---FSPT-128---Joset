import React from "react";

const Jumbotron = () => {
    return (
        <div 
            className="container-fluid p-5 text-danger text-center position-relative mb-5"
            style={{
                backgroundImage: 'url("https://wegotthiscovered.com/wp-content/uploads/2022/07/featuring-Hawkins-1.jpg?w=1200")',
                backgroundSize: '100%100%',
                backgroundPosition: 'center',
                minHeight: '60vh',
            
            }}
        >
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="hawkins-title display-3 fw-bold mb-4">Hawkins News</h1>
                    <p className="lead mb-5 fs-5 text-white fw-semibold">
                        <em>"El Upside Down está aquí"</em>
                    </p>
                    <div className="d-grid gap-3 col-6 mx-auto">
                        <a className="btn btn-outline-danger btn-lg py-1 fs-3 text-white btn-danger-soft" href="#">
                            📡 Señal Eleven
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;