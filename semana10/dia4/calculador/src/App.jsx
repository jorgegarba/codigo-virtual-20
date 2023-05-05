import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  const handleEmployee = ({ employeeName, discount, salary }) => {
    const newEmployee = {
      id: new Date().getTime().toString(),
      employeeName,
      discount,
      salary,
    };
    setEmployees([...employees, newEmployee]);
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <div className="addDiscount">
        <span className="title">Calculando Mis Descuentos</span>

        <EmployeeForm onAddEmployee={handleEmployee} />       
        
      </div>
      <div className="discounts">
        <EmployeeList
          setEmployees={setEmployees}
          employees={employees}
          onDeleteEmployee={handleDeleteEmployee}
        />
      </div>
    </div>
  );
}

export default App;
