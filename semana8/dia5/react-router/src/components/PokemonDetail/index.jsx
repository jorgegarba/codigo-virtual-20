import React from "react";
import { Button, Dialog, DialogContent, Grid } from "@mui/material";
import { useState } from "react";

const PokemonDetail = () => {
  const [abrir, setAbrir] = useState(false);

  const handleOpenDialog = () => {
    setAbrir(!abrir);

  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained">ver detalle</Button>
      <Dialog
        fullWidth={"md"}
        maxWidth={"md"}
        open={abrir}
        onClose={handleOpenDialog}
      >
        <DialogContent>
            <h2>modal de prueba</h2>
        </DialogContent>
        <Button onClick={handleOpenDialog}> Cerrar</Button>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
