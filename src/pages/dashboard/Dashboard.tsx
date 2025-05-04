import { Box } from "@mui/material";
import { Layout } from "../../layouts";
import { Navbar, Sidebar, TabContent, TabsHeader } from "./parts";

const Dashboard = () => (
  <Layout>
    <Box
      sx={{
        display: "flex",
        height: "100%",
      }}
    >
      <Sidebar />
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <Navbar />

        {/* Tabs */}
        <TabsHeader />

        {/* Tab Content */}
        <TabContent />
      </Box>
    </Box>
  </Layout>
);
export default Dashboard;
