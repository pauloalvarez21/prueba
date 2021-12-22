/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Dimensions,
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';

 import AutoHeightImage from 'react-native-auto-height-image';

 const {width} = Dimensions.get('window');

 import Card from '../components/Card';
 
 const DetailView = ({ route }) => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   const { name, image, origin, status, species, gender, created } = route.params
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
             <Card>
            <AutoHeightImage
                        width={width - 20}
                        source={{uri: image}}
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.space}>
                Origin: <Text style={styles.textColor}>{origin.name}</Text>
            </Text>
            <Text style={styles.space}>
                Status: <Text style={styles.textColor}>{status}</Text>
            </Text>
            <Text style={styles.space}>
                Species: <Text style={styles.textColor}>{species}</Text>
            </Text>
            <Text style={styles.space}>
                Gender: <Text style={styles.textColor}>{gender}</Text>
            </Text>
            <Text style={styles.space}>
                Created: <Text style={styles.textColor}>{created}</Text>
            </Text>
        </Card>
          
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
 });
 
 export default DetailView;