import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('http://localhost:3001/rLogin').then(res => {
      console.log('login response: ', res)
    })
  }, [])

  return (
    <div>
      hello
    </div>
  );
}

export default App;
