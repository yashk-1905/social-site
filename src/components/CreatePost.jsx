import { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import { PostListContext } from "../store/PostListStore";
const CreatePost = () => {
    let userIdElement = useRef();
    let postTitleElement = useRef();
    let postBodyElement = useRef();
    let reactionsElement = useRef();
    let tagsElement = useRef();
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        addPost(userId, postTitle, postBody, reactions, tags);
        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

    }

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
                    type="number"
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