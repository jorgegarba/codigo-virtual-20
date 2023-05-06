import React from "react";
import { UserContext } from "../Context/UserContext";
import { useContext, useState } from "react";
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";

const Login = () => {
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
                  <TextField label="Email" name="email" fullWidth />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                  />
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" fullWidth size="large">
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
