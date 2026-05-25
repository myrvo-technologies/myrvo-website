import Navbar from "./components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        {children}
      </div>
    </div>
  );
}