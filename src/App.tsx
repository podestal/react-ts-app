import { useState } from "react"
import AlertReloded from "./components/AlertReloded"

const App = () => {

  const [alert, setAlert] = useState(false)

  return (
    <>
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {/* <Button onClick={() => console.log("Clicked")}>
        My Button
      </Button> */}
      <AlertReloded 
        handleAlert={() => setAlert(prev => !prev)}
        alert={alert}
        message="This is an alert message"
      />
    </>
  )
}

export default App
