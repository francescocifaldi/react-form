import Card from "../card/Card";
import posts from "../../posts";

export default function Main() {
    const uniqueTags = []
    posts.forEach((post) => {
        post.tags.forEach((tag) => {
            if (!uniqueTags.includes(tag)) {
                uniqueTags.push(tag)
            }
        })
    })

    function addPost() {

    }

    return (
        <>
            <main>
                <div className="container">
                    <form action="" onSubmit={addPost()}>
                        <input type="text" placeholder="Title" />
                        <input type="text" placeholder="Description" />
                        <input type="button" value="Add" />
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
                            posts.map((post) => (

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