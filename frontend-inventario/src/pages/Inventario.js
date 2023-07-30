import { React } from "react";
import { HeaderMain } from "../components/HeaderMain";
import Table from "react-bootstrap/Table";

function Inventario() {
    //const [showModal, setShowModal] = useState(null);
    //const setModal = (form) => setShowModal(form);

    return (
        <>
            <HeaderMain/>
            <main className="main-container">
                <div className="main-header-container d-flex justify-content-between align-items-center">
                    <h2 className="page-title">Inventario</h2>
                </div>

                <section className="section-container section-articulos">
                    <div className="section-header-container d-flex justify-content-between align-items-center my-2">
                        <h3 className="section-title">Lista de artículos</h3>
                        <div>
                            <button type="button" className="btn btn-success">
                                Agregar articulo
                            </button>
                            <button type="button" className="btn btn-primary ms-2">
                                Registrar compra
                            </button>
                        </div>
                    </div>

                    <div className="table-container">
                    <Table striped bordered hover responsive="md" id="tabla-articulos" className="tabla-articulos">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Artículo</th>
                                <th>Categoría</th>
                                <th>Existencias</th>
                                <th>Farmaceuta</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dolak SL</td>
                                <td>Comprimidos</td>
                                <td>50</td>
                                <td>Dra. María Alcira Rivero Prieto</td>
                                <td>
                                    <button type="button" className="btn btn-secondary">
                                        Ver detalles
                                    </button>
                                    <button type="button" className="btn btn-warning">
                                        Editar
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                </section>

                <div className="section-divider"></div>

                <section className="section-container section-lotes">
                    <div className="section-header-container d-flex justify-content-between align-items-center my-2">
                        <h3 className="section-title">Lotes ingresados</h3>
                        <div>
                            <button type="button" className="btn btn-success">
                                Registrar lote
                            </button>
                            <button type="button" className="btn btn-primary ms-2">
                                Registrar compra
                            </button>
                        </div>
                    </div>

                    <div className="table-container">
                    <Table striped bordered hover responsive="md" id="tabla-lotes">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>N° de lote</th>
                                <th>Proveedor</th>
                                <th>Total de artículos</th>
                                <th>N° de Factura</th>
                                <th>N° de Control de Factura</th>
                                <th>Usuario</th>
                                <th>Fecha de registro</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>050</td>
                                <td>Pfizer</td>
                                <td>120</td>
                                <td>00038266</td>
                                <td>0054892231B</td>
                                <td>Argenis León</td>
                                <td>26/07/2023 13:05:02</td>
                                <td>
                                    <button type="button" className="btn btn-secondary">
                                        Ver detalles
                                    </button>
                                    <button type="button" className="btn btn-warning">
                                        Editar
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                </section>

            </main>

            <div className="modals-container">
            </div>
        </>
    );
}

export { Inventario }