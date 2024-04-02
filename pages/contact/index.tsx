import { Fragment } from "react";
import Layout from "../../components/Layout";

const ComponentPage = () => {
  return (
    <Fragment>
      <div className="column middle" style={{ backgroundColor: "#bbb" }}>
        <h1>Contact</h1>
        <form>
          <input type="text" />
          <button>Enviar</button>
        </form>
      </div>
    </Fragment>
  );
};
export default ComponentPage;
