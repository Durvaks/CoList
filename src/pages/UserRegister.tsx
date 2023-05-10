import React from 'react'

type Props = {}

const UserRegister = (props: Props) => {
  return (
    <div>
        <form className=' bg-slate-600 w-48 m-auto' action="http://localhost:3333/user/new" method='post'>
            <div className=' flex flex-col w-36 m-auto'>
            <label htmlFor="user">Usuario</label>
            <input type="text" name='user' />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password"/>
            <label htmlFor="name">Nome</label>
            <input type="text" name='name'/>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
            <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default UserRegister