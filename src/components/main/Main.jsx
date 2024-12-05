import Card from "../card/Card";
import posts from "../../posts";
import { useState } from "react";

export default function Main() {
    const uniqueTags = []
    posts.forEach((post) => {
        post.tags.forEach((tag) => {
            if (!uniqueTags.includes(tag)) {
                uniqueTags.push(tag)
            }
        })
    })

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [newPosts, setNewPosts] = useState(posts)

    function addPost(event) {
        event.preventDefault();
        console.log(`Ho aggiunto: ${title} ${description}`)
        const newPost = {
            id: Date.now(), title, content: description, published: true, image: undefined, tags: []
        }
        console.log('obj:', newPost)
        setNewPosts([...newPosts, newPost])
        console.log(newPosts)
    }

    return (
        <>
            <main>
                <div className="container">
                    <form action="" onSubmit={addPost}>
                        <input type="text" onChange={(event) => setTitle(event.target.value)} placeholder="Title" value={title} />
                        <input type="text" onChange={(event) => setDescription(event.target.value)} placeholder="Description" value={description} />
                        <button>Add</button>
                    </form>
                </div>
                <div className="container">
                    <ul className="row">
                        {uniqueTags.map((uniqueTag) => (
                            <li key={uniqueTag}>{uniqueTag}</li>
                        ))}
                    </ul>
                </div>
                < div className="container" >
                    <div className="row">
                        {
                            newPosts.map((post) => (

                                <div key={post.id} className="col-4">
                                    {post.published &&
                                        < Card post={post} />
                                    }
                                </div>

                            ))
                        }
                    </div>
                </div >
            </main>
        </>
    )
}