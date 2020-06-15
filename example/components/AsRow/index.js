import React from "react"
import { View, StyleSheet } from "react-native"
import Reinput from "reinput"

const AsRow = () => (
  <View style={styles.row}>
    <View style={styles.col}>
      <Reinput label="col1" />
    </View>
    <View style={styles.col}>
      <Reinput label="col2" />
    </View>
  </View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  col: {
    flex: 2,
    marginHorizontal: 4,
  },
})

export default AsRow
