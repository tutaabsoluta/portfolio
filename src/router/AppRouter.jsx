import { Route, Routes } from "react-router-dom"
import { AboutPage, ContactPage, HomePage, ProjectsPage } from "../pages"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="about" element={ <AboutPage /> } />
            <Route path="projects" element={ <ProjectsPage /> } />
            <Route path="contact" element={ <ContactPage /> } />

            <Route path="/*" element={ <HomePage /> } />
        </Routes>
    </>
  )
}
