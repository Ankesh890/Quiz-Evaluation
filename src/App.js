
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import QuizForm from './QuizForm';
import Quiz from './Quiz';

const App = () => {
  const history = useHistory ();

  const handleFormSubmit = (data) => {
    console.log('User Data:', data);
    history.push('/quiz');
  };

   return (
    <Router>
      <Switch>
        <Route exact path="/">
        <QuizForm onSubmit={handleFormSubmit} />
        </Route>
        <Route path="/quiz">
         <Quiz />
        </Route>
      </Switch>
    </Router>
   );
};

 export default App;






















