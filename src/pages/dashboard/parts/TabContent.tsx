import { Box } from "@mui/material";
import { useApp } from "../../../context";

const TabContent = () => {
  const { activeTabId, tabs } = useApp();
  return (
    <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
      {tabs.find((tab) => tab.id === activeTabId)?.content}
    </Box>
  );
};

export default TabContent;
