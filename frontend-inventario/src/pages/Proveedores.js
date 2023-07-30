import { React} from "react";
import { HeaderMain } from "../components/HeaderMain";
import { Table } from "react-bootstrap";

function Proveedores(){

    return(
        <>
            <HeaderMain/>
            <main className="main-container">
                <div className="main-header-container d-flex justify-content-between align-items-center">
                    <h2 className="page-title">Proveedores</h2>
                    <div className="d-flex">
                        <button type="button" className="btn btn-success">Registrar proveedor</button>
                    </div>
                </div>
                <section className="section-container">
                    <div className="table-container">
                    <Table striped bordered hover responsive="md" id="tabla-proveedores">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>RIF</th>
                                <th>Dirección</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Genéricos Genven S.A.</td>
                                <td>0261-7173288</td>
                                <td>J-019233827</td>
                                <td>Zona Industrial, Maracaibo, edo. Zulia</td>
                                <td>
                                    <button type="button" className="btn btn-secondary">
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
            
        </>
    )
}

export { Proveedores }