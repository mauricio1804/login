firebase.auth().onAuthStateChanged(function (usuario) {
    if (usuario) {
      // Usuário está conectado
      document.getElementById('usuario').style.display = 'block'
      document.getElementById('login').style.display = 'none'
    } else {
      // Nenhum usuário está conectado
      document.getElementById('usuario').style.display = 'none'
      document.getElementById('login').style.display = 'block'
    }
  })

  function entrar() {
    let emailUsuario = document.getElementById('email').value
    let senhaUsuario = document.getElementById('senha').value

    //método de login de usuários existentes no firebase
  firebase.auth().signInWithEmailAndPassword(emailUsuario, senhaUsuario)
  .catch(error => {
    alert(mensagemErros(error));
  })
}

  function mensagemErros(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário ou senha invalido";
    }
    return error.message;
  }


  function error(mensagemErro){
      switch(codigoErro){
          case auth/invalid-email:
            mensagemErro = alert("email invalido");
      }
  }

  function sair() {
    firebase.auth().signOut()
  }
