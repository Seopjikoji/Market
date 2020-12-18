import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  DrawerLayoutAndroid,
  Dimensions,
} from 'react-native';

function Temp() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => {
    const { container, navigationContainer } = style;
    return (
      <View style={[container, navigationContainer]}>
        <Text>I'm in the Drawer!</Text>
        <Button
          title="Close drawer"
          onPress={() => drawer.current.closeDrawer()}
        />
      </View>
    );
  };

  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
  });

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={100}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Button title="drawer" onPress={() => drawer.current.openDrawer()} />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 40,
  },
});

export default Temp;
