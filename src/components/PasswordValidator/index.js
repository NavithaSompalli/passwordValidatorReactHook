import {useState} from 'react'

import {
  PasswordValidatorBgContainer,
  PasswordContentContainer,
  PasswordHeading,
  PasswordStatement,
  PasswordInput,
  PasswordErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <PasswordValidatorBgContainer>
      <PasswordContentContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <PasswordStatement>
          Check how strong and secure is your password
        </PasswordStatement>
        <PasswordInput
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {password.length < 8 && (
          <PasswordErrorMessage>
            Your password must be at least 8 characters
          </PasswordErrorMessage>
        )}
      </PasswordContentContainer>
    </PasswordValidatorBgContainer>
  )
}

export default PasswordValidator
