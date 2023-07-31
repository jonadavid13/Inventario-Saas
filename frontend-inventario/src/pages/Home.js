import React, { useState } from "react";
import { HeaderMain } from "../components/HeaderMain";
import { Modal , Form } from "react-bootstrap";
import "../assets/styles/index.scss"

function Home (){
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <HeaderMain/>
            <div className="d-flex justify-content-center align-items-center my-4">
            <button type="button" onClick={handleShow} className="btn btn-primary">Modal test</button>
            </div>

            <Modal show={show} onHide={handleClose} id="ModalFormAggArticulo" backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar artículo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Nombre del artículo</Form.Label>
                        <Form.Control id="txtNombreArticulo" type="text" placeholder="Ingresa el nombre del artículo"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <Form.Label className="fw-semibold">Categoría</Form.Label>
                            <button type="text" className="btn btn-secondary slim-button px-2 py-1">Nueva categoría</button>
                        </div>

                        <div className="add-categoria-card card p-2 mb-2 hidden">
                            <Form.Label className="fw-semibold">Agregar categoría</Form.Label>
                            <Form.Control type="text" id="txtAgregarCategoria" placeholder="Nombre de la nueva categoría" />
                            <div className="d-flex justify-content-end mt-3 mb-1">
                                <button type="button" className="btn btn-secondary slim-button me-2">Cancelar</button>
                                <button type="button" className="btn btn-success slim-button">Agregar</button>
                            </div>
                        </div>

                        <Form.Select aria-label="Categoría" className="form-control" id="SelectCategorias" name="selectCategorias">
                            <option>Seleccionar categoría... </option>
                            <option value="1">Analgésicos</option>
                            <option value="2">Psicotrópicos</option>
                            <option value="3">Medicamentos</option>
                            <option value="4">Comprimidos</option>
                            <option value="5">Antibióticos</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Fabricante</Form.Label>
                        <input class="form-control" list="listaFabricantes" id="DatalistFabricantes" placeholder="Escribe para buscar o agregar el nombre del fabricante..."/>
                        <datalist id="listaFabricantes">
                          <option value="Pfizer"/>
                          <option value="Genéricos Genven"/>
                          <option value="Bayer"/>
                        </datalist>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Imagen del artículo</Form.Label>
                        <input class="form-control" type="file" id="imagenArticulo" accept="image/jpeg,image/png,image/webp,image/svg"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="fw-semibold">Código de barras</Form.Label>
                        <Form.Control type="text" id="txtCodigoBarras" placeholder="Código numérico proporcionado en el empaque"/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
                    <button type="button" className="btn btn-primary">Guardar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { Home }