import { Navbar } from "../components"

export const AppLayout = ({ children }) => {
  return (
    <>
        <Navbar />
        <main>{ children }</main>
    </>
  )
}
