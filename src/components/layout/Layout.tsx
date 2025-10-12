import { Header, Footer, Sidebar } from "@layout";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="main container">
        <article className="article">{children}</article>
        <Sidebar />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
