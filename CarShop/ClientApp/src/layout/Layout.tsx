import { Container } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-5">
        <Container fluid>{props.children}</Container>
      </main>
      <Footer />
    </>
  );
};
