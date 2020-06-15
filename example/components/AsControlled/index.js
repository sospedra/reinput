import React, { useState } from "react"
import Reinput from "reinput"

const AsControlled = () => {
  const [value, setValue] = useState("")

  return (
    <Reinput
      value={value}
      label="Control value from outside the Reinput component"
      onChangeText={(x) => setValue(x)}
    />
  )
}

export default AsControlled
