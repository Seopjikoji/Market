import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import DrawerLayout from '../components/DrawerLayout';
import Header from '../components/Header';
import Product from '../components/Product';
import { favoritesItem } from '../dummy/dummy';

function FavoriteListHeader() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>찜한 상품</Text>
      </View>
      <View style={styles.headerBox}>
        <View>
          <Text style={styles.headerText}>로그인을 하시면 나만의</Text>
          <Text style={styles.headerText}>서랍을 만드실 수 있어요!</Text>
        </View>
        <View>
          <TouchableNativeFeedback onPress={() => {}}>
            <View style={styles.login}>
              <Text style={styles.loginText}>로그인</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
}

function FavoriteScreens({ openDrawer }) {
  return (
    <>
      <Header title={'찜'} openDrawer={openDrawer} />
      <FavoriteListHeader />
      <View style={styles.container}>
        <FlatList
          data={favoritesItem}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <Product
                storeName={item.storeName}
                discount={item.discount}
                uri={item.uri}
                quantity={item.quantity}
                price={item.price}
                explain={item.explain}
              />
            );
          }}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

function FavoriteScreen() {
  return (
    <>
      <DrawerLayout Component={FavoriteScreens} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'yellow',
  },
  headerContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 14,
  },
  login: {
    borderRadius: 4,
    borderColor: `#2196F3`,
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  loginText: {
    color: `#2196F3`,
  },
});

export default FavoriteScreen;
