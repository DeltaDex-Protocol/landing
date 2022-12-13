import { ButtonLink, Container, Typography } from "shared/ui";
import { Header } from "widgets/index-header";
import { AdvantagesSection } from "./sections/advantages-section/advantages-section";
import { HedgeSection } from "./sections/hedge-section/hedge-section";
import { ManageSection } from "./sections/manage-section/manage-section";
import { ReplicateSection } from "./sections/replicate-section/replicate-section";
import { SponsorsSection } from "./sections/sponsors-section/sponsors-section";
import { WelcomeSection } from "./sections/welcome-section/welcome-section";

import Triangle from "shared/assets/media/img/triangle.png";
import Image from "next/image";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <WelcomeSection />
        <div className="light-wrap relative"></div>
        <SponsorsSection />
        <ReplicateSection />
        <ManageSection />
        <AdvantagesSection />
        <HedgeSection />
      </main>
      <footer className="footer h-screen flex items-center">
        <Container className="flex items-center justify-center">
          <div className="join-community-card w-full px-12 py-12 lg:px-24 lg:py-24 gap-16 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="community-card-side flex flex-col gap-8 community-card-side--left w-full lg:w-2/4">
              <Typography
                tag="h4"
                variant="h2"
                className="color-footer-title-gradient text-center lg:text-start"
              >
                Join our community
              </Typography>
              <div className="flex items-center flex-col w-full lg:flex-row gap-4">
                <ButtonLink
                  color="plate"
                  variant="contained"
                  href="#somelink"
                  className="w-full lg:w-fit"
                >
                  Telegram
                </ButtonLink>
                <ButtonLink
                  color="plate"
                  variant="contained"
                  href="#somelink"
                  className="w-full lg:w-fit"
                >
                  Twitter
                </ButtonLink>
              </div>
            </div>
            <div className="community-card-side community-card-side--right w-full lg:w-2/4">
              <Image src={Triangle} alt="DeltaDex" />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
