/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

function TestTable() {
    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd'],
      ];

  return (
    <View>
      <Table>
        <Row data={tableHead} />
        <Rows data={tableData}/>
      </Table>
    </View>
  );
}

export default TestTable;
