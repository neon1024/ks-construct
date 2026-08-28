import { VideoStyled } from "./styles";

export default function Video() {
    return (
        <VideoStyled autoPlay playsInline muted loop>
            <source src="/videos/ks-construct.fr.mp4" type="video/mp4" />
        </VideoStyled>
    );
}
