import { createContext, useReducer } from "react";


export const PostListContext = createContext({
    postList: [],
    addPost: () => {},   
    deletePost: () => {},   
    addInitialPosts: () => {},   
});

const reducePostFunction = (state, action) => {
    let newPostList; 
    if(action.type === "ADD_POST"){
        newPostList = [action.payload,...state];
        console.log(action.payload);
        return newPostList;
    }else if(action.type === "DELETE_POST"){
        return state.filter((post) => post.id !== action.payload.postId);
    }else if(action.type === "ADD_INITIAL_POSTS"){
        return state = action.payload.posts;
    }
    return state;
}

const PostListContextProvider = ({children}) =>{
    const [finalPostList, dispatchPostAction] = useReducer(reducePostFunction, []);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);    
        let actionAddObj = {
            type: "ADD_POST",
            payload: {
                id: Date.now(), 
                title: postTitle, 
                body: postBody, 
                reactions: reactions, 
                userId: userId,
                tags: tags,
            }
        }
        dispatchPostAction(actionAddObj);
    }

    const deletePost = (postId) => {
        let actionDeleteObj = {
            type: "DELETE_POST",
            payload: {
                postId,
            }
        }
        dispatchPostAction(actionDeleteObj);
    }

    const addInitialPosts = (posts) => {
        let acttionObj = {
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts,
            }
        }
        dispatchPostAction(acttionObj);
    }
    return (
        <PostListContext.Provider
            value={
                {
                    finalPostList,
                    addPost,
                    deletePost,
                    addInitialPosts,
                }
            }
        >
            {children}
        </PostListContext.Provider>
    )
}

export default PostListContextProvider;