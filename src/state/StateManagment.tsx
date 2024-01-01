import { useState } from "react"
import { MouseEvent } from "react"

const StateManagment = () => {

    // const [oerson, setPerson] = useState({
    //     firstName: '',
    //     lastName: ''
    // })
    // const [isLoading, setLoading] = useState(false)

    const [bugs, setBugs] = useState([
        {id: 1, title: "Bug 1", fixed: false},
        {id: 2, title: "Bug 2", fixed: false},
    ])

    const handleFix = (e: MouseEvent) =>  {
        setBugs(bugs.map(bug => e.target.name == bug.title ? {...bug, fixed: true} : bug))
    }

  return (
    <div>
        {bugs.map(bug => (
            <div className="card-body" key={bug.id}>
                <p>Title: {bug.title}</p>
                <p>{bug.fixed && "Fixed"}</p>
                <button name={bug.title} onClick={handleFix} className="btn btn-primary">Fix it</button>
            </div>
        ))}
    </div>
  )
}

export default StateManagment