import { useState, useEffect} from "react";

function CategoriesDB() {

    const [ categorias, setCategorias] = useState([]);

    useEffect( () => {
        console.log( '%cse monto el componente', 'color:green');
        fetch('http://localhost:5020/api/categorias/ofertas')
            .then( response => response.json())
            .then( dato => {
                setCategorias(dato.data[0].ofertas)
            })
            .catch( error => console.error( '%c${error}', 'color: red' ));

    }, []);

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
                                Paquetes en oferta: { categorias }
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