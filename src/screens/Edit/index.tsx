import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Styles } from "./styles";
import { Employee } from "../../models/Employee";
import { EmployeeItem } from "../../components/EmployeeItem";
import EmployeesContext from "../../components/context/EmployeesContext";

export const Edit = ({ navigation }: any) => {
  const { employees } = useContext(EmployeesContext);
  const { addEmployee } = useContext(EmployeesContext);
  

  //const [employees, setEmployees] = useState<Employee[]>([]);
  const [name, setName] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const formatValue = (val: string): string => {
    let num = val.replace(/\D/g, "");
    num = (Number(num) / 100).toFixed(2);
    return `R$ ${num.replace(".", ",")}`;
  };

  const newEmployee: Employee = { id: String(Date.now()), name, occupation, department, salary };

  
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Editar funcionário</Text>
      <View style={Styles.form}>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Digite o nome"
            value={name}
            autoCapitalize="words"
            onChangeText={setName}
            clearButtonMode="while-editing"
          />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Digite a função"
            value={occupation}
            autoCapitalize="words"
            onChangeText={setOccupation}
            clearButtonMode="while-editing"
          />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Digite o setor"
            value={department}
            onChangeText={setDepartment}
            clearButtonMode="while-editing"
          />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="R$ 0,00"
            keyboardType="numeric"
            value={salary}
            onChangeText={(value) => setSalary(formatValue(value))}
          />
        </View>
        <TouchableOpacity style={[Styles.button]} onPress={() => addEmployee(newEmployee)}>
          <Text style={Styles.buttonText}
          >Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
