import styles from './App.module.css'
import Display from './components/display';
import ButtonComponent from './components/button';
import { useState } from 'react';
function App(){
  let [initialval,changeval]=useState("")
  const Onbuttonclick=(buttonitem)=>{
   if(buttonitem==='C'){
    changeval(initialval="")
   }
   else if(buttonitem==='='){
    let result=eval(initialval)
     changeval(initialval=result)
   }
   else{
    let netInput=initialval+buttonitem
    changeval(initialval=netInput)
   }
  }
  return <div className={styles.calculator}>
   <Display dis={initialval} />
   <ButtonComponent Onbuttonclick={Onbuttonclick}/>
  </div>
}
export default App;