import { Fragment } from "react"

const InputNumber = (props) => {
    const changeValue = (e) => {
        props.changeValue(e.target.value)
    }

    return (
        <Fragment>
            <input type="number" className="form-group__input-number" value={props.value} onChange={(e) => changeValue(e)}/>
        </Fragment>
    )
}

export default InputNumber