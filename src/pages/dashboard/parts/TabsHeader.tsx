import { Tabs, Tab, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useApp } from "../../../context";

const TabsHeader = () => {
  const { tabs, activeTabId, setActiveTabId, setTabs } = useApp();

  const closeTab = (tabId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(newTabs);
    if (activeTabId === tabId && newTabs.length > 0) {
      setActiveTabId(newTabs[newTabs.length - 1].id);
    }
  };

  return (
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
  );
};

export default TabsHeader;
