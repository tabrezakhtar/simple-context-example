import { useContext } from 'react';
import SimpleContext from './SimpleContext';

function SomeComponent() {
  const {count, setCount} = useContext(SimpleContext)

    function reset() {
        setCount(0);
    }

  return (
    <>
        hello - {count}
        <br/>
        <button onClick={reset}>reset</button>
    </>
  )
}

export default SomeComponent
