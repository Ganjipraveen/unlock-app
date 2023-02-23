import {useState} from 'react'

import {
  MainContainer,
  DisplayContainer,
  Image,
  Text,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(false)
  const imageUrl = lock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const displayText = lock ? 'Your Device is Unlocked' : 'Your device is locked'
  const buttonText = lock ? 'Lock' : 'Unlock'
  const altText = lock ? 'unlock' : 'lock'

  const changeLockText = () => {
    setLock(prevLock => !prevLock)
  }
  return (
    <MainContainer>
      <DisplayContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{displayText}</Text>
      </DisplayContainer>
      <LockButton onClick={changeLockText}>{buttonText}</LockButton>
    </MainContainer>
  )
}
export default Unlock
