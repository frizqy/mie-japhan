import { useState, useEffect } from 'react'
import ramen from './assets/ramen1.png'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const valueId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () =>{
      clearInterval(valueId);
    }
  }, []);

  function formatTime(){
    let hour = time.getHours();
    const minute = time.getMinutes();
    const meridiem = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return `${padZero(hour)}:${padZero(minute)} ${meridiem}`; 
  }

  function padZero(number: number){
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
    <div className='w-full h-screen bg-(--beige) flex justify-center items-center font-(family-name:--font-monomaniac-one)'>
      {/*site-container*/}
      <div className='w-[90%] flex flex-col h-auto'>
        {/*header*/}
        <div className='flex justify-between p-[50px] items-center text-center text-[30px] w-full h-[20vh] m-1 font-(family-name:--font-monomaniac-one) text-(--ylnmn-blue) border-1 border-solid border-(--ylnmn-blue)'>
          <a href=""><p>Mie Japhan</p></a>
          <span>{formatTime()}</span>
        </div>
        {/*menu-content*/}
        <div className='w-[100%] h-auto m-1'>

          {/*menu*/}
          <div className='flex flex-col gap-10 justify-center p-[20px] text-right text-[20px] text-(--beer) float-left w-[30%] h-[60vh] border-1 border-solid border-(--ylnmn-blue)'>
            <ul>
                <li><a href="">Ramen</a></li>
                <li><a href="">Udon</a></li>
                <li><a href="">Katsu</a></li>
                <li><a href="">Sushi</a></li>
            </ul>
            <ul className='text-(--ylnmn-blue)'>
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
          </div>

          {/*content*/}
          <div className='p-[10px] float-right w-[69%] h-[60vh] border-1 border-solid border-(--ylnmn-blue)'>
            <div className='w-[100%] h-[80%] flex justify-center items-center'>
              <div className='size-[100px] translate-x-[70px] -translate-y-[60px] rounded-full bg-(--ylnmn-blue)'></div>
              <img className='absolute w-[300px] drop-shadow-xl/25' src={ramen} alt="" />
            </div>
            <div className='p-[5px] overflow-hidden w-[100%] h-[20%] border-1 border-solid border-(--ylnmn-blue) text-(--ylnmn-blue)'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nobis, sit, laudantium accusamus iusto error pariatur beatae quam eaque ducimus sunt officiis eos asperiores illo itaque, rerum nisi nemo. Quidem.</p>
            </div>
          </div>
        </div>

        {/*footer*/}
        <div className='flex flex-row gap-[10px] m-1 p-[2px] justify-center items-center w-full h-[7vh] border-1 border-solid border-(--ylnmn-blue)'>
          <a href=""><div className='size-[20px] bg-(--ylnmn-blue) rounded-full'></div></a>
          <a href=""><div className='size-[20px] bg-(--ylnmn-blue) rounded-full'></div></a>
          <a href=""><div className='size-[20px] bg-(--ylnmn-blue) rounded-full'></div></a>
          <a href=""><div className='size-[20px] bg-(--ylnmn-blue) rounded-full'></div></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
