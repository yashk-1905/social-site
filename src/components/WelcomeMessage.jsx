/**
 * postList me ye Welcome Message
 * use karna pada to isliye ab ye onClickFetch function bhi
 * vahin aayega
 */
const WelcomeMessage = ({onClickFetch }) => {
    return <center>
        <h1 className="welcome-message"> 
            There are no posts 
        </h1>
        <button type="button" class="btn btn-success" onClick={onClickFetch}>Go Fetch the data</button>
    </center>
}

export default WelcomeMessage;

//  ab ye welcome message mujhe PostList vale component me use karna hoga kyonki vahin par direct PostList ka use ho raha hai context se
