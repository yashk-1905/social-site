const WelcomeMessage = ({onClickFetch }) => {
    return <center>
        <h1 className="welcome-message"> 
            There are no posts 
        </h1>
        <button type="button" class="btn btn-success" onClick={onClickFetch}>Go Fetch the data</button>
    </center>
}

export default WelcomeMessage;