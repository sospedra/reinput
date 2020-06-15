import React, { useState } from "react"
import { ReinputButton } from "reinput"

const AsButton = () => {
  const [value, setValue] = useState("")

  return (
    <ReinputButton
      label="This is not an Input but a Button"
      value={value}
      onPress={() => setValue(value ? "" : "A controlled value")}
    />
  )
}

export default AsButton
