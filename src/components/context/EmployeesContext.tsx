import React, { useState } from "react";
import { Employee } from "../../models/Employee";

const EmployeesContext = React.createContext({
  employees: [],
  addEmployee: (employee: Employee) => {}
})

const EmployeeContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = ( employee : Employee) => {
    setEmployees([...employees, employee]);
  }

  const deleteEmployee = ( employeeId : string ) => {
    setEmployees([...employees].filter(employee => employee.id !== employeeId));
  }

  return (
    <EmployeesContext.Provider value={{
      employees, addEmployee, deleteEmployee
    }}>
      {children}
    </EmployeesContext.Provider>
  );
}

export default EmployeesContext;
export { EmployeeContextProvider };