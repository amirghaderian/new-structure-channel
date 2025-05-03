import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  CircularProgress,
  Snackbar,
  Alert,
  CssBaseline,
} from "@mui/material";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  People as UsersIcon,
  BarChart as BarChartIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Dashboard } from "./pages";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

const App = () => {
  // Mock user type
  interface User {
    id: string;
    name?: string;
    isAdmin: boolean;
  }
  // Tab interface
  interface Tab {
    id: string;
    title: string;
    icon: React.ReactNode;
    content: React.ReactNode;
  }
  // Mock authentication state
  //   const [authStatus, setAuthStatus] = useState<
  //     "loading" | "authenticated" | "unauthenticated"
  //   >("unauthenticated");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "dashboard",
      title: "داشبورد",
      icon: <HomeIcon sx={{ fontSize: 20 }} />,
      content: <Dashboard />,
    },
  ]);
  const [activeTabId, setActiveTabId] = useState("dashboard");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  // Mock current user with admin privileges
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  //   const [isAdminLoading, setIsAdminLoading] = useState(false);

  // Mock auth object to replace useAuth
  //   const auth: Auth = {
  //     status: authStatus,
  //     userId: currentUser?.id || null,
  //     signIn: () => {
  //       setAuthStatus("loading");
  //       // Simulate login delay
  //       setTimeout(() => {
  //         setAuthStatus("authenticated");
  //         setCurrentUser({
  //           id: "user-1",
  //           name: "کاربر ادمین",
  //           isAdmin: true,
  //         });
  //       }, 1500);
  //     },
  //   };

  // Create RTL cache for MUI
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  // Create theme with RTL direction
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "Vazirmatn, sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Vazirmatn';
          font-style: normal;
          font-weight: 400;
          src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Regular.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Vazirmatn';
          font-style: normal;
          font-weight: 700;
          src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Bold.woff2') format('woff2');
        }
      `,
      },
    },
  });
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Updated sidebar items with MUI icons
  const sidebarItems = [
    {
      id: "dashboard",
      title: "داشبورد",
      icon: <HomeIcon sx={{ fontSize: 20 }} />,
    },
    {
      id: "channels",
      title: "کانال‌ها",
      icon: <BarChartIcon sx={{ fontSize: 20 }} />,
    },
    {
      id: "users",
      title: "کاربران",
      icon: <UsersIcon sx={{ fontSize: 20 }} />,
    },
    {
      id: "settings",
      title: "تنظیمات",
      icon: <SettingsIcon sx={{ fontSize: 20 }} />,
    },
  ];

  // Handle sidebar item click
  const handleSidebarItemClick = (item: (typeof sidebarItems)[0]) => {
    // Check if tab already exists
    const tabExists = tabs.some((tab) => tab.id === item.id);

    if (!tabExists) {
      // Add new tab
      let content;
      switch (item.id) {
        case "dashboard":
          content = <Dashboard />;
          break;
        // case "channels":
        //   content = <ChannelsContent />;
        //   break;
        // case "users":
        //   content = <UsersContent />;
        //   break;
        // case "settings":
        //   content = <SettingsContent />;
        //   break;
        default:
          content = <Box>محتوای پیش‌فرض</Box>;
      }

      setTabs([
        ...tabs,
        {
          id: item.id,
          title: item.title,
          icon: item.icon,
          content,
        },
      ]);
    }

    // Set active tab
    setActiveTabId(item.id);
    // Close sidebar on mobile
    setIsSidebarOpen(false);
  };

  // Close tab
  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();

    // Don't close if it's the last tab
    if (tabs.length === 1) {
      return;
    }

    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(newTabs);

    // If closing the active tab, activate another tab
    if (activeTabId === tabId && newTabs.length > 0) {
      const lastTab = newTabs[newTabs.length - 1];
      if (lastTab) {
        setActiveTabId(lastTab.id);
      }
    }
  };

  // If not authenticated, show login button
  //   if (auth.status === "unauthenticated") {
  //     return (
  //       <CacheProvider value={cacheRtl}>
  //         <ThemeProvider theme={theme}>
  //           <Box
  //             sx={{
  //               display: "flex",
  //               alignItems: "center",
  //               justifyContent: "center",
  //               minHeight: "100vh",
  //               bgcolor: "background.default",
  //             }}
  //           >
  //             <Card sx={{ width: 350 }}>
  //               <CardHeader
  //                 title={
  //                   <Typography variant="h6" align="center">
  //                     پنل مدیریت کانال
  //                   </Typography>
  //                 }
  //               />
  //               <CardContent>
  //                 <Typography
  //                   align="center"
  //                   color="text.secondary"
  //                   sx={{ mb: 2 }}
  //                 >
  //                   برای دسترسی به پنل مدیریت، لطفا وارد شوید
  //                 </Typography>
  //                 <Button
  //                   fullWidth
  //                   variant="contained"
  //                   onClick={() => auth.signIn()}
  //                 >
  //                   ورود به سیستم
  //                 </Button>
  //               </CardContent>
  //             </Card>
  //           </Box>
  //         </ThemeProvider>
  //       </CacheProvider>
  //     );
  //   }

  // If loading, show loading state
  //   if (auth.status === "loading") {
  //     return (
  //       <div dir="rtl">
  //         <CacheProvider value={cacheRtl}>
  //           <ThemeProvider theme={theme}>
  //             <Box
  //               sx={{
  //                 display: "flex",
  //                 alignItems: "center",
  //                 justifyContent: "center",
  //                 minHeight: "100vh",
  //                 bgcolor: "background.default",
  //               }}
  //             >
  //               <Box sx={{ textAlign: "center" }}>
  //                 <CircularProgress size={48} />
  //                 <Typography color="text.secondary" sx={{ mt: 2 }}>
  //                   در حال بارگذاری...
  //                 </Typography>
  //               </Box>
  //             </Box>
  //           </ThemeProvider>
  //         </CacheProvider>
  //       </div>
  //     );
  //   }

  // If user is not admin, show admin request button
  //   if (currentUser && !currentUser.isAdmin) {
  //     return (
  //       <CacheProvider value={cacheRtl}>
  //         <ThemeProvider theme={theme}>
  //           <Box
  //             sx={{
  //               display: "flex",
  //               alignItems: "center",
  //               justifyContent: "center",
  //               minHeight: "100vh",
  //               bgcolor: "background.default",
  //             }}
  //           >
  //             <Card sx={{ width: 350 }}>
  //               <CardHeader
  //                 title={
  //                   <Typography variant="h6" align="center">
  //                     درخواست دسترسی ادمین
  //                   </Typography>
  //                 }
  //               />
  //               <CardContent>
  //                 <Typography
  //                   align="center"
  //                   color="text.secondary"
  //                   sx={{ mb: 2 }}
  //                 >
  //                   شما دسترسی ادمین ندارید. برای دسترسی به پنل مدیریت، لطفا
  //                   درخواست دسترسی ادمین دهید.
  //                 </Typography>
  //                 <Button
  //                   fullWidth
  //                   variant="contained"
  //                   onClick={() => {
  //                     setIsAdminLoading(true);
  //                     // Simulate API call delay
  //                     setTimeout(() => {
  //                       setCurrentUser((prev) =>
  //                         prev ? { ...prev, isAdmin: true } : null
  //                       );
  //                       setSnackbar({
  //                         open: true,
  //                         message: "دسترسی ادمین با موفقیت اعمال شد",
  //                         severity: "success",
  //                       });
  //                       setIsAdminLoading(false);
  //                     }, 1000);
  //                   }}
  //                   disabled={isAdminLoading}
  //                 >
  //                   {isAdminLoading ? "در حال پردازش..." : "درخواست دسترسی ادمین"}
  //                 </Button>
  //               </CardContent>
  //             </Card>
  //           </Box>
  //         </ThemeProvider>
  //       </CacheProvider>
  //     );
  //   }

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            bgcolor: "background.default",
            color: "red",
            overflow: "hidden",
            direction: "ltr",
          }}
        >
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
            anchor="right"
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
                  xs: isSidebarOpen ? "translateX(0)" : "translateX(100%)",
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
                        color:
                          activeTabId === item.id ? "inherit" : "text.primary",
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

          {/* Main Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              overflow: "hidden",
            }}
          >
            {/* Navbar */}
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

            {/* Tabs */}
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                overflowX: "auto",
              }}
            >
              <Tabs
                value={activeTabId}
                onChange={(_, value) => setActiveTabId(value)}
                variant="scrollable"
                scrollButtons="auto"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab.id}
                    value={tab.id}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ mr: 1 }}>{tab.icon}</Box>
                        {tab.title}
                        {tabs.length > 1 && (
                          <IconButton
                            size="small"
                            sx={{ ml: 0.5, p: 0.5 }}
                            onClick={(e) => closeTab(tab.id, e)}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        )}
                      </Box>
                    }
                  />
                ))}
              </Tabs>
            </Box>

            {/* Tab Content */}
            <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
              {tabs.find((tab) => tab.id === activeTabId)?.content}
            </Box>
          </Box>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default App;
