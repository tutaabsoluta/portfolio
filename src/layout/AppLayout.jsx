import { Navbar } from "../components"
import { Footer } from "../ui"

export const AppLayout = ({ children }) => {
  return (
    <>
        <Navbar />
        <main>{ children }</main>
        <Footer />
    </>
  )
}
