import {
    AccentLine,
    BackgroundNumber,
    Container,
    Content,
    Description,
    Eyebrow,
    HomeButton,
    Title,
} from "./styles";

export default function NotFound() {
    return (
        <Container>
            <BackgroundNumber>404</BackgroundNumber>

            <Content>
                <Eyebrow>PAGE NOT FOUND</Eyebrow>

                <AccentLine />

                <Title>
                    This page
                    <br />
                    doesn't exist.
                </Title>

                <Description>
                    The page you're looking for may have been moved, removed, or
                    is temporarily unavailable.
                </Description>

                <HomeButton href="/">
                    <span>Back to home</span>
                    <span>→</span>
                </HomeButton>
            </Content>
        </Container>
    );
}
