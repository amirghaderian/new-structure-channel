import {
  Box,
  Button,
  Checkbox,
  createTheme,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#ed1b2f", // red
    },
    secondary: {
      main: "#52595b", //gray
    },
  },
  typography: {
    fontFamily: "IRANSans, Roboto, sans-serif",
  },
  direction: "rtl",
});

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        sx={{ height: "100vh", width: "100vw" }}
      >
        <Grid
          sx={{
            background: "linear-gradient(to bottom right, #52595b, #212121)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 4,
          }}
        >
          <Box textAlign="center">
            <img
              src="https://bankmellat.ir/_DouranPortal/logos/fa-IR/MainLogo_Test.png"
              alt="بانک ملت"
              style={{ width: 160, marginBottom: 16 }}
            />
            <Typography variant="h4" color="white" fontWeight="bold">
              سامانه بانک ملت
            </Typography>
          </Box>
        </Grid>

        <Grid container sx={{ flex: 1 }}>
          <Grid
            // xs={12}
            // md={6}
            component={"div"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexBasis={{ xs: "100%", md: "40%" }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 4,
                maxWidth: 400,
                width: "90%",
                borderRadius: 4,
                direction: "ltr",
              }}
            >
              <Typography
                variant="h5"
                textAlign="center"
                color="secondary.main"
                fontWeight="bold"
                mb={3}
              >
                ورود به حساب
              </Typography>

              <Box component="form" noValidate>
                <div>
                  <TextField
                    label="ایمیل"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    placeholder="ایمیل خود را وارد کنید"
                    {...register("email", { required: "ایمیل الزامی است" })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email />
                        </InputAdornment>
                      ),
                      sx: {
                        direction: "rtl",
                        textAlign: "right",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        right: 0,
                        left: "auto",
                        transformOrigin: "top right",
                      },
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="رمز عبور"
                    type={showPassword ? "text" : "password"}
                    variant="standard"
                    fullWidth
                    placeholder="رمز عبور خود را وارد کنید"
                    margin="normal"
                    {...register("password", {
                      required: "رمز عبور الزامی است",
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{ p: 0, outline: "none !important" }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      sx: {
                        direction: "rtl",
                        textAlign: "right",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        right: 0,
                        left: "auto",
                        transformOrigin: "top right",
                      },
                      shrink: true,
                    }}
                  />
                </div>

                <FormControlLabel
                  control={<Checkbox {...register("rememberMe")} />}
                  label="مرا به خاطر بسپار"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    ml: 0,
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: 2,
                  }}
                >
                  ورود
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* ستون تصویر و خوش‌آمدگویی */}
          <Grid
            // md={6}
            flexBasis="60%"
            component={"div"}
            sx={{
              display: { xs: "none", md: "flex" },
              position: "relative",
              backgroundImage: `url('https://images.unsplash.com/photo-1588776814546-ec09d043d02b?auto=format&fit=crop&w=1400&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            />

            <Box
              textAlign="center"
              sx={{
                position: "relative",
                zIndex: 1,
                px: 4,
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={2}>
                به سامانه بانک ملت خوش آمدید
              </Typography>
              <Typography variant="body1">
                با ورود به حساب کاربری خود می‌توانید از تمامی خدمات بانک به‌صورت
                آنلاین بهره‌مند شوید.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
