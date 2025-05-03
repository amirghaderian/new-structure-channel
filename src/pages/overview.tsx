// import Layout from "../layouts/Layout";
// import DynamicDataGrid from "../components/DynamicDataGrid";
// import "../styles/overview.scss";
// import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
// import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// import DownloadingIcon from "@mui/icons-material/Downloading";
// import ReactSpeedometer from "react-d3-speedometer";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Alert from "@mui/material/Alert";
// import IconButton from "@mui/material/IconButton";
// import Collapse from "@mui/material/Collapse";
// import CloseIcon from "@mui/icons-material/Close";
// import { useState } from "react";
// import MaxWidthDialog from "../components/LoadingModal";

// const Overview = () => {
//   const [open, setOpen] = useState(true);

//   // const [data, setData] = useState<any>(null);
//   //
//   //
//   // if (!data) {
//   //     return <MaxWidthDialog/>;
//   // }

//   const data = [
//     {
//       id: 1,
//       version: 5,
//       createdAt: "2024-12-09T07:24:20",
//       updatedAt: "2024-12-09T07:24:20",
//       amount: "20000000",
//       account: " 125968450 ",
//       finding: "1596002",
//       trans: "واریز تسهیلات",
//     },
//     {
//       id: 2,
//       version: 0,
//       createdAt: "2024-12-10T07:07:39",
//       updatedAt: "2024-12-10T07:07:39",
//       amount: "20000 ",
//       account: " 125968450 ",
//       finding: "10059 ",
//       trans: "برداشت کارمزد",
//     },
//     {
//       id: 3,
//       version: 0,
//       createdAt: "2025-01-16T05:41:50",
//       updatedAt: "2025-01-16T05:41:50",
//       amount: " 2000000",
//       account: " 125968450 ",
//       finding: " 13215",
//       trans: "برداشت قسط",
//     },
//     {
//       id: 4,
//       version: 0,
//       createdAt: "2025-01-16T05:41:50",
//       updatedAt: "2025-01-16T05:41:50",
//       amount: " 2000000 ",
//       account: " 125968450 ",
//       finding: " 265980 ",
//       trans: "برداشت قسط",
//     },
//     {
//       id: 5,
//       version: 0,
//       createdAt: "2025-01-16T05:41:50",
//       updatedAt: "2025-01-16T05:41:50",
//       amount: " 2000000 ",
//       account: " 125968450 ",
//       finding: " 265980 ",
//       trans: "برداشت قسط",
//     },
//   ];

//   const dataTemplate = data.reduce((acc, item) => {
//     acc.push({
//       id: String(item.id),
//       trans: item.trans,
//       amount: Intl.NumberFormat().format(item.amount) + "ریال",
//       account: item.account,
//       finding: item.finding,
//       created: new Date(item.createdAt),
//       updated: new Date(item.updatedAt),
//       version: item.version,
//       parent: item.parent ? item.parent.title : "---",
//     });
//     return acc;
//   }, []);

//   return (
//     <Layout>
//       <div className={"main-section"}>
//         <div className={"gauge-container"}>
//           <ReactSpeedometer
//             width={260}
//             height={160}
//             needleHeightRatio={0.4}
//             value={3.5}
//             minValue={0}
//             maxValue={5}
//             labelFontSize={"10px"}
//             valueTextFontSize={"10px"}
//             // currentValueText="رتبه دبینویی شما"
//             ringWidth={30}
//             needleTransitionDuration={1000}
//             needleColor={"#354352"}
//             textColor={"#9499a1"}
//             customSegmentLabels={[
//               {
//                 text: "داغون 😒",
//                 // position: 'INSIDE',
//                 color: "#555",
//               },
//               {
//                 text: "ضعیف 😐",
//                 // position: 'INSIDE',
//                 color: "#555",
//               },
//               {
//                 text: "متوسط 😌",
//                 // position: 'INSIDE',
//                 color: "#555",
//                 // fontSize: '19px',
//               },
//               {
//                 text: "خوب 😊",
//                 // position: 'INSIDE',
//                 color: "#555",
//               },
//               {
//                 text: "عالی 😉",
//                 // position: 'INSIDE',
//                 color: "#555",
//               },
//             ]}
//           />
//         </div>

//         <div className={"loan-container"}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <InfoOutlineIcon style={{ fontSize: "1rem", color: "darkgray" }} />
//             <label style={{ fontSize: ".875rem", fontWeight: 700 }}>
//               جزئیات تسهیلات دریافتی
//             </label>
//           </div>
//           <div className={"next-installment"}>
//             بازپرداخت بعدی : 1403/12/12
//             <ArrowLeftIcon style={{ fontSize: "1.5rem", color: "black" }} />
//           </div>
//           <div className={"file-download"}>
//             <DownloadingIcon style={{ fontSize: "1rem", color: "darkgray" }} />
//             دانلود فایل قرارداد
//           </div>
//         </div>
//       </div>
//       <div className={"bot-section"}>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <InfoOutlineIcon style={{ fontSize: "1rem", color: "darkgray" }} />
//           <label style={{ fontSize: ".875rem", fontWeight: 700 }}>
//             ریز تراکنش ها
//           </label>
//         </div>
//         <Box sx={{ width: "100%" }}>
//           <Collapse in={open}>
//             <Alert
//               action={
//                 <IconButton
//                   aria-label="close"
//                   color="inherit"
//                   size="small"
//                   onClick={() => {
//                     setOpen(false);
//                   }}
//                 >
//                   <CloseIcon fontSize="inherit" />
//                 </IconButton>
//               }
//               sx={{ mb: 2 }}
//               severity="info"
//             >
//               Click the close icon to see the Collapse transition in action!
//             </Alert>
//           </Collapse>
//         </Box>
//         <DynamicDataGrid
//           data={dataTemplate}
//           columns={[
//             {
//               field: "id",
//               headerName: "ردیف",
//               width: 100,
//               headerAlign: "center",
//               align: "center",
//               headerClassName: "super-app-theme--header",
//             },
//             {
//               field: "trans",
//               headerName: "عنوان",
//               minWidth: 200,
//               flex: 1,
//               headerAlign: "center",
//               align: "center",
//               headerClassName: "super-app-theme--header",
//             },
//             {
//               field: "amount",
//               headerName: "مبلغ",
//               minWidth: 200,
//               flex: 1,
//               headerAlign: "center",
//               align: "center",
//               headerClassName: "super-app-theme--header",
//             },
//             {
//               field: "account",
//               headerName: "حساب واریز / برداشت",
//               minWidth: 200,
//               flex: 1,
//               headerAlign: "center",
//               align: "center",
//               headerClassName: "super-app-theme--header",
//             },
//             {
//               field: "created",
//               headerName: "زمان تراکنش",
//               type: "dateTime",
//               minWidth: 250,
//               flex: 1,
//               headerAlign: "center",
//               align: "center",
//               headerClassName: "super-app-theme--header",
//             },
//             {
//               field: "finding",
//               headerName: "شماره پیگیری",
//               minWidth: 250,
//               flex: 1,
//               headerAlign: "center",
//               align: "center",
//               headerClassName: "super-app-theme--header",
//             },
//           ]}
//           showToolbar={false}
//           disableColumnMenu={true}
//           showActions={false}
//         />
//       </div>
//     </Layout>
//   );
// };

// export default Overview;
