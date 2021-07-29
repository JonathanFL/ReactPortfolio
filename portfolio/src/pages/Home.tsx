import React, { FC, ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@material-ui/core";

// components

// constants
import { APP_TITLE, PAGE_TITLE_HOME } from "../utils/constants";

const Home: FC<{}> = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={"root"}>
        <h1>{PAGE_TITLE_HOME}</h1>
        <Link to="/test">
          <Button variant="contained" color="primary">
            Go to Test-page
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
