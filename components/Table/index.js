/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React  from 'react';
import {View, TouchableOpacity, Alert, Text, StyleSheet} from 'react-native';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
// import employees from '../../employees.json';

function TestTable({employees}) {
    const tableHead = ['ID', 'Alias', 'Name', 'Strength', 'Activate'];

    let Data = [];

    for (let i = 0; i < employees.length; i++){
      if (!employees[i].active){
        let temp = [employees[i].id, employees[i].hero, employees[i].name, employees[i].strength, employees[i].active];
        Data.push(temp);
      }
    }

    //  function alert(index) {
    //   // const alias = employees[index].hero;
    //   // Alert.alert(`${alias} , Agent ID ${index + 1} , has been activated on mission`);
    //   setCount(count + 1);
    // }

    const onPress = (index) => {
      const alias = employees[index].hero;
      console.log('click');
      Alert.alert(`${alias} , Agent ID ${index + 1}, has been activated on mission`);
    };


    const element = (data, index) => (
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <View>
          <Text style={styles.btnText}>Activate</Text>
        </View>
     </TouchableOpacity>
    );


  return (
    <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          {
            Data.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', height:800 },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6, fontSize:10 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1', height: 50 },
  btn: { width: 58, height: 30, backgroundColor: '#098987',  borderRadius: 2, zIndex:1 },
  btnText: { textAlign: 'center', color: '#fff' },
});

export default TestTable;
