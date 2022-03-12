import "./content.css";
import "./stories.css";
import "./posts.css";

function Story(props){
    return(
        <div className="story">
            <div className="group">
                <img src={props.image} alt="story-img" />
            </div>
            <span>{props.title}</span>
        </div>
    );
}

function Stories(){
    const elements = [
        { img: "./images/9gag.svg", title: "9gag" },
        { img: "./images/meowed.svg", title: "meowed" },
        { img: "./images/barked.svg", title: "barked" },
        { img: "./images/nathanwpylestrangeplanet.svg", title: "nathanwpyle..." },
        { img: "./images/wawawicomics.svg", title: "wawawic..." },
        { img: "./images/respondeai.svg", title: "respondeai" },
        { img: "./images/filomoderna.svg", title: "filomoderna" },
        { img: "./images/memeriagourmet.svg", title: "memeria..." }
    ];

    return(
        <div className="stories">
            {elements.map( (element) => {
                return <Story image={element.img} title={element.title} />
            } )}

            <div class="scroll">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Post(props){
    return(
        <div className="post">
            <div className="header-post">
                <img src={props.whoPostedImg} alt="profile" />
                <span>{props.title}</span>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <div className="post-photo">
                <img src={props.image} alt="post-img" />
            </div>

            <div className="footer-post">
                <div className="container-interactivity">
                    <div className="interactivity">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>

                    <div className="bookmark">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="like">
                    <img src={props.whoLikedImg} alt={props.title} />
                    <p>
                        Curtido por <span>{props.whoLikedName}</span> e <span>outras {props.likes} pessoas</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

function Posts(){
    const elements = [
        { 
            img: "./images/gato-telefone.svg", 
            whoPostedImg: "./images/meowed.svg", 
            title: "meowed", 
            whoLikedImg: "./images/respondeai.svg",
            whoLikedName: "respondeai",
            likes: "101.523"
        },
        { 
            img: "./images/dog.svg", 
            whoPostedImg: "./images/barked.svg", 
            title: "barked", 
            whoLikedImg: "./images/adorable_animals.svg",
            whoLikedName: "adorable_animals",
            likes: "99.159"
        },
        { 
            img: "./images/gato-telefone.svg", 
            whoPostedImg: "./images/meowed.svg", 
            title: "meowed", 
            whoLikedImg: "./images/chibirdart.svg",
            whoLikedName: "chibirdart",
            likes: "85.323"
        }
    ];

    return(
        <div className="posts">
            {elements.map( (element) => {
                return(
                    <Post 
                        image={element.img} 
                        whoPostedImg={element.whoPostedImg} 
                        title={element.title} 
                        whoLikedImg={element.whoLikedImg} 
                        whoLikedName={element.whoLikedName} 
                        likes={element.likes}
                    />
                );
            } )}
        </div>
    );
}

function Feed(){
    return(
        <div className="feed">
            <Stories/>
            <Posts/>
        </div>
    );
}

function Content(){
    return(
        <div className="content">
            <Feed />
        </div>
    );
}

export default function Body(){
    return(
        <div>
            <Content />
        </div>
    );
}