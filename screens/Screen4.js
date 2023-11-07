import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  
  StyleSheet,
  
  Image,
  TouchableOpacity,
} from 'react-native';

import Footer from './Footer';

const Screen4 = () => {
  return (
    <View style={styles.background}>
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
          <TouchableOpacity style={{flex: 1}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#4C82F6'}}>Individual</Text>
            </View>
          </TouchableOpacity>
        </View>
       

        <View style={{backgroundColor: 'white', flex: 1}}>
          <Groupitems />
          <Footer />
        </View>
      </View>
    </View>
  );
};

const Groupitems = () => {
 
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image source={require('./image/Ellipse1.png')}></Image>
        </View>
        <View style={{flex: 3, alighItem: 'centre'}}>
          <Text style={{color: 'black'}}>Entire Group</Text>
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
          <Image source={require('./image/Ellipse2.png')}></Image>
        </View>
        <View style={{flex: 3, alighItem: 'centre'}}>
          <Text style={{color: 'black'}}>Music Team</Text>
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
          <Image source={require('./image/Ellipse3.png')}></Image>
        </View>
        <View style={{flex: 3, alighItem: 'centre'}}>
          <Text style={{color: 'black'}}>Women's samaj</Text>
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
          <Image source={require('./image/Ellipse4.png')}></Image>
        </View>
        <View style={{flex: 3, alighItem: 'centre'}}>
          <Text style={{color: 'black'}}>Choir Team</Text>
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
        <View style={{flex: 3, alighItem: 'centre'}}>
          <Text style={{color: 'black'}}>Sumith Sharma</Text>
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

  background: {
    flex: 1,
    backgroundColor: '#4C82F6',
    padding: 1,
    width: '100%',
    height: '100%',
  },
});
export default Screen4;
