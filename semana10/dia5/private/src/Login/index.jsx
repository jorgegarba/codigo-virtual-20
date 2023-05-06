import React from "react";
import { UserContext } from "../Context/UserContext";
import { useContext, useState } from "react";
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
import Swal from "sweetalert2";

const Login = () => {
  const { user, storeUser } = useContext(UserContext);

  const [userData, setUseData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUseData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickLogin = () => {
    if (userData.email === "pepe@gmail.com" && userData.password === "123456") {
      const user = {
        nombre: "pepe",
        apellido: "zapata",
        edad: 30,
      };
      storeUser(user);
    } else {
      Swal.fire({
        icon: "error",
        title: "Opps",
        text: "noe s el usuario correcto",
      });
    }
  };

  return (
    <div>
      <Grid container alignItems="space-around">
        <Grid item md={6}>
          <img src="https://i.postimg.cc/Hk6Xy0ZP/ekipo.jpg" alt="" />
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardContent>
              <h5>Welcom g20</h5>
              <h3>Codigo Tecsup</h3>
              <p>Aprendiendo a usar el private</p>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item md={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleClickLogin}
                  >
                    Inicia Sesion
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
