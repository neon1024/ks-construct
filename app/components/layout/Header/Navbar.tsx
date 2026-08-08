// import { COMPANY } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import {
//     HeaderContainer,
//     HeaderTitle,
//     PrimaryHeaderContainer,
//     SecondaryHeaderContainer,
// } from "./styles";

// export default function Navbar() {
//     return (
//         <HeaderContainer>
//             <PrimaryHeaderContainer>
//                 <Image
//                     src={"/logo.png"}
//                     alt={COMPANY.NAME}
//                     width={50}
//                     height={50}
//                     style={{
//                         width: "100%",
//                         height: "auto",
//                     }}
//                 />
//                 <HeaderTitle>{COMPANY.NAME}</HeaderTitle>
//             </PrimaryHeaderContainer>
//             <SecondaryHeaderContainer>
//                 <Link href="/">Home</Link>
//                 <Link href="/contact">Contact</Link>
//             </SecondaryHeaderContainer>
//         </HeaderContainer>
//     );
// }

import { COMPANY } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {
    HeaderContainer,
    HeaderTitle,
    Logo,
    PrimaryHeaderContainer,
    SecondaryHeaderContainer,
} from "./styles";

export default function Navbar() {
    return (
        <HeaderContainer>
            <PrimaryHeaderContainer>
                <Logo
                    src="/logo.png"
                    alt={COMPANY.NAME}
                    width={80}
                    height={80}
                />

                <HeaderTitle>{COMPANY.NAME}</HeaderTitle>
            </PrimaryHeaderContainer>

            <SecondaryHeaderContainer>
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
            </SecondaryHeaderContainer>
        </HeaderContainer>
    );
}
