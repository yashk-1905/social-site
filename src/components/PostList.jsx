import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListStore";
import styles from "./PostList.module.css"
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
    const {finalPostList, addInitialPosts} = useContext(PostListContext);
    console.log(finalPostList);
    const handleClickFetch = () => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => addInitialPosts(data.posts))
    }
    
    return(
        <>
        {finalPostList.length===0 && <WelcomeMessage onClickFetch={handleClickFetch}/>}
        <div className={`${styles.postList}`}>
            {
                finalPostList.map((post)=>(
                    <Post key={post.id} post= {post}/>
                ))
            }
        </div>
        </>
    )
}

export default PostList;