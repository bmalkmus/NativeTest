import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Test from './components/test';
import TestTable from './components/Table';
import employees from './employees.json';

function App() {
  const [employeeList, setEmployees] = useState(employees);
  return (
    <View>
      <Text>Where is my text?</Text>
      <Text>Simple Test a really long update test</Text>
      <Test />
      <TestTable employees={employeeList} setEmployees={setEmployees} />
    </View>
  );
}

export default App;
