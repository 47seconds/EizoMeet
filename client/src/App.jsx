import { useEffect } from 'react';
import socketIO from 'socket.io-client'

function App() {
  const WS = 'http://localhost:3000';

  useEffect(() => {
    socketIO(WS);
  }, [])

  return (
    <>
      <div>
        <h1>Huehuehue</h1>
      </div>
    </>
  )
}

export default App