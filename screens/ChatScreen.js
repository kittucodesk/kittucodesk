import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ChatScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
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
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('./image/Back1.png')}
            style={{
              marginLeft: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}></Image>
          <Image
            source={require('./image/Ellipse1.png')}
            style={{
              height: 60,
              width: 60,
              marginLeft: 10,
            }}></Image>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 16,
              fontColor: 'white',
              fontWeight: 500,
            }}>
            Entire Group
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./image/bi_search.png')}
            style={{paddingHorizontal: 1, marginRight: 20}}
          />
        </View>
      </View>

      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Text
              style={{
                backgroundColor: 'lightgray',
                padding: 10,
                borderRadius: 10,
              }}>
              Hello there!
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Text
              style={{
                backgroundColor: 'lightgray',
                padding: 10,
                borderRadius: 10,
              }}>
              Hi John, how are you doing?
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Text
              style={{
                backgroundColor: 'lightgray',
                padding: 10,
                borderRadius: 10,
              }}>
              I'm doing well, thanks for asking.
            </Text>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderTopWidth: 1,
            borderColor: '#fff',
            backgroundColor: 'white',
            //justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EDF2FE',
              width: '100%',
              borderRadius: 100,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./image/pin.png')} />

              <View>
                <TextInput
                  style={{
                    width: '100%',
                    marginLeft :10,
                    color:'#000'
                  }}
                  placeholder="Write a message."
                  placeholderTextColor="#848DA0"

                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'blue',
                height: 40,
                width: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={require('./image/Vector.png')}
                style={{color: 'white', flexDirection: 'row'}}></Image>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
