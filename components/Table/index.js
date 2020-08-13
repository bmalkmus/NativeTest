/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import employees from '../../employees.json';

function TestTable() {
    const tableHead = ['ID', 'Alias', 'Name', 'Strength'];
    const tableData = employees;
    let Data = []
    for (let i = 0; i < employees.length; i++){
      let temp = [employees[i].id, employees[i].hero, employees[i].name, employees[i].strength];
      Data.push(temp);
    }

  return (
    <View>
      <Table>
        <Row data={tableHead} />
        <Rows data={Data}/>
      </Table>
    </View>
  );
}

export default TestTable;
