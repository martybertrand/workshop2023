import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Sidebar from './components/nav/Sidebar';
import Dashboard from './pages/Dashboard';
import Consumption from './pages/Consumption';
import Settings from './pages/Settings';
import Immeuble from "./pages/Immeuble";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/consumption",
    element: <Consumption/>,
  },
  {
    path: "/immeuble",
    element: <Immeuble/>,
  },
  {
    path: "/settings",
    element: <Settings/>
  }
]);


function App() {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar/>
      <RouterProvider router={router}>
        <Dashboard/>
        <Consumption/>
        <Immeuble/>
        <Settings/>
      </RouterProvider>
    </div>
  );
}

export default App;
