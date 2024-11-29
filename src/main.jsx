import App from './App.jsx'
import Favoritos from './Favoritos.jsx';
import Formulario from './Formulario.jsx';
import Sugestoes from './Sugestoes.jsx';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Pesquisar } from './Pesquisar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/favoritos",
    element: <Favoritos />,
  },
  {
    path: "/formulario",
    element: <Formulario />,
  },
  {
    path: "/sugestoes",
    element: <Sugestoes />,
  },
  {
    path: "/pesquisar",
    element: <Pesquisar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);