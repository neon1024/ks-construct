import { COMPANY } from "@/constants";
import Image from "next/image";
import { HeaderContainer, HeaderTitle } from "./styles";

export default function Navbar() {
    return (
        <HeaderContainer>
            <Image
                src={"/logo.png"}
                alt={COMPANY.NAME}
                width={100}
                height={100}
            />
            <HeaderTitle>{COMPANY.NAME}</HeaderTitle>
        </HeaderContainer>
    );
}
