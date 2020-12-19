import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableNativeFeedback,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

const Info = [
  {
    headphone: '고객센터',
  },
  { notice: '공지사항' },
  { perInfo: '개인정보 수집 및 이용' },
  { term: '서비스 이용약관' },
  { code: '오픈소스 라이선스' },
  {
    version: '버전',
  },
];

function renderItems(item) {
  return (
    <>
      <TouchableNativeFeedback onPress={() => {}}>
        <View style={styles.infoItem}>
          <Text>{Object.keys(item)}</Text>
          <Text style={styles.itemItemText}>{Object.values(item)}</Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
}

const socialName = [
  require(`../assets/facebook.png`),
  require(`../assets/kakao.png`),
  require(`../assets/google.png`),
  require(`../assets/naver.png`),
];

function Information() {
  return (
    <>
      <View style={styles.social}>
        <View style={styles.socialContainer}>
          {socialName.map((element, index) => (
            <TouchableHighlight
              onPress={() => {}}
              key={index.toString()}
              style={styles.socialContainer}>
              <Image style={styles.socialImage} source={element} />
            </TouchableHighlight>
          ))}
        </View>
      </View>
      <FlatList
        data={Info}
        renderItem={({ item }) => renderItems(item)}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <Text style={styles.infoHeaderText}>정보</Text>
        )}
        ListHeaderComponentStyle={styles.infoHeaderView}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  infoHeaderView: {
    paddingVertical: 10,
  },
  infoHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoItem: {
    flexDirection: 'row',
    paddingVertical: 4,
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  infoItemText: {
    fontSize: 18,
  },
  social: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  socialImage: {
    width: Dimensions.get('window').width * 0.5,
    height: (Dimensions.get('window').width * 0.5 * 91) / 493,
  },
  socialContainer: {
    marginVertical: 5,
  },
});

export default Information;
