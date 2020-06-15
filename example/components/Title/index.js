import React from "react"
import { Text, StyleSheet, View } from "react-native"

const Title = () => (
  <View style={styles.holder}>
    <Text style={styles.title}>Reinput common use-cases</Text>
  </View>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  holder: {
    height: 112,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
})

export default Title
