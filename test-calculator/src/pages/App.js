import { Fragment, useState, useEffect } from "react"
import InputNumber from "../components/atoms/InputNumber"
import InputCheck from "../components/atoms/InputCheck"
import Operator from "../components/atoms/Operator"

const App = () => {
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [input3, setInput3] = useState(0)
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(true)
  const [check3, setCheck3] = useState(true)
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState(null)

  useEffect(() => {
    if(operator) {
      if(!check1 && !check2 && !check3) {
        setResult("NaN")
      } else {
        if(operator === "*" || operator === "/") {
          setResult(eval(`${(check1) ? input1 : 1}${operator}${(check2) ? input2 : 1}${operator}${(check3) ? input3 : 1}`))
        } else {
          setResult(eval(`${(check1) ? input1 : 0}${operator}${(check2) ? input2 : 0}${operator}${(check3) ? input3 : 0}`))
        }
      }
    }
  }, [operator])

  return (
    <Fragment>
      <div className="container">
        <div className="form-group">
          <InputNumber changeValue={(value) => setInput1(value)} value={input1}/>
          <InputCheck changeValue={(value) => setCheck1(value)} value={check1}/>
        </div>
        <div className="form-group">
          <InputNumber changeValue={(value) => setInput2(value)} value={input2}/>
          <InputCheck changeValue={(value) => setCheck2(value)} value={check2}/>
        </div>
        <div className="form-group">
          <InputNumber changeValue={(value) => setInput3(value)} value={input3}/>
          <InputCheck changeValue={(value) => setCheck3(value)} value={check3}/>
        </div>
        <div className="operator-group">
          <Operator changeValue={(value) => setOperator(value)} value="+"/>
          <Operator changeValue={(value) => setOperator(value)} value="-"/>
          <Operator changeValue={(value) => setOperator(value)} value="/"/>
          <Operator changeValue={(value) => setOperator(value)} value="*"/>
        </div>
        <div class="line"></div>
        <div class="result">
          <h3>Result :</h3>
          <h3>{result}</h3>
        </div>
      </div>
    </Fragment>
  )
}

export default App