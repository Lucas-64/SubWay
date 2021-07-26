import {Content, LinksRodape, LogoSocial, Container, Rodape, Links, RodapeText} from './styles';
import Link from 'next/link';

function Footer(){
    return (
        <Container>
            <Content>
                <Links>
                <Rodape>Gestão</Rodape>
                <Link href="" passHref><LinksRodape>Subway Paterns™</LinksRodape></Link>
                <Link href="" passHref><LinksRodape>Carreiras</LinksRodape></Link>
                </Links>
                <Links>
                <Rodape>Perfil</Rodape>
                <Link href="" passHref><LinksRodape>Entre em contato conosco</LinksRodape></Link>
                </Links>
                <Link href="" passHref>
                    <LogoSocial src="/images/facebook.svg" />
                </Link>
                <Link href="" passHref>
                    <LogoSocial src="/images/twitter.svg" />
                </Link>
                <Link href="" passHref>
                    <LogoSocial src="/images/YouTube.svg" />
                    </Link>
                <Link href="" passHref>
                    <LogoSocial src="/images/tiktok.svg" />
                </Link>
                <Links>
                <Rodape>Jurídico</Rodape>
                <Link href="" passHref><LinksRodape>Declarações de privacidade</LinksRodape></Link>
                <Link href="" passHref><LinksRodape>Termos de uso</LinksRodape></Link>
                </Links>
                <Links>
                <Rodape>Acessibilidade</Rodape>
                <Link href="" passHref><LinksRodape>SAdobe PDF Reader</LinksRodape></Link>
                <Link href="" passHref><LinksRodape>Adobe Flash Pligin</LinksRodape></Link>
                </Links>
            </Content>
            <Content>
                <RodapeText>
                    <Rodape>
                        SUBWAY® é uma marca registrada de Subway IP LLC.
                        © 2021 Subway IP LLC.
                        Todos os direitos reservados.
                        <Link href="" passHref><LinksRodape>Configurações de cookies</LinksRodape></Link>
                    </Rodape>
                </RodapeText>

            </Content>
        </Container>
    );
}

export default Footer;
