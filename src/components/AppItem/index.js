// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <div className="app-container">
      <li className="li">
        <img src={imageUrl} className="app-logo" alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
