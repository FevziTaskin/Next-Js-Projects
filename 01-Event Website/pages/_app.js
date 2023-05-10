import "../styles/globals.css";
import "../styles/general.sass";
import MainLayout from "../src/components/layout/MainLayout";

function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <main>
          <Component {...pageProps} />
        </main>
      </MainLayout>
    </>
  );
}

export default App;
