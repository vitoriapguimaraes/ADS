
// Função para buscar posts da API

async function fetchPosts() {

    try {

        // Fazendo uma requisição GET para a API

        const response = await

            fetch('https://jsonplaceholder.typicode.com/posts');



        // Verificando se a requisição foi bem-sucedida

        if (!response.ok) {

            throw new Error('Erro na requisição: ' +

                response.status);

        }

        // Convertendo a resposta para JSON

        const posts = await response.json();

        // Exibindo os posts na página

        displayPosts(posts);

    } catch (error) {

        console.error('Erro ao buscar os posts:', error);

    }

}

// Função para exibir os posts na página

function displayPosts(posts) {

    const postsContainer =

        document.getElementById('posts');

    postsContainer.innerHTML = ''; // limpa o conteúdo

    anterior

    // Itera sobre cada post e cria um elemento HTML para

    exibi - lo

    posts.forEach(post => {

        const postElement =

            document.createElement('div');

        postElement.className = 'post';



        const postTitle = document.createElement('h2');

        postTitle.textContent = post.title;

        const postBody = document.createElement('p');

        postBody.textContent = post.body;



        postElement.appendChild(postTitle);

        postElement.appendChild(postBody);



        postsContainer.appendChild(postElement);

    });

}

// Chama a função para buscar os posts quando a página é

carregada

document.addEventListener('DOMContentLoaded',

    fetchPosts);