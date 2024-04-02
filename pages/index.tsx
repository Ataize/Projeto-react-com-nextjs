import { Fragment } from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";

const Home: NextPage = () => {
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
