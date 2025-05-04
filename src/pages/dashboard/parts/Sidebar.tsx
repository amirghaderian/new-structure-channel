import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useApp } from "../../../context";
const Sidebar = () => {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    handleSidebarItemClick,
    activeTabId,
    sidebarItems,
  } = useApp();

  return (
    <>
      {/* Sidebar - Mobile Overlay */}
      {isSidebarOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(4px)",
            zIndex: 40,
            display: { xs: "block", md: "none" },
          }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 256,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 256,
            boxSizing: "border-box",
            borderLeft: 1,
            borderColor: "divider",
            position: { xs: "fixed", md: "static" },
            height: "100%",
            zIndex: { xs: 50, md: "auto" },
            transform: {
              xs: isSidebarOpen ? "translateX(0)" : "translateX(0)",
              md: "translateX(0)",
            },
            transition: "transform 0.2s ease-in-out",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
            px: 2,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            پنل مدیریت کانال
          </Typography>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setIsSidebarOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ py: 2 }}>
          {sidebarItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={activeTabId === item.id}
                onClick={() => handleSidebarItemClick(item)}
                sx={{
                  py: 1,
                  minHeight: 48,
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: activeTabId === item.id ? "inherit" : "text.primary",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
