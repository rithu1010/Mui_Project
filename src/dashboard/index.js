import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import styles from "./style";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";

function ResponsiveAppBar() {
  const theme = useTheme();
  const style = styles(theme);
  const pages = ["Home", "About", "Blog"];
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem
            button
            component={Link}
            to={`/${page.toLowerCase()}`}
            key={page}
          >
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        style={{ backgroundColor: "#F5F7F8", width: "100%", height: "auto" }}
      >
        <Container>
          <Toolbar disableGutters>
            <Box sx={style.boxcolor}>LoginLogo</Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 10 }}
            >
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  key={page}
                  sx={{
                    my: 2,
                    color: "#808080",
                    fontWeight: "600",
                    fontSize: "14px",
                    display: "block",
                    "&:hover": {
                      color: "#1F6CAB",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="black"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>

            {/* Login icons */}
            <Box sx={{ flexGrow: 0, ml: 2 }} component={Link} to={`/login`}>
              <Tooltip title="Open settings">
                <Box sx={{ color: "black", cursor: "pointer" }}>LoginLogo</Box>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
