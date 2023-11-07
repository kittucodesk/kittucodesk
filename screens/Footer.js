import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';

const Footer = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'black',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <View
          style={{
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('./image/Homeimage.png')}/>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('./image/footer2image.png')} />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('./image/Group.png')} />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('./image/footer4image.png')} />
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('./image/footer5image.png')}></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Footer;
