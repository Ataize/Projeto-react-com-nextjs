import { Fragment, useEffect } from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { log } from "console";

const Home: NextPage = () => {
  // Com o useEffect eu vejo minhas variváveis de ambiente no front mas é preciso autorizar no next.config visto se tratar de info sensíveis
  // useEffect(() => {
  //   console.log(process.env.MYSQL_CONNECT);
  // });

  return (
    <Fragment>
      <div className="column middle" style={{ backgroundColor: "#bbb" }}>
        <h1>Home</h1>
      </div>
      <aside className="column side" style={{ backgroundColor: "#ccc" }}>
        Aside
      </aside>
    </Fragment>
  );
};

export default Home;
// Em seguida eu vejo minhas variváveis de ambiente no servidor
export function getServerSideProps() {
  console.log(process.env.MYSQL_CONNECT);

  return {
    props: {},
  };
}
