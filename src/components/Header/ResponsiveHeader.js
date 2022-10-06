import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-scroll";
import "./ResponsiveHeader.css";

const pages = ["Portfolios", "Team", "About Us", "Contact Us"];

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
  },
  signupButton: {
    backgroundColor: "hsl(26, 100%, 55%)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "hsl(26, 100%, 55%)",
      color: "#fff",
    },
  },
});

const ResponsiveHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" navbar="appbar" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isMobile ? (
              <></>
            ) : (
              <img
                src="images/Wices.png"
                className="header-img"
                alt="wices ru"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
            )}
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Link
                to="hero-container"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                WiCES RU
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {isMobile ? (
                  <div>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link
                        to="teammember"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-30}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography
                          textAlign="center"
                          sx={{
                            color: "secondary",
                            "&.active": {
                              background: "black",
                            },
                          }}
                        >
                          TEAM
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link
                        to="about-us"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-40}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography
                          textAlign="center"
                          sx={{ color: "secondary" }}
                        >
                          ABOUT US
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link
                        to="contact-us"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-40}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography
                          textAlign="center"
                          sx={{ color: "secondary" }}
                        >
                          CONTACT US
                        </Typography>
                      </Link>
                    </MenuItem>
                  </div>
                ) : (
                  <div></div>
                )}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WiCES
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { md: "flex" } }}>
              {isMobile ? (
                <>
                  <Link
                    to="portfolio-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      href="/login"
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        "&.active": {
                          background: "black",
                        },
                      }}
                    >
                      Portfolios
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="portfolio-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      Portfolios
                    </Button>
                  </Link>
                  <Link
                    to="teammember"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-30}
                  >
                    <Button
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      Team
                    </Button>
                  </Link>
                  <Link
                    to="about-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-40}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      About Us
                    </Button>
                  </Link>
                  <Link
                    to="contact-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-40}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default ResponsiveHeader;
