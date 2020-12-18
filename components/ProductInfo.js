import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { priceComma } from '../util/price';

function ProductInfo({ route }) {
  const { info } = route.params;
  const { uri, discount, price, storeName, explain, quantity } = info;

  console.log(uri);
  return (
    <View>
      <Image source={{ uri }} style={styles.image} />
      <Text></Text>
      <View style={styles.princeInfo}>
        <Text>{discount}</Text>
        <Text>{priceComma(price)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  priceInfo: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default ProductInfo;
