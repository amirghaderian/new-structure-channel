import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

const Dashboard = () => (
  <Box
    sx={{
      display: "grid",
      gap: 2,
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
    }}
  >
    <Card>
      <CardHeader
        title={<Typography variant="subtitle2">کل کانال‌ها</Typography>}
        sx={{ pb: 1 }}
      />
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          12
        </Typography>
        <Typography variant="caption" color="text.secondary">
          +2 در ماه گذشته
        </Typography>
      </CardContent>
    </Card>
    <Card>
      <CardHeader
        title={<Typography variant="subtitle2">کاربران فعال</Typography>}
        sx={{ pb: 1 }}
      />
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          132
        </Typography>
        <Typography variant="caption" color="text.secondary">
          +10% از ماه گذشته
        </Typography>
      </CardContent>
    </Card>
    <Card>
      <CardHeader
        title={<Typography variant="subtitle2">بازدید امروز</Typography>}
        sx={{ pb: 1 }}
      />
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          2,345
        </Typography>
        <Typography variant="caption" color="text.secondary">
          +5% از دیروز
        </Typography>
      </CardContent>
    </Card>
  </Box>
);
export default Dashboard;
