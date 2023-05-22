import { EmployeeContextProvider } from "./src/components/context/EmployeesContext";
import { Routes } from "./src/routes";


export default function App() {
  return (
    <EmployeeContextProvider>
      <Routes />
    </EmployeeContextProvider>
  );
}
