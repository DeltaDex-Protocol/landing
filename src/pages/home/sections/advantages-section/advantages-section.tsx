import { Container, Plate, Typography } from "shared/ui";
import st from "./styles.module.css";
import cn from "classnames";
import { memo } from "react";

export const AdvantagesSection = memo(() => {
  return (
    <section className="section advantages-section flex items-center">
      <Container className="flex justify-center">
        <div className={cn(st.advantages_grid)}>
          <div className={cn(st.advantages_grid_item)}>
            <Plate className={cn(st.advantage_card)}>
              <Typography tag="h3" className="h3 text-white">
                Hedge against impermament loss
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                Liquidity providers can hedge against IL by replicating put
                options
              </Typography>
            </Plate>
          </div>
          <div className={cn(st.advantages_grid_item)}>
            <Plate className={cn(st.advantage_card)}>
              <Typography tag="h3" className="h3 text-white">
                Earn higher yield
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                Protect your assets from impermament loss on Uniswap V3
                by replicating a put option contract

              </Typography>
            </Plate>
          </div>
          <div className={cn(st.advantages_grid_item)}>
            <Plate className={cn(st.advantage_card)}>
              <Typography tag="h3" className="h3 text-white">
                Fully decentralized
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                The DeltaDex protocol is built with decentralization at heart, with no 
                central authority that controls user funds. 
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                By using mathematical formulas, the DeltaDex smart contract continuously calculates
                the amount of the underlying asset to buy or sell and autonomously executes
                the trade.
              </Typography>
            </Plate>
          </div>
        </div>
      </Container>
    </section>
  );
});
