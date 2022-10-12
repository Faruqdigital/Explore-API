function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

function displayComments(comments){
    const commentsContainer = document.getElementById('commennts-container');
   for(const comment of comments){
    const commentDIV = document.createElement('div');
    commentDIV.classList.add('comment')
    console.log(comment);
    commentDIV.innerHTML = `
    <h4>User-${comment.postId}</h4>
    <h5>Comments : ${comment.name}</h5>
    <p>Description : ${comment.body}</p>
    `;
    commentsContainer.appendChild(commentDIV);
   }
}

loadComments();