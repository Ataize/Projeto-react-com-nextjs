import { Fragment } from "react";
import Layout from "../../components/Layout";

const ComponentPage = () => {
  return (
    <Fragment>
      <div className="column middle" style={{ backgroundColor: "#bbb" }}>
        <h1>About</h1>
      </div>
      <aside className="column side" style={{ backgroundColor: "#ccc" }}>
        Aside
      </aside>
    </Fragment>
  );
};
export default ComponentPage;
