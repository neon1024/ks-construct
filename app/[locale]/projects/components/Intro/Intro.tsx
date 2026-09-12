"use client";

import useAppContext from "@/contexts/AppContext";
import { Eyebrow } from "../styles";
import { IntroContainer, IntroText, IntroTitle } from "./styles";

export default function Intro() {
    const { translations } = useAppContext();

    return (
        <IntroContainer>
            <div>
                <Eyebrow>{translations?.projects.intro.eyebrow}</Eyebrow>

                <IntroTitle>{translations?.projects.intro.title}</IntroTitle>
            </div>

            <IntroText>
                <p>{translations?.projects.intro.description.first}</p>

                <p>{translations?.projects.intro.description.second}</p>
            </IntroText>
        </IntroContainer>
    );
}
