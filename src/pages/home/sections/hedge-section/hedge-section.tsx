import { ButtonLink, ColContainer, CustomLink, Typography } from "shared/ui";
import Hedge from "shared/assets/media/img/pos_builder.png";
import Image from "next/image";

export const HedgeSection = () => {
  return (
    <section className="section hedge-section flex items-center">
      <ColContainer>
        <Typography tag="h2" className="h2 text-white text-center">
          Hedge your Uniswap LP position
        </Typography>
        <Typography tag="p" className="body1 text-secondary text-center">
          Choose your own risk-profile with our Position builder
        </Typography>
        <div className="w-full md:w-10/12">
          <Image src={Hedge} alt="Builder" loading="lazy" />
        </div>
        <ButtonLink href="#somelink" color="primary" variant="contained">
          Open position builder
        </ButtonLink>
      </ColContainer>
    </section>
  );
};
