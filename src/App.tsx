import { useState } from "react"
import Form from "./components/Form"

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
      {/* <AlertReloded 
        handleAlert={() => setAlert(prev => !prev)}
        alert={alert}
        message="This is an alert message"
      /> */}
      {/* <StateManagment /> */}
      <Form />
    </>
  )
}

export default App
