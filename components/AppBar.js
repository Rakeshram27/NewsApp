import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Content title="Home" />
    </Appbar.Header>
  );
};
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#90ee90',
    marginTop:9,
  }
})

export default Header;