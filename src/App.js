import React from "react";
import "./App.css";
import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  Alert,
} from "@mui/material";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

const BoxDiv = styled(Box)`
  margin-top: 50px;
  width: 35%;
  min-height: 200px;
  border-radius: 25px;
  padding: 20px;
  border: 1px solid #000;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const ButtonSignup = styled(Button)`
  width: 20%;
  background: #000;
  color: #fff;
  margin: auto;
  &:hover {
    background: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;
function App() {
  const registerValidationSchema = yup
    .object()
    .shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      userName: yup.string().required("User name is required"),
      email: yup
        .string()
        .email("this field must be an email")
        .required("Email is required")
        .trim(),
      password: yup
        .string()
        .min(8, "must be more than 8 characters")
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "passwords must match")
        .required(),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log("Data Printed");
    reset({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // useEffect(() => {
  //   onSubmit()
  // }, [])
  return (
    <div className="App">
      <BoxDiv sx={{ margin: "auto" }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem"
          }}
          variant="h3"
        >
          Sign Up Form
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormControl variant="standard">
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Controller
            sx={{

            }}
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.name || ""}
                  type="text"
                  id={"firstName"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.firstName && (
            <Alert severity="error">{errors.firstName.message}</Alert>
          )}

          <FormControl variant="standard">
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.name || ""}
                  type="text"
                  id={"lastName"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.lastName && (
            <Alert severity="error">{errors.lastName.message}</Alert>
          )}
          <FormControl variant="standard">
            <InputLabel htmlFor="userName">Username</InputLabel>
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.name || ""}
                  type="text"
                  id={"userName"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.userName && (
            <Alert severity="error">{errors.userName.message}</Alert>
          )}
          <FormControl variant="standard">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.email || ""}
                  id={"email"}
                  type="email"
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.email && (
            <Alert severity="error">{errors.email.message}</Alert>
          )}
          <FormControl variant="standard">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.password || ""}
                  type="password"
                  id={"password"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.password && (
            <Alert severity="error">{errors.password.message}</Alert>
          )}
          <FormControl variant="standard">
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.confirmPassword || ""}
                  type="password"
                  id={"confirmPassword"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.confirmPassword && (
            <Alert severity="error">{errors.confirmPassword.message}</Alert>
          )}
          <ButtonSignup type="submit">Submit</ButtonSignup>
        </Form>
      </BoxDiv>
    </div>
  );
}

export default App;
