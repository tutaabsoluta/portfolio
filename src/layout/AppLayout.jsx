import { Navbar } from "../components";
import { Footer } from "../ui";

export const AppLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-[100vh]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
