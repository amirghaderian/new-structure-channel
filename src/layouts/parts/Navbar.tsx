import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon, Person as PersonIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PersonIcon sx={{ ml: 1 }} />
          <Typography>{currentUser?.name || "کاربر"}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
