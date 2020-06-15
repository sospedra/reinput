import React from "react"
import { Image } from "react-native"
import Reinput from "reinput"

const AsBasics = () => (
  <>
    <Reinput label="Cool by default input 👋" />
    <Reinput
      label="Easy align icons"
      icon={<Image source={require("../../assets/icon.png")} />}
    />
    <Reinput
      label="Add overlay icons"
      secureTextEntry
      iconOverlay={<Image source={require("../../assets/icon.png")} />}
    />
    <Reinput
      label="Redish"
      error="Something broken here 🙀 But do not worry. Reinput is here to save the day."
    />
    <Reinput
      label="Adjust any style"
      underlineDuration={1000}
      activeColor="#2E7D32"
    />
    <Reinput label="With defaultValues" defaultValue="🥕🥕🥕" />
    <Reinput
      label="And assistive text"
      placeholder="This is the native placeholder prop"
    />
  </>
)

export default AsBasics
