import React from "react";

const Jumbotron = () => {
    return (
        <div 
            className="container-fluid p-5 text-danger text-center position-relative"
            style={{
                backgroundImage: 'url("https://www.xtrafondos.com/wallpapers/stranger-things-welcome-to-hawkins-3328.jpg")',
                backgroundSize: '100%100%',
                backgroundPosition: 'center',
                minHeight: '60vh'
            }}
        >
            <div className="position-absolute top-0 start-0 p-3">
                <span className="badge bg-danger">🔦</span>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="display-3 fw-bold mb-4">Hawkins News</h1>
                    <p className="lead mb-5 fs-5">
                        <em>"El Upside Down está aquí"</em>
                    </p>
                    <div className="d-grid gap-3 col-6 mx-auto">
                        <a className="btn btn-outline-danger btn-lg py-3 fs-4" href="#">
                            📡 Señal Eleven
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;