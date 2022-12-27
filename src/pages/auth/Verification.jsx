import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ComponentLoader } from "../../components/common/CustomLoaders";
import { apiAuth } from "../../services/models/AuthModel";
import { FaCheckCircle } from "react-icons/fa";
import { Button, Container } from "react-bootstrap";

const Verification = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const verify = async () => {
      apiAuth
        .putById(id, {}, "verification")
        .then((response) => {
          setIsLoading(false);
          if (response.status === "200") toast.success(response.message);
          else if (
            response.status === "400" ||
            response.status === "500" ||
            response.status === "401"
          )
            toast.error(response.message);
        })
        .catch((error) => {
          // console.log(error);
          setIsLoading(false);
          toast.error(error);
        });
    };
    verify();
  }, [id]);

  return (
    <React.Fragment>
      <Container
        fluid
        className="bg-dark text-light"
        style={{ height: "100vh" }}
      >
        <Container className="pt-4">
          {isLoading ? (
            <ComponentLoader loading={isLoading}></ComponentLoader>
          ) : (
            <div className="text-center mt-5">
              <FaCheckCircle
                className="text-success"
                style={{ fontSize: "100px" }}
              />
              <h4 className="display-4 text-success mt-4">
                You account is verified
              </h4>
              <Link to="/login">
                <Button className="mt-5">Login</Button>
              </Link>
            </div>
          )}
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Verification;
