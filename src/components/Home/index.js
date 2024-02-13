import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'
import {
  BgContainer,
  Left,
  SubCard,
  Heading,
  UserInputsList,
  Right,
  CounterHeading,
  AddInputContainer,
  Input,
  AddInputButton,
  EmptyImg,
} from './styledComponents'

class Home extends Component {
  state = {userInput: '', userInputList: []}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }

    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputList} = this.state
    return userInputList.length === 0 ? (
      <EmptyImg
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputList.map(each => (
        <UserInput key={each.id} userInputDetails={each} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <Left>
          <SubCard>
            <Heading>
              Count the characters like a <br />
              Boss...
            </Heading>
          </SubCard>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </Left>
        <Right>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the characters here"
            />
            <AddInputButton>Add</AddInputButton>
          </AddInputContainer>
        </Right>
      </BgContainer>
    )
  }
}

export default Home
