import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    // Checks if String is empty or has only whitespaces
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* If entered string isn't valid the text will turn red, otherwise it will be black */}
        <label style = {{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style = {{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'cyan'}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
