import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCommon } from "../../services/models/CommonModel";
import Template1 from "./template/template1/Template1";
import Template2 from "./template/template2/Template2";

const Portfolio = () => {
  return (
    <React.Fragment>
      <Template />
    </React.Fragment>
  );
};

export default Portfolio;

const Template = () => {
  const { id } = useParams();

  const [template, setTemplate] = useState("");

  useEffect(() => {
    const ac = new AbortController();

    const getPortfolio = async (id) => {
      try {
        apiCommon.getSingle(id, ac.signal, "portfolio").then((portfolio) => {
          console.log(portfolio);
          setTemplate(portfolio.message.template);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getPortfolio(id);
    return () => ac.abort();
  }, [id]);

  // const { template } = useParams();

  console.log(template);

  switch (template) {
    case "template1":
      return <Template1 />;
    case "template2":
      return <Template2 />;
    case "template3":
      return <div>Template3 onGoing</div>;
    default:
      return <div>Nothing</div>;
  }
};
