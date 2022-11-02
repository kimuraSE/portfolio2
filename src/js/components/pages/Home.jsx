import React from "react";
import { Container } from "../templates/container/Container";
import { ExampleHeader } from "../templates/header/ExampleHeader";
import { GlobalContainer } from "../templates/container/GlobalContainer";
import { MobileNav } from "../templates/header/MobileNav";
import { MainTag } from "../templates/container/MainTag";
import { ArticleTag } from "../templates/container/ArticleTag";
import { SectionTag } from "../templates/container/SectionTag";
import { Swiper1 } from "../templates/main/swiper/Swiper1";
import { Swiper2 } from "../templates/main/swiper/Swiper2";
import { LookWear } from "../templates/main/text/LookWear";
import { OnlineStore } from "../templates/main/text/OnlineStore";
import { FooterTag } from "../templates/container/FooterTag";
import { DesktopFooter } from "../templates/footer/DesktopFooter";
import { MobileFooter } from "../templates/footer/MobileFooter";

export const Home = () => {

    return (
        <GlobalContainer>
            <MobileNav />
            <Container>
                <ExampleHeader />
                <MainTag>
                    <ArticleTag>

                        <SectionTag>
                            <Swiper1 />
                        </SectionTag>

                        <SectionTag>
                            <Swiper2 />
                        </SectionTag>

                        <SectionTag>
                            <LookWear />
                        </SectionTag>

                        <SectionTag>
                            <OnlineStore />
                        </SectionTag>



                    </ArticleTag>
                </MainTag>
            </Container>

            <FooterTag className="desktop-footer">
                <DesktopFooter />
            </FooterTag>

            <FooterTag className="mobile-footer">
                <MobileFooter />
            </FooterTag>

        </GlobalContainer>
    )
}
