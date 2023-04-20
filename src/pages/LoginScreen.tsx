const LoginScreen = ()=> {

  const login = (event:Event)=>{
    event.preventDefault()
  }

    return (
        <main className="h-screen bg-[#38532f]">
        <h1 className="font-bold text-center pt-36 mb-10 text-7xl text-[#d9d9d9]">Colist</h1>
        <div className="flex flex-col items-center ">
          <div className="bg-[#D9D9D9] rounded-xl">
            <h2 className="text-center bg-[#26250d] text-[#FFFFFF] rounded-t-xl p-1 uppercase">Login</h2>
            <div className="p-5">
              <form action="" className="flex flex-col items-center text-sm">
                <label htmlFor="username">E-mail</label>
                <input className="bg-[#8b8585] rounded-md p-1 text-sm w-56 m-2" type="email" name="username" id="username"/>
                <label htmlFor="password">Senha</label>
                <input className="bg-[#8b8585] rounded-md p-1 text-sm w-56 m-2" type="password" name="password" id="password" />
                <button className="rounded-full bg-slate-600 p-2 w-20 mt-4 text-[#ffffff]" type="button">Logar</button>
              </form>
              <div className="flex justify-around pt-8 text-sm">
                <a className="mr-5" href="#">Esqueci Minha Senha</a>
                <a className="ml-5" href="#">Cadastrar</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}
export default LoginScreen;