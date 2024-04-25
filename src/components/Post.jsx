import { FcLike } from "react-icons/fc";
import styles from './Post.module.css';
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../store/PostListStore";

const Post = ({ post }) => {

    const {deletePost} = useContext(PostListContext);
    return (
        <div className={`card ${styles.postCard} card-post`} >
             <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.postDelete}`} onClick={() => deletePost(post.id)}><MdDelete /></span>
            <div className="card-body">
                <h5 className="card-title">
                    {post.title}
                </h5>
                <p className="card-text">{post.body}</p>
                <div className='hashTags'>
                    {post.tags.map((tag) =>
                        <span key={tag} className="badge text-bg-warning hashtag">{tag}</span>
                    )}
                </div>
                <button type="button" className="btn position-relative p-0 mt-4" style={{fontSize: "30px"}}>
                <FcLike />
                    <span className="position-absolute end-10 top-0 p-2 badge rounded-pill bg-success" style={{fontSize: "10px"}}>
                        {post.reactions}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Post;