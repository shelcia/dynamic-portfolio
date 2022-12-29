import React, { useContext, useEffect, useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Medium = ({ portfolioDetails }) => {
  const [articles, setArticles] = useState([]);
  const [darkTheme] = useContext(ThemeContext);
  const textTheme = darkTheme ? "text-white" : "text-dark";

  useEffect(() => {
    const url = portfolioDetails?.mediumRssLink;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const results = await response.json();
        // console.log(results);
        setArticles(results.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [portfolioDetails?.mediumRssLink]);

  const badgeColor = [
    "primary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ];

  return (
    <Row className="mt-5 px-4 pb-5" id="medium">
      <Col md="12">
        {articles?.map((article, index) => (
          <Card
            className="p-4 mb-4"
            key={index + 1}
            style={{
              backgroundColor: "transparent",
              boxShadow: darkTheme
                ? "0.5px -0.5px 2px 2px inset rgba(255, 255, 255, 0.2)"
                : "rgba(255,255,255,0)",
            }}
          >
            <Row>
              <Col sm="4" className="d-flex justify-content-center">
                <img
                  src={article.thumbnail}
                  alt=""
                  className="img-fluid"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
              </Col>
              <Col
                sm="8"
                className="d-flex justify-content-between flex-column"
              >
                <h4 className={`${textTheme} mb-4`}>{article.title}</h4>
                <div>
                  {article.categories.map((category, index) => (
                    <Badge
                      bg={badgeColor[index % badgeColor.length]}
                      key={index + 1}
                      className="me-1"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>

                <div className="d-flex mt-4 justify-content-between">
                  <a href={article.link} className="mb-0">
                    Article Link
                  </a>
                  <p className="mb-0">
                    Published: {article.pubDate.split(" ")[0]}
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </Col>
    </Row>
  );
};

export default Medium;
