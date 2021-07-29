import React, { FC, ReactNode, useReducer } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

interface Props {
  /* 
  toggleTheme: () => void;
  useDefaultTheme: boolean; */
  children: ReactNode;
}

const Layout: FC<Props> = ({ /* toggleTheme, useDefaultTheme,  */ children }) => {
  const [open, toggle] = useReducer((open) => !open, true);
  return (
    <div className={"root"}>
      <div>Header</div>
      <div>Navigation</div>
      <main>
        <div>Body</div>
        {children}
      </main>
      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
};

export default Layout;
