import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const step1 = () => {
  return (
    <View>
      <Link href="./step2">
      <Text>Go to step 2</Text>
      </Link>

    </View>
  )
}

export default step1