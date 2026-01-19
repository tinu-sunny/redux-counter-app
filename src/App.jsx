import { Button, Navbar, TextInput } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/slice";

function App() {
 const dispatch = useDispatch()
  const {count} = useSelector((state)=>state.counter)
  console.log(count);
  


  return (
  <>
 <div className="h-[100vh] w-full flex justify-center items-center bg-black flex-col gap-10">
    <div className="flex justify-center flex-col gap-4  shadow-2xl shadow-amber-300  rounded-4xl bg-white  border-8 border-blue-500   items-center w-100 h-100">
      <h1 className="text-4xl font-bold text-black">
        Couter App
      </h1>
  
      <div className="flex justify-center items-center flex-col gap-4">
        <div>
          <p className="font-bold text-4xl text-center text-black">{count}</p>
        </div>
        <div className="text-cente flex gap-4 text-black">
          <Button color={'green'} onClick={()=>dispatch(increment())}>+</Button>
          <Button color={'red'} onClick={()=>dispatch(reset())}>Reset</Button>
          <Button color={'yellow'} onClick={()=>dispatch(decrement())}>-</Button>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center mt-5 w-full">
      <TextInput type="text" placeholder="enter a number" className="w-80"></TextInput>
      <Button>Add</Button>
    </div>
 </div>
  
  </>
  );
}



export default App;
