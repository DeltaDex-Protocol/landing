import { Container, Typography } from "shared/ui";

export const AdvantagesSection = () => {
  return (
    <section className="section advantages-section flex items-center">
      <Container className="flex justify-center">
        <div className="grid advantages-grid">
          <div className="advantages-grid-item">
            <div className="advantage-card">
              <Typography tag="h3" className="h3 text-white">
                Hedge against impermament loss
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                Liquidity providers may hedge against IL by replicating put
                option
              </Typography>
            </div>
          </div>
          <div className="advantages-grid-item">
            <div className="advantage-card">
              <Typography tag="h3" className="h3 text-white">
                Earn higher yield
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                DeltaDex users may run a wide variety of strategies as well as
                options market-making and hedging IL
              </Typography>
            </div>
          </div>
          <div className="advantages-grid-item">
            <div className="advantage-card">
              <Typography tag="h3" className="h3 text-white">
                Fully decentralized
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                Using mathematical formulas, DeltaDex smart contract calculates
                the amount of asset to buy (or sell) and autonomously executes
                the trade
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
