"use client";

import { PATH } from "@/constants";
import useAppContext from "@/contexts/AppContext";
import getLocalizedPath from "@/i18n/getLocalizedPath";
import { ArrowRight } from "lucide-react";
import {
    HeroActions,
    HeroContainer,
    HeroContent,
    HeroDescription,
    HeroEyebrow,
    HeroOverlay,
    HeroTitle,
    PrimaryButton,
    SecondaryButton,
} from "./styles";

const ACTION_REQUEST_QUOTE = 0;
const ACTION_VIEW_PROJECTS = 1;

export default function Hero() {
    const { locale, translations } = useAppContext();

    const actions = [
        {
            label: translations?.home.hero.actions.requestQuote,
            value: getLocalizedPath(locale!, PATH.CONTACT),
        },
        {
            label: translations?.home.hero.actions.viewProjects,
            value: getLocalizedPath(locale!, PATH.PROJECTS),
        },
    ];

    return (
        <HeroContainer>
            <HeroOverlay />

            <HeroContent>
                <HeroEyebrow>{translations?.home.hero.eyebrow}</HeroEyebrow>

                <HeroTitle>{translations?.home.hero.title}</HeroTitle>

                <HeroDescription>
                    {translations?.home.hero.description}
                </HeroDescription>

                <HeroActions>
                    <PrimaryButton href={actions[ACTION_REQUEST_QUOTE].value}>
                        {actions[ACTION_REQUEST_QUOTE].label}
                        <ArrowRight size={18} />
                    </PrimaryButton>

                    <SecondaryButton href={actions[ACTION_VIEW_PROJECTS].value}>
                        {actions[ACTION_VIEW_PROJECTS].label}
                    </SecondaryButton>
                </HeroActions>
            </HeroContent>
        </HeroContainer>
    );
}
