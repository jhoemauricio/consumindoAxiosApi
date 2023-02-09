//Url da API
const url = "http://localhost:5500/api"

//Dados do usuário
const newUser = {

    name: "Olivia Palito",
    avatar: "https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_4x3.jpg",
    city: "Rio do Sul"
}
const UpdateUser = {

    name: "Frajola",
    avatar: "https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_4x3.jpg",
    city: "Recife"
}

//Busca os usuários
function getUser() {

    axios.get(url)
        .then(response => {
            // console.log(response);
            const data = response.data
            renderResults.textContent = JSON.stringify(data)

        })
        .catch(error => console.log(error))
}

//executa a função
// getUser();

//Adiciona usuário
function addNewUser() {

    //Envia os dados para a API
    axios.post(url, newUser)
        .then(response => {

            // console.log(response.data);
            alert('Salvo com sucesso!');

        })
        .catch(error => {

            console.log(error);


        })
}

//executa a função
// addNewUser();

//atualiza o usuário
function updateUser() {

    //template string, utilizado para escrever de forma que não precise concatenar com +
    //é passado qual id deseja alterar
    axios.put(`${url}/2`, UpdateUser)
        .then(response => {
            console.log(response.data);
            alert(JSON.stringify(response.data))
        })
        .catch(error => {
            console.log(error);
        })

}

// executa a funcao
// updateUser();

//deleta o usuário
function deleteUser() {

    axios.delete(`${url}/1`)
        .then(response => {
            console.log(response.data);
            alert(JSON.stringify(response.data));
        })
        .catch(error => {
            console.log(error)
        })
}

//executa a função
// deleteUser();

//Busca usuário pelo ID
function getOneUser() {

    axios.get(`${url}/2`)
        .then(response => {

            // alert(JSON.stringify(response.data));
            //adiciona no renderResults o conteúdo do texto convertido para stringify
            renderResults.textContent = JSON.stringify(response.data);

        })
        .catch(error => {
            console.log(error);
        })
}

//executa a função
getOneUser();