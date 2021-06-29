import { Fragment } from "react"

const InputCheck = (props) => {
    const changeValue = (e) => {
        props.changeValue(e.target.checked)
    }

    return (
        <Fragment>
            <input type="checkbox" onChange={(e) => changeValue(e)} checked={props.value}/>
        </Fragment>
    )
}

export default InputCheck