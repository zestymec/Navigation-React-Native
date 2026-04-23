import React, { Component } from 'react'
import { Text, View , StyleSheet , Button } from 'react-native'

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'


type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>


const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title='Go to details'
      onPress={() => navigation.push('Details', {
        productId: "86"
      })}

      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})

export default Home