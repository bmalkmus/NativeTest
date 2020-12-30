import React, {useState} from 'react';
import {View} from 'react-native';
// import Test from './components/test';
import MapView from 'react-native-maps';
// import TestTable from './components/Table';
// import employees from './employees.json';
// import ListAvatar from './components/ListItems';

function App() {
  // const [employeeList, setEmployees] = useState(employees);
  return (
    // <View
    //   // eslint-disable-next-line react-native/no-inline-styles
    //   style={{
    //     height: 400,
    //     width: 400,
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    //   }}>
    //   {/* <Test /> */}
    //   {/* <TestTable employees={employeeList} setEmployees={setEmployees} /> */}
    //   {/* <ListAvatar employees={employeeList} /> */}
    //   <MapView
    //     provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    //     // eslint-disable-next-line react-native/no-inline-styles
    //     style={{flex: 1}}
    //     region={{
    //       latitude: 37.78825,
    //       longitude: -122.4324,
    //       latitudeDelta: 0.015,
    //       longitudeDelta: 0.0121,
    //     }}
    //   />
    // </View>
    <MapView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    />
  );
}

export default App;
