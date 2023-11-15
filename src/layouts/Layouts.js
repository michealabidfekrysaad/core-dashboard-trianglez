// i make this layout bec in some  apps there is many layouts can
// be used with different design  so here can add another

import { Grid } from "@mui/material";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SideMenu } from "../components/SideMenu";

// layout for specific pages or users
export const MainLayout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Grid container className="main">
      <Grid
        item
        xs={collapse ? 4 : 2}
        md={collapse ? 2 : 1}
        className="side-menu"
      >
        <SideMenu setCollapse={setCollapse} collapse={collapse} />
      </Grid>
      <Grid
        item
        xs={collapse ? 8 : 10}
        md={collapse ? 10 : 11}
        className="content"
      >
        <Navbar />
        {children}
      </Grid>
    </Grid>
  );
};
