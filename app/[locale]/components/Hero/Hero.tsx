"use client";

import { PATH } from "@/constants";
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

export default async function Hero() {
    return (
        <HeroContainer>
            <HeroOverlay />

            <HeroContent>
                <HeroEyebrow>CONSTRUCTION & RENOVATION</HeroEyebrow>

                <HeroTitle>
                    We build spaces
                    <br />
                    <span>made to last.</span>
                </HeroTitle>

                <HeroDescription>
                    Quality construction and renovation services, delivered with
                    precision, reliability and attention to detail.
                </HeroDescription>

                <HeroActions>
                    <PrimaryButton href={PATH.CONTACT}>
                        Request a quote
                        <ArrowRight size={18} />
                    </PrimaryButton>

                    <SecondaryButton href={PATH.PROJECTS}>
                        View our projects
                    </SecondaryButton>
                </HeroActions>
            </HeroContent>
        </HeroContainer>
    );
}
