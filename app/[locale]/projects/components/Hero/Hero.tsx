"use client";

import useAppContext from "@/contexts/AppContext";
import { Eyebrow } from "../styles";
import { HeroContainer, HeroContent, HeroText, HeroTitle } from "./styles";

export default function Hero() {
    const { translations } = useAppContext();

    return (
        <HeroContainer>
            <HeroContent>
                <Eyebrow>{translations?.projects.hero.eyebrow}</Eyebrow>

                <HeroTitle>{translations?.projects.hero.title}</HeroTitle>

                <HeroText>{translations?.projects.hero.description}</HeroText>
            </HeroContent>
        </HeroContainer>
    );
}
