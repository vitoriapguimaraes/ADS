
/**
 * Função para buscar os posts da API JSONPlaceholder.
 */
function fetchPosts() {
    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 300) {
            var posts = JSON.parse(xmlHttpRequest.responseText);
            displayPosts(posts);
        } else {
            console.error('Failed to fetch posts:', xmlHttpRequest.statusText);
        }
    };

    xmlHttpRequest.onerror = function () {
        console.error('Failed to fetch posts');
    };

    xmlHttpRequest.send();
}

/**
 * Função para exibir os posts na página HTML.
 * @param {Array} posts - Um array contendo os posts a serem exibidos.
 */
function displayPosts(posts) {
    const apiContainer = document.getElementById('apiSection');
    posts.forEach(post => {
        const postElement = document.createElement('div');

        postElement.classList.add('post');

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <div style="margin: 1em;" id="buttons">
                <button onclick="likePost(${post.id})" 
                class="btn btn-primary" title="Like" >&#128077; <span id="likes_${post.id}">0</span>
                </button>
                <button onclick="dislikePost(${post.id})" class="btn btn-danger" title="Dislike" >&#128078;
                 <span id="dislikes_${post.id}">0</span></button>
            </div>
        `;

        apiContainer.appendChild(postElement);
    });
}

function likePost(postId) {
    const likesElement = document.getElementById(`likes_${postId}`);
    let likes = parseInt(likesElement.innerText);
    likes++;
    likesElement.innerText = `${likes}`;
}

function dislikePost(postId) {
    const dislikesElement = document.getElementById(`dislikes_${postId}`);
    let dislikes = parseInt(dislikesElement.innerText);
    dislikes++;
    dislikesElement.innerText = `${dislikes}`;
}


document.getElementById("callApi").addEventListener("click", fetchPosts);