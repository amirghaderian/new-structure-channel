// context/AppContext.tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  People as UsersIcon,
  BarChart as BarChartIcon,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { AppContextType, TabI, sidebarItems } from "./AppContext.types";
import { MainContent } from "../../pages/dashboard";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [tabs, setTabs] = useState<TabI[]>([
    {
      id: "dashboard",
      title: "داشبورد",
      icon: <HomeIcon sx={{ fontSize: 20 }} />,
      content: <MainContent />,
    },
  ]);
  const [activeTabId, setActiveTabId] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
  const handleSidebarItemClick = (item: sidebarItems[0]) => {
    const tabExists = tabs.some((tab) => tab.id === item.id);

    if (!tabExists) {
      let content;
      switch (item.id) {
        case "dashboard":
          content = <MainContent />;
          break;
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
        { id: item.id, title: item.title, icon: item.icon, content },
      ]);
    }

    setActiveTabId(item.id);
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        tabs,
        setTabs,
        activeTabId,
        setActiveTabId,
        isSidebarOpen,
        sidebarItems,
        setIsSidebarOpen,
        handleSidebarItemClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
