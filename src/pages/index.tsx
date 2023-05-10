import Head from "next/head"
import React from "react";
import LoginScreen from "./LoginScreen";
import Main from "./Main"

const URL = "http://localhost:3333/";

export default function Home() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const cookieString = document.cookie;
    if (cookieString.includes("colistPass")) {
      const cookies = cookieString.split('; ');
      const colistPassCookie = cookies.find(cookie => cookie.startsWith('colistPass='));
      if(colistPassCookie){
        const colistPass = colistPassCookie.split('=')[1];
        const checkAuth = async () => {
          try{
            const response = await fetch(`${URL}user/authenticate/${colistPass}`)
            const data = await response.json();
            setLoggedIn(data.Logged);
          }catch(error){
            console.log(error)
          }
        }
        checkAuth();
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Colist</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap" rel="stylesheet" />
      </Head>
      <div>{loggedIn ? <Main /> : <LoginScreen />}</div>
    </div>
  )
}
