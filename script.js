/* ------ CRIAÇÃO DE CONSTANTES USANDO CLASS ------ */


const wrapper = document.querySelector('.wrapper');
const linkLogin = document.querySelector('.link_login');
const linkRegistro = document.querySelector('.link_registro');
const btnPopup = document.querySelector('.btn_login_popup');
const iconClose = document.querySelector('.icon_close');


/* ----- CRIAÇÃO DE EVENTOS EM BASE DO CLICK PARA MUDAR O LAYOUT DE LOGIN PARA REGISTRO E VICE-VERSA ----- */


linkRegistro.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

linkLogin.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


/* ----- EVENTO CAPAZ DE ABRIR O LOGIN ----- */ 


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active_popup');
});


/* ----- EVENTO CAPAZ DE FECHAR O LOGIN ----- */ 


iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active_popup');
});



/* ----- CADASTRO SING UP ----- */


/* ----- CRIAÇÃO DE VARIAVEIS -----*/

let nome = document.querySelector('#nome_cadastro')
let labelNome = document.querySelector('#label_nome')
let validNome = false

let usuario = document.querySelector('#usuario_cadastro')
let labelUsuario = document.querySelector('#label_usuario')
let validUsuario = false

let senha = document.querySelector('#senha_cadastro')
let labelSenha = document.querySelector('#label_senha')
let validSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


/* ----- MÍNIMO DE CARACTERES NO NOME / USUARIO / SENHA -----*/


nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Mínimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Mínimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})


/* ----- FUNÇÃO CAPAZ DE ARMAZENAR OS DADOS FORNECIDOS NO LOCALSTORAGE ----- */

/* --- validação e criação de uma lista armazenando os dados do usuario no localstorage ---*/


function cadastrar(){
  if(validNome && validUsuario && validSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'color:green' , 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = '../index.html'
    }, 3000)
    
  } else {
    msgError.setAttribute('style', 'color: red', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}


/* ----- LOGIN SING IN ----- */


/* ----- FUNÇÃO CAPAZ DE VERIFICAR OS DADOS QUE O USUÁRIO INSERIU NO CADASTRO E ENVIANDO UMA MENSAGEM DE LOGADO -----*/


function entrar(){

  var storedUser = localStorage.getItem('userCad');
  var storedSenha = localStorage.getItem('senhaCad');

  var user = document.getElementById('usuario.value');
  var userSenha = document.getElementById('senha.value');

  if(user == storedUser && userSenha == storedSenha){
    alert('Você esta logado.');
  }else{
    alert('Erro no login.');
  }
}