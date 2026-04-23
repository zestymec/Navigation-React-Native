import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import { useNavigation } from '@react-navigation/native'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({ route }: DetailsProps) => {

  const { productId } = route.params

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button
        title='Go to Home'

        onPress={() => navigation.goBack()}
      />
      <Button
        title='Go back to first scren'


        onPress={() => navigation.popToTop()}
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
export default Details