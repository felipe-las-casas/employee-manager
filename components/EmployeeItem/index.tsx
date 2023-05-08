import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { Styles } from "./styles";
import { Employee } from "../../models/Employee";
import EmployeesContext from "../../components/context/EmployeesContext";

export const EmployeeItem = ({ employee }: { employee: Employee }) => {

  const { deleteEmployee } = useContext(EmployeesContext);
  return (
    <View style={Styles.employeeItem}>
      <Text style={Styles.employeeName}>Nome: {employee.name}</Text>
      <Text style={Styles.employeeOccupation}>
        Função: {employee.occupation}
      </Text>
      <View style={Styles.departmentAndSalaryContainer}>
        <Text style={Styles.employeeDepartment}>
          Setor: {employee.department}
        </Text>
        <Text style={Styles.employeeSalary}>Salário: {employee.salary}</Text>
      </View>
      <Button
        title="Deletar"
        onPress={() => deleteEmployee(employee.id)}
      />
    </View>
  );
};
