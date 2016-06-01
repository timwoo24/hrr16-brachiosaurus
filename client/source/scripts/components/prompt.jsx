import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { teal500 } from 'material-ui/styles/colors';
import QuestionGender from './QuestionGender.jsx';
import QuestionAge from './QuestionAge.jsx';
import QuestionGoal from './QuestionGoal.jsx';

const stylePaper = {
  height: 500,
  width: 500,
  margin: '30',
  position: 'absolute',
  left: '25%',
  textAlign: 'center',
  display: 'inline-block',
  color: teal500,
};


class PromptBox extends React.Component {
  render() {
    return (
      <div>
        <Paper style={stylePaper} zDepth={3}>
          <div>
            <QuestionGender />
            <QuestionAge />
            <QuestionGoal />
          </div>
        </Paper>
      </div>
    );
  }
}

export default PromptBox;
