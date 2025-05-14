//fazer cadastro

const botao = document.getElementById("btnCadastrar");

//cadastrar 
botao.addEventListener('click', function (){
    const objsUsuario = {
        usuario: document.getElementById('susario').value,
        senha: document.getElementById('semha').value

    };
    listaUsuariosCadastrados.push(objsUsuario);
    console.log(listaUsuariosCadastrados);
    const listaJason =JSON.stringify(listaUsuariosCadastrados);
    localStorage.setItem('usuario', listaJason);


}
);