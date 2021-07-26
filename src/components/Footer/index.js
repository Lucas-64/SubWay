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
                <a href="https://www.facebook.com/subwaybrasil/" target="_blank">
                    <LogoSocial src="/images/facebook.svg" />
                </a>
                <a href="https://twitter.com/subwaybrasil" target="_blank">
                    <LogoSocial src="/images/twitter.svg" />
                </a>
                <a href="https://www.youtube.com/subwaybrasiloficial" target="_blank">
                    <LogoSocial src="/images/YouTube.svg" />
                </a>
                <a href="https://www.tiktok.com/@subway.brasil?lang=pt-BR" target="_blank">
                    <LogoSocial src="/images/tiktok.svg" />
                </a>
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
