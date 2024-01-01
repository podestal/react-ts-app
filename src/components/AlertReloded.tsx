interface Props {
    handleAlert: () => void
    message: string,
    alert: boolean,
}

const AlertReloded = ({ alert, handleAlert, message } : Props) => {

  return (
    <>
       {alert && 
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> {message}.
            <button onClick={handleAlert} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        }
        <button onClick={handleAlert} className="btn btn-primary">Click Me!</button>
    </>
  )
}

export default AlertReloded