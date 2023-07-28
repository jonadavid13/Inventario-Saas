import React from "react";
import { HeaderMain } from "../components/HeaderMain";
import Table from "react-bootstrap/Table";

function Inventario(){
    return (
      <>
        <HeaderMain/>
        <main>
          <div className="main-header-container d-flex justify-content-between align-items-center my-2">
            <h2>Inventario</h2>
            <div>
              <button type="button" className="btn btn-success">
                Agregar articulo
              </button>
              <button type="button" className="btn btn-primary ms-2">
                Registrar compra
              </button>
            </div>
          </div>
          <Table striped bordered hover responsive="md">
            <thead>
              <tr>
                <th>ID</th>
                <th>Artículo</th>
                <th>Categoría</th>
                <th>Existencias</th>
                <th>Farmaceuta</th>
                <th colSpan={2}>Acciones</th>
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
                </td>
              </tr>
            </tbody>
          </Table>
        </main>
      </>
    );
}

export { Inventario }