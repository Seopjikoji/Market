import React, { useCallback, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  DrawerLayoutAndroid,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Category, { CategoryDrawer } from './Category';

function DrawerLayout({ Component }) {
  const drawer = useRef(null);

  const openDrawer = useCallback(() => {
    drawer.current.openDrawer();
  }, []);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={Dimensions.get('window').width * 0.75}
      renderNavigationView={() => (
        <>
          <View style={styles.title}>
            <Text style={{ fontSize: 18 }}>카테고리</Text>
          </View>
          <Category Component={CategoryDrawer} />
        </>
      )}
      keyboardDismissMode={'on-drag'}>
      <SafeAreaView>
        {Component ? <Component openDrawer={openDrawer} /> : <></>}
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default DrawerLayout;
