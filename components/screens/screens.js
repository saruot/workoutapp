import React, {Component} from 'react'
import { Pressable, View, Text } from 'react-native';
import styles from '../../styles/styles';
export const HomeScreen = ({navigation}) => {
    return (
      <Pressable
        style={styles.pressable}
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }>
        <Text>Wataa</Text>
      </Pressable>
    );
  };
export function ProfileScreen({navigation, route}) {
  return(
    <View>
    <Text>'This is' {route.params.name} 's profile'</Text>
    <Pressable
    title='Go to test page'
    onPress={() => navigation.navigate('BoxTest')}
    >
      <Text> Press this bro</Text>
    </Pressable>
    </View>
    )
    
  };



  
  