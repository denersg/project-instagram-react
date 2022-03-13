import LogoName from "../../assets/logo.png";
import "./style.css";

function Home(){
    return(
        <div className="home">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="vertical-line-home"></div>
            <div className="logo-instagram-name">
                <img src={LogoName} alt="logo" />
            </div>
        </div>
    );
}

function Search(){
    return(
        <div className="search">
            <input type="text" placeholder="Pesquisar"/>
        </div>
    );
}

function TopMenu(){
    return(
        <nav className="top-menu">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon class="compass" name="compass-outline"></ion-icon>
            <ion-icon class="heart" name="heart-outline"></ion-icon>
            <ion-icon class="person" name="person-outline"></ion-icon>
        </nav>
    );
}

export default function Top(){
    return(
        <div>
            <header className="header">
                <div className="header-container">
                    <Home />
                    <Search />
                    <TopMenu />
                </div>
            </header>
        </div>
    );
}