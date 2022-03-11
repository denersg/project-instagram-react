import "./style.css";
// import { IoLogoInstagram } from "react-icons/io5";

function Home(){
    return(
        <div className="home">
            {/* <IoLogoInstagram className="insta-logo" /> */}
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    );
}

export default function Top(){
    return(
        <div>
            <header className="header">
                <Home />
                {/* <Search />
                <TopMenu /> */}
            </header>
        </div>
    );
}