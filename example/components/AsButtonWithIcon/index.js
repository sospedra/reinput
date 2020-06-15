import React, { useState } from "react"
import { Image } from "react-native"
import { ReinputButton } from "reinput"

const AsButtonWithIcon = () => {
  const [value, setValue] = useState("")

  return (
    <ReinputButton
      iconOverlay={<Image source={require("../../assets/icon.png")} />}
      label="Button with an overlay icon"
      onPress={() => setValue(value ? "" : "Icons are life")}
      value={value}
    />
  )
}

export default AsButtonWithIcon
