const postUl = document.getElementById("postList")

for(let i = 0; i < posts.length; i ++) {
    const post = posts[i]

    const postItem = `
    <li>
        <b>${post.title}</b>
        <p>${post.body} </p>
    </li>
    `

    postUl.insertAdjacentHTML("beforeend", postItem)
}