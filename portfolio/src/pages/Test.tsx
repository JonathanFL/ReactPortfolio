import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";

// components

// constants
import { APP_TITLE, PAGE_TITLE_HOME } from "../utils/constants";

const Test: FC<{}> = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>TEST | {APP_TITLE}</title>
      </Helmet>
      <div className={"root"}>
        <h1>TEST</h1>
      </div>
    </>
  );
};

export default Test;
