import { Inventario } from "../pages/Inventario";
import { Proveedores } from "../pages/Proveedores";
import { Home } from "../pages/Home";

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
    {
        title: 'Home',
        path: '/',
        component: Home
    }
];

export default routes;