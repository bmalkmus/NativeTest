import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Test from './components/test';
// import TestTable from './components/Table';
import employees from './employees.json';
import ListAvatar from './components/ListItems';

function App() {
  const [employeeList, setEmployees] = useState(employees);
  return (
    <View>
      <Text> Where is my list????</Text>
      <Text>Simple Test a really long update test</Text>
      <Test />
      {/* <TestTable employees={employeeList} setEmployees={setEmployees} /> */}
      <ListAvatar employees={employeeList} />
    </View>
  );
}

export default App;
