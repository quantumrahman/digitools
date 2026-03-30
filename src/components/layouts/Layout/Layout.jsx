import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";

const Layout = () => {
    return (
        <>  
            <div className="w-full min-h-screen relative overflow-hidden">
                <Header></Header>
                <Main></Main>
            </div>
        </>
    );
};

export default Layout;