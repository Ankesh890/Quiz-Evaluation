import React, { useState } from 'react';

const QuizForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handlesubmit = (e) => {
     e.preventDefault();
     onSubmit({ name,email});
};

return (
  <><form onSubmit={handlesubmit}>
        <div>
            <label>
                Name:
                <Input
                    type="text"
                    value={name}
                    onchange={(e) => setName(e.target.value)}
                    required />
            </label>
        </div>
        <label>
            Email:
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
        </label>
    </div><button type="submit">start Quiz</button></>
           </form>
   );
 };

 export default QuizForm;