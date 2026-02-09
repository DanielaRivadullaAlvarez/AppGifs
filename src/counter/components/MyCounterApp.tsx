
import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {
  const{ counter, handleAdd, handlesubtract, handleReset } = useCounter();
  
    return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>counter: {counter}</h1>
        <div style={{display:'flex', gap:'10px', marginTop:'25px'}}>
            <button onClick={handleAdd} style={{borderRadius:'10px', padding:'15px'}}>+1</button>
            <button onClick={handlesubtract} style={{borderRadius:'10px', padding:'15px'}}>-1</button>
            <button onClick={handleReset} style={{borderRadius:'10px', padding:'15px'}}>Reset</button>
        </div>

    </div>
  )
}
