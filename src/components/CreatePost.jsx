import { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import { PostListContext } from "../store/PostListStore";
const CreatePost = () => {
    // we will create useRef for storing all the variables now
    /**
     * humen abhi inn sabhi me onChange lagakar useState se states update karani padti
     * par useRef se variable ke form me banakar or storage ka facility mil jane par
     * hum directly inn variables me ref ka use karke jahan par value enter kar rhe hain 
     * current values ko store kara sakte hain
     */
    let userIdElement = useRef();
    let postTitleElement = useRef();
    let postBodyElement = useRef();
    let reactionsElement = useRef();
    let tagsElement = useRef();

    const handleFormSubmit = (event) => {
        //sabse pehle to default behaviour jo hai form ka data ko host par bhej dene ka usko prevent karna hoga 
        event.preventDefault();
        //abhi sabhi ki current values hum ref variables se nikal lenge form submit hone par
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        //ab sari cheejen addPost me daal denge
        addPost(userId, postTitle, postBody, reactions, tags);
        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

    }

    //we will use the addItem method defined in our context (PostListContext) we created in store
    const { addPost } = useContext(PostListContext);

    return (
        <form className={`${styles.createPost}`} onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User Id </label>
                <input
                    type="text"
                    ref={userIdElement}
                    className="form-control"
                    id="userId"
                    placeholder="Enter your user id"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Tile </label>
                <input
                    type="text"
                    ref={postTitleElement}
                    className="form-control" id="title" placeholder="How are you feeling today?" />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content </label>
                <textarea
                    //used to define the height of the textarea 
                    rows={4}
                    ref={postBodyElement}
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Tell us more about it"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Reactions </label>
                <input
                    type="text"
                    ref={reactionsElement}
                    className="form-control"
                    id="userId"
                    placeholder="How many people reacted or liked this post?"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hashtags here </label>
                <input
                    type="text"
                    ref={tagsElement}
                    className="form-control"
                    id="tags"
                    placeholder="Please enter your hashtags using space"
                />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}

export default CreatePost;


// import styles from "./CreatePost.module.css";
// const CreatePost = () => {
//     return (
//         <form className={`${styles.createPost}`}>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                 <input type="password" className="form-control" id="exampleInputPassword1"/>
//             </div>
//             <div className="mb-3 form-check">
//                 <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//     )
// }

// export default CreatePost; 