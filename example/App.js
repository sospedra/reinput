import React from "react"
import { StyleSheet, ScrollView, SafeAreaView } from "react-native"
import Title from "./components/Title"
import AsBasics from "./components/AsBasics"
import AsButton from "./components/AsButton"
import AsButtonWithIcon from "./components/AsButtonWithIcon"
import AsControlled from "./components/AsControlled"
import AsRow from "./components/AsRow"

export default function App() {
  return (
    <SafeAreaView style={styles.expand}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.container}
      >
        <Title />
        <AsBasics />
        <AsButton />
        <AsButtonWithIcon />
        <AsControlled />
        <AsRow />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  expand: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: "#EDF2F7",
    paddingHorizontal: 16,
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
  },
})
