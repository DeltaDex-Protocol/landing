import { ButtonLink, Container, Typography } from "shared/ui";

export const WelcomeSection = () => {
  return (
    <section className="section welcome-section flex items-center ">
      <Container className="flex items-center  flex-col gap-16">
        <Typography tag="h1" className="h1 text-center color-title-gradient">
          Use the full power of options
        </Typography>
        <Typography
          tag="h2"
          variant="h4"
          className="subtitle text-center color-subtitle-gradient"
        >
          without the need for <br />a counterparty
        </Typography>
        <ButtonLink href="#" color="primary" variant="contained">
          Open app
        </ButtonLink>
      </Container>
    </section>
  );
};
