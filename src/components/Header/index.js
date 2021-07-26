import {Container, Content, LogoContainer, Logo, MenuButtons,} from './styles';
import Link from 'next/link';

function Header(){
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <Logo src="/images/Logo.svg"></Logo>
                </LogoContainer>
                <Link href="./" passHref><MenuButtons>Lojas</MenuButtons></Link>
                <Link href="./" passHref><MenuButtons>Menu</MenuButtons></Link>
                <Link href="./" passHref><MenuButtons>Peça já</MenuButtons></Link>
                <Link href="./" passHref><MenuButtons>Covid19</MenuButtons></Link>
                <Link href="./" passHref><MenuButtons>Sobre nós</MenuButtons></Link>
            </Content>
        </Container>
    );
}

export default Header;

