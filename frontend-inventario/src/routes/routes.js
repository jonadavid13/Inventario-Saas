import { Inventario } from "../pages/Inventario";
import { Proveedores } from "../pages/Proveedores";

const routes = [
    {
        title: 'Inventario',
        path: '/inventario',
        component: Inventario
    },
    {
        title: 'Proveedores',
        path: '/proveedores',
        component: Proveedores
    },
];

export default routes;