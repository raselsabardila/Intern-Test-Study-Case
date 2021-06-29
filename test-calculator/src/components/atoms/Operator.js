import { Fragment } from "react"

const Operator = (props) => {
    const changeValue = () => {
        props.changeValue(props.value)
    }

    return (
        <Fragment>
            <div className="operator-group__operator" onClick={() => changeValue()}>
                {props.value}
            </div>
        </Fragment>
    )
}

export default Operator