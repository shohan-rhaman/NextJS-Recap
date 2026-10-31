// Process: 02
// const getPosts = async ()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }


// Process: 03
// const getPosts = async ()=>{
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         return res.json();
//     }catch(error){
//         throw new Error("Failed to fetch Post", error.message)
//     }
// }


// Process: 04
const getPosts = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!res.ok){
        throw new Error("Faild to fetch post")
    }

    return res.json();
}

const PostsPage = async () => {
    // process: 01 
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await res.json();

    const posts = await getPosts()

    return (
        <div>
            <h3>Blogs are Comming.....</h3>
            <p>Post length: {posts.length}</p>
        </div>
    );
};

export default PostsPage;