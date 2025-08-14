import { Header } from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <div className="Layout-container">
      <Header />
      <div className="Layout-children">{children}</div>
    </div>
  );
};

export { Layout };
