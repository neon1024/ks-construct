"use client";

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

export default function Hero() {
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
                    <PrimaryButton href="/contact">
                        Request a quote
                        <ArrowRight size={18} />
                    </PrimaryButton>

                    <SecondaryButton href="/projects">
                        View our projects
                    </SecondaryButton>
                </HeroActions>
            </HeroContent>
        </HeroContainer>
    );
}
