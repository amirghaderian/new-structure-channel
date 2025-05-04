import { Dispatch, ReactNode, SetStateAction } from "react";

interface User {
  id: string;
  name?: string;
  isAdmin: boolean;
}

interface TabI {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}
type sidebarItems = {
  id: string;
  title: string;
  icon: ReactNode;
}[];
interface AppContextType {
  tabs: TabI[];
  setTabs: Dispatch<SetStateAction<TabI[]>>;
  activeTabId: string;
  setActiveTabId: Dispatch<SetStateAction<string>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarItems: sidebarItems;
  handleSidebarItemClick: (item: sidebarItems[0]) => void;
}
type handleSidebarItemClick = (item: sidebarItems[0]) => void;
export type {
  User,
  TabI,
  sidebarItems,
  handleSidebarItemClick,
  AppContextType,
};
