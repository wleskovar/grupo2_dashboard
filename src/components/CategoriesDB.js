import { useState, useEffect} from "react";

function CategoriesDB() {

    const [ ofertas, setOfertas] = useState([]);
    const [ regulares, setRegulares] = useState([]);
    const [ aereos, setaereos] = useState([]);
    const [ micros, setMicros] = useState([]);
    const [ autos, setAutos] = useState([]);
    const [ hoteles, setHoteles] = useState([]);

    useEffect( () => {

        fetch('http://localhost:5020/api/categorias/ofertas')
            .then( response => response.json())
            .then( dato => {
                setOfertas(dato.data[0].ofertas)
            })
            .catch( error => console.error( error));
        
        fetch('http://localhost:5020/api/categorias/regulares')
            .then( response => response.json())
            .then( dato => {
                setRegulares(dato.data[0].regulares)
            })
            .catch( error => console.error( error));

        fetch('http://localhost:5020/api/categorias/aereos')
            .then( response => response.json())
            .then( dato => {
                setaereos(dato.data[0].aereos)
            })
            .catch( error => console.error( error));

        fetch('http://localhost:5020/api/categorias/micros')
            .then( response => response.json())
            .then( dato => {
                setMicros(dato.data[0].micros)
            })
            .catch( error => console.error( error));

        fetch('http://localhost:5020/api/categorias/autos')
            .then( response => response.json())
            .then( dato => {
                setAutos(dato.data[0].autos)
            })
            .catch( error => console.error( error));

        fetch('http://localhost:5020/api/categorias/hoteles')
            .then( response => response.json())
            .then( dato => {
                setHoteles(dato.data[0].hoteles)
            })
            .catch( error => console.error( error));

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
                                Paquetes en oferta: { ofertas }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Paquetes a precio regular: { regulares }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Transporte aéreo: { aereos }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Transporte por micro: { micros }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Transporte en auto: { autos }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Cantidad de Hoteles: { hoteles }
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