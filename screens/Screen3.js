import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Footer from './Footer';

const Screen3 = screen => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#4C82F6',
        padding: 1,
      }}>
      <View
        style={{
          height: 80,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: 400,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            Notes
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./image/bi_search.png')}
            style={{paddingHorizontal: 1}}
          />
          <Image source={require('./image/Vector.png')} style={{}}></Image>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#DEE6F9',
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View style={{flexDirection: 'row', paddingVertical: 20}}>
          <TouchableOpacity style={{flex: 1}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#4C82F6', textDecorationLine: 'underline'}}>
                Groups
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#4C82F6'}}>Matrimony</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => screen.navigation.navigate('Screen4')}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#4C82F6'}}>Individual</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: 'white', flex: 1}}>
          <Groupitems navigation={screen.navigation} />
          <Footer />
        </View>
      </View>
    </View>
  );
};

const Groupitems = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image source={require('./image/Ellipse5.png')}></Image>
        </View>
        <View style={{flex: 3, alighItem: 'centre'}}>
          <Text style={{color: 'black'}}>vinod Kumar</Text>
          <Text style={{color: '#848DA0'}}>
            Vinod Kumar: about Lorem Ipsum,{' '}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: 'black'}}>11:20</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image source={require('./image/Ellipse6.png')}></Image>
        </View>
        <TouchableOpacity
          style={{flex: 3, alignItem: 'centre'}}
          onPress={() => props.navigation.navigate('ChatScreen1')}>
          <Text style={{color: 'black'}}>Sumitha Sharma</Text>
          <Text style={{color: '#848DA0'}}>
            Vinod Kumar: about Lorem Ipsum,{' '}
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={{color: 'black'}}>11:20</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image source={require('./image/Ellipse7.png')}></Image>
        </View>
        <View style={{flex: 3, alighItem: 'centre'}}>
          <Text style={{color: 'black'}}>Stiphen</Text>
          <Text style={{color: '#848DA0'}}>
            Vinod Kumar: about Lorem Ipsum,{' '}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: 'black'}}>11:20</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image source={require('./image/Ellipse8.png')}></Image>
        </View>
        <View style={{flex: 3, alighItem: 'centre'}}>
          <Text style={{color: 'black'}}>Anup jalani</Text>
          <Text style={{color: '#848DA0'}}>
            Vinod Kumar: about Lorem Ipsum,{' '}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: 'black'}}>11:20</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Screen3;
