import Header from "../Header";
import Footer from "../Footer";
import Contents from "../Contents";

import {Container, ContentContainer, FooterContainer} from "./styles";
import { Content } from "../Header/styles";

function Layout({children}){
    return (
            <>
            <Header></Header>
            <Container>
                <ContentContainer>
                    <Contents>

                        
                    </Contents>
                </ContentContainer>
            </Container>
                <FooterContainer>
                    <Footer></Footer>
                </FooterContainer>
            </>


    );
}

export default Layout;