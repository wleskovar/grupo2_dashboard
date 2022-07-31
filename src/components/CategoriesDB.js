import React from "react";

function CategoriesDB() {
    return(
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categorías en la Base de Datos</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Paquetes en oferta:
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Paquetes a precio regular:
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Transporte aéreo:
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Transporte por micro:
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Transporte en auto:
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Paquetes con salida el proximo mes:
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CategoriesDB