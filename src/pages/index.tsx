import Head from "next/head"
import LoginScreen from "./LoginScreen"
import Main from "./Main"

let logado = true;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Colist</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap" rel="stylesheet" />
      </Head>
      <div className=" bg-gray-900">
        <div className={logado ? "hidden" : ""} >
          <LoginScreen />
        </div>
        <div className={logado ? "" : "hidden"}>
          <Main />
        </div>
      </div>
    </div>
  )
}
