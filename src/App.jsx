// App.js

// import React Router
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// import layout
import LayoutRoot from "./layouts/LayoutRoot";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Catalogs from "./pages/Catalogs";
import Projects from "./pages/Projects";
import ProjectsAll from "./pages/ProjectsAll";
import ProjectsResidences from "./pages/ProjectsResidences";
import ProjectsClubHouse from "./pages/ProjectsClubHouse";
import ProjectsHighRise from "./pages/ProjectsHighRise";
import CatalogNexsta from "./pages/CatalogNexsta";
import CatalogMadela from "./pages/CatalogMadela";
import CatalogExhido from "./pages/CatalogExhido";
import CatalogKcw75 from "./pages/CatalogKcw75";
import CatalogBarParts from "./pages/CatalogBarParts";
import CatalogSfBar from "./pages/CatalogSfBar";


// router settings
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <LayoutRoot/> }>
      
      <Route path="/" element={ <Home/> }>
        <Route index element={ <ProjectsAll/> } />
        <Route path="residences" element={ <ProjectsResidences/> }/>
        <Route path="club-house" element={ <ProjectsClubHouse/> }/>
        <Route path="high-rise" element={ <ProjectsHighRise/> }/>
      </Route>
      <Route path="projects" element={ <Projects/> }> 
        <Route index element={ <ProjectsAll/> } />
        <Route path="residences" element={ <ProjectsResidences/> }/>
        <Route path="club-house" element={ <ProjectsClubHouse/> }/>
        <Route path="high-rise" element={ <ProjectsHighRise/> }/>
      </Route>
      <Route path="catalogs" element={ <Catalogs/> }>
        <Route index element={ <CatalogNexsta/> } />
        <Route path="madela" element={ <CatalogMadela/> }/>
        <Route path="exhido" element={ <CatalogExhido/> }/>
        <Route path="kcw75" element={ <CatalogKcw75/> }/>
        <Route path="barparts" element={ <CatalogBarParts/> }/>
        <Route path="sfbar" element={ <CatalogSfBar/> }/>
      </Route>
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
      
      

      <Route path='*' element={ <NotFound/> } />
    </Route>
  )
)



export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}

