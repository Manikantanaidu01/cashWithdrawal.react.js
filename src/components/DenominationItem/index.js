// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomation = () => {
    updateBalance(value)
  }
  return (
    <li className="denomation-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomation}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
