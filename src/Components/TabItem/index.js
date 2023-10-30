import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const btnClass = isActive ? 'tab-button highlight-text' : 'tab-button'

  const onClickChange = () => {
    setActiveTabId(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onClickChange} className={`${btnClass}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
