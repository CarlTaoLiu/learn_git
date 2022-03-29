import { useCallback, useEffect, useState } from 'react'


function App() {
  const [counter,setCounter] = useState(0)
  const [name,setName] = useState('carl')
  const handlePlus = useCallback(()=>{
      console.log(counter)
      setCounter(counter+1)
    },[counter]
    
  )
  const changeName = useCallback(()=>{
    setName(Math.random().toString())
    
  },[])
  useEffect(()=>{
    document.title = `你已经点击${counter}次了`
  },[counter]
  )
  useEffect(()=>{
    if(counter>0){setName(Math.random().toString())}
    
  },[counter])
  return(
    <div>
      {counter}
      <button onClick={handlePlus}>
        下一页
      </button>
      {name}
      <button onClick={changeName}>
        页面{counter}
      </button>
    </div>
  )

}

export default App;
