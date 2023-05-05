import React from "react";
import { useState } from "react";
import { Input } from "@mui/material";

const EmployeeForm = ({onAddEmployee}) => {
  const [employeeName, setEmployeeName] = useState("");
  const [discount, setDiscount] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!employeeName || !discount || !salary) {
      alert("ingresa los datos");
      return;
    }

    onAddEmployee({ employeeName, discount, salary });
    setEmployeeName("");
    setDiscount("");
    setSalary("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre de Empleado</label>
      <Input type="text" placeholder="ingrese el nolmbre de empleado" 
       variant="outlined"
        id="employeName" 
        value={employeeName}
         onChange={(event)=>setEmployeeName(event.target.value)}/>
      <label>Descuento</label>
      <Input type="number" placeholder="ingrese el descuento" 
       variant="outlined"
        id="discount" 
        value={discount}
         onChange={(event)=>setDiscount(event.target.value)}/>
         <label >Salario</label>
         <Input type="number" placeholder="ingrese el Salario" 
       variant="outlined"
        id="salary" 
        value={salary}
         onChange={(event)=>setSalary(event.target.value)}/>

         <button type="submit">Agregar Empleado</button>

    </form>
  );
};

export default EmployeeForm;
