// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onChange, onActive} = props
  const {displayText, tabId} = tabDetails
  const onSwitch = () => {
    onChange(tabId)
  }
  const hightlight = onActive ? 'spl-btn' : ''

  return (
    <li className="li">
      <button type="button" className={`btn ${hightlight}`} onClick={onSwitch}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
