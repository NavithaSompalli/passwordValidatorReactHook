import styled from 'styled-components'

export const PasswordValidatorBgContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PasswordContentContainer = styled.div`
  background-color: #383a4e;
  height: 300px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PasswordHeading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
`
export const PasswordStatement = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #f8fafc;
`
export const PasswordInput = styled.input`
  height: 40px;
  padding: 10px;
  width: 350px;
  outline: none;
  border: none;
`
export const PasswordErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ef4444;
`
