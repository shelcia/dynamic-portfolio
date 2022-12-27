/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLoader } from "../../components/common/CustomLoaders";
import { apiCommon } from "../../services/models/CommonModel";
import Template1 from "./template/template1/Template1";
import Template2 from "./template/template2/Template2";
import Template3 from "./template/template3/Template3";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();

    const getPortfolio = async (id) => {
      try {
        apiCommon.getSingle(id, ac.signal, "portfolio").then((portfolio) => {
          // console.log(portfolio);
          setTemplate(portfolio.message.template);
          setIsLoading(false);
        });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getPortfolio(id);
    return () => ac.abort();
  }, [id]);

  return isLoading ? <PageLoader /> : <TemplateFeed template={template} />;
};

const TemplateFeed = ({ template }) => {
  switch (template) {
    case "template1":
      return <Template1 />;
    case "template2":
      return <Template2 />;
    case "template3":
      return <Template3 />;
    case "template4":
      return <div>Template3 onGoing</div>;
    default:
      return <div>Nothing</div>;
  }
};
