import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
 
const HomeScreen = (screen) => {
  return (
    <View style={styles.container}>
      {/* Background Color */}
      <View style={styles.background}></View>
      {/* Image */} 
      <Image
        source={require('./image/projectimage.png')}  
        style={styles.image}
      />  
      {/* Heading */}
      <Text style={styles.heading}>Stay Connected With Us</Text>

      <Text style={styles.para}>Let's talk about more things to the people closest to you</Text>
      {/* Button */}
      <TouchableOpacity onPress={() => screen.navigation.navigate("Screen2")}>
        <View style={styles.buttoncontainer}>
          <Text style={styles.button}> Go with NCCP PRO</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    backgroundColor: '#4C82F6', 
    width: '100%',
    height: '100%',
  },
  image: {
    width: 514,
    height: 514,
    transform: [{ rotate: '-16.609deg' }],
    left: -60
  },
  
  heading: {
    width: '328',
    height: '118',
    lineHeight: 60,
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
    marginVertical: 20,
  },
  button: {
    title: "Go with NCCP PRO",
    color: '#4C74CC',
    fontsize: '30',
    fontstyle: 'normal',
    fontweight: '600',
    width: '381',
    height: '68',
    top: '770',
    left: '20',
  },
  buttoncontainer: {
    backgroundColor: '#FFF',
    width: 250,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  para: {
    width: 389,
    height: 48,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default HomeScreen;