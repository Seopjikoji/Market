import React from 'react';
import { Text, FlatList } from 'react-native';
import Category, { CategoryHorizontal } from '../components/Category';
import DrawerLayout from '../components/DrawerLayout';
import Header from '../components/Header';
import { HomeHeader } from '../components/Header';
import Product from '../components/Product';
import { dummy } from '../dummy/dummy';

const numColumns = 2;

const MainScreens = ({ openDrawer }) => {
  return (
    <>
      <Header Component={HomeHeader} openDrawer={openDrawer} />
      <Category Component={CategoryHorizontal} />
      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <Product
            storeName={item.storeName}
            discount={item.discount}
            uri={item.uri}
            quantity={item.quantity}
            price={item.price}
            explain={item.explain}
            key={item.id}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            회원님을 위한 추천 상품
          </Text>
        )}
        ListHeaderComponentStyle={{ marginVertical: 20, paddingLeft: 10 }}
        windowSize={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    </>
  );
};

const MainScreen = () => {
  return (
    <>
      <DrawerLayout Component={MainScreens} />
    </>
  );
};

export default MainScreen;
