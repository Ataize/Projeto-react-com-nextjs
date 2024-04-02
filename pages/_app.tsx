import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Os componentes criados aqui serão aplicados para todas as páginas
// O arquivo app é o componente principal
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
