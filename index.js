Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "kQAFX1QCA0NPKxmdIVK4QfnZvT40UEgY3zxcrcGh", // This is your Application ID
  "4p93fzA6hvxLDVJDyCfcpn6th7XhOpyE20rkgRuv" // This is your Javascript key
);

const DadosCurriculo = Parse.Object.extend("DadosCurriculo");

const h1Nome = document.getElementById('nome')
const pPerfilProfissional = document.getElementById('perfil')
const ulHardSkills = document.getElementById('hardSkills')
const ulFormacoes = document.getElementById('formacoes')
const ulProjetos = document.getElementById('projetos')
const ulContatos = document.getElementById('contatos')



const loadCV = async () => {

  const query = new Parse.Query(DadosCurriculo);

  try {

    const results = await query.find();

    for (const data of results) {

      const nome = data.get('nome');
      const perfilProfissional = data.get('perfil');
      const projetos = data.get('projetos');
      const formacao = data.get('formacaoAcademica');
      const hardSkills = data.get('hardSkills');
      const contato = data.get('contato')

      h1Nome.innerHTML = nome
      pPerfilProfissional.innerHTML = perfilProfissional

      for (let i = 0; i < hardSkills.length; i++) {
        ulHardSkills.innerHTML += `<li>${hardSkills[i]}</li>`;
      }


      for (let i = 0; i < formacao.length; i++) {
        ulFormacoes.innerHTML += `<li>${formacao[i]}</li>`;
      }

      for (let i = 0; i < projetos.length; i++) {
        ulProjetos.innerHTML += `<li>${projetos[i]}</li>`;
      }

      for (let i = 0; i < contato.length; i++) {
        ulContatos.innerHTML += `<li>${contato[i]}</li>`;
      }

    }

  } catch (error) {
    console.error("Error while fetching Tasks", error);
  }

};


loadCV();
