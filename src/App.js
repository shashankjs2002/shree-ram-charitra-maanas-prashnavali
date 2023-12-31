import { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import { logDOM } from '@testing-library/react';



function App() {
  const [isOnline, setIsOnline] = useState(true)
  // useEffect(()=>{
  //    ? setIsOnline(true) : setIsOnline(false)
  // },[navigator.onLine])

  // useEffect(() => {
  //   window && window.addEventListener("push", (event) => {
  //     const payload = event.data?.text() ?? "no payload";
  //     event.waitUntil(
  //         setTimeout(()=>{

  //           window.registration.showNotification("ServiceWorker Cookbook", {
  //             body: payload,
  //           }
  //         ,5000)
  //         }),
  //       );
  //     });
    
  // }, [])
  
  const handleNotificationClick = (title, body, icon) => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        console.log("first")
        showNotification(title, body, icon);
      } else if (Notification.permission !== 'denied') {
        requestNotificationPermission();
      }
    }
  };

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      console.log("second")
      if (permission === 'granted') {
        showNotification();
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  const showNotification = (title= "Notification Title",body='This is body of the notification', icon =  '/logo192.png') => {
    const options = {
      body,
      icon, // Replace with the path to your icon
    };

    // setInterval(()=>{

      new Notification(title, options);
    // },5000)
  };

  return (
    <div className="items-center App bg-yellow-50 min-h-screen" style={{textAlign: "-webkit-center"}}>

      {/* <div className='bg-yellow-200 text-orange-600 font-semibold ' onClick={()=>{handleNotificationClick()}}>Send Notification</div> */}
      {!navigator.onLine? <div className='bg-yellow-200 text-orange-600 font-semibold '>Offline or Connectivity Error</div>: ""}
      <Navbar/>
      <Grid handleNotificationClick={handleNotificationClick}/>
    </div>
  );
}

export default App;
