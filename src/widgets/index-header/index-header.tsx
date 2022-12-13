import {
  ButtonLink,
  Container,
  CustomLink,
  HeaderLayout,
  IconButton,
  MenuCard,
} from "shared/ui";
import { MdMenu } from "react-icons/md";
import Logo from "shared/assets/media/svg/delta_logo.svg";
import Image from "next/image";
import { useMemo, useState } from "react";

// по-хорошему, надо декомпозировать дополнительно
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderLayout>
      <Container className="flex justify-between items-center">
        <div className="w-44 lg:w-56">
          <Image
            src={Logo}
            alt="Delta"
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
        {/* надо написать хук, который возвращает ширину экрана */}
        <div className="header-wrap header-wrap--nav block relative md:hidden">
          <IconButton>
            <MdMenu onClick={() => setIsOpen(true)} className="w-full h-full" />
          </IconButton>
          <MenuCard
            onClose={() => setIsOpen(false)}
            isOpen={isOpen}
            alignX="center"
            alignY="center"
          >
            <nav className="">
              <ul className="flex items-center flex-col">
                <li className="w-full px-2 py-2">
                  <CustomLink href="#community">Community</CustomLink>
                </li>
                <li className="w-full px-2 py-2">
                  <CustomLink href="#docs">Docs</CustomLink>
                </li>
                <li className="w-full px-2 py-2">
                  <ButtonLink href="#docs" variant="contained">
                    Launch
                  </ButtonLink>
                </li>
              </ul>
            </nav>
          </MenuCard>
        </div>
        <nav className="header-wrap header-wrap--nav hidden md:block">
          <ul className="flex items-center md:gap-8 lg:gap-16">
            <li>
              <CustomLink href="#community">Community</CustomLink>
            </li>
            <li>
              <CustomLink href="#docs">Docs</CustomLink>
            </li>
            <li>
              <ButtonLink href="#docs" variant="contained">
                Launch
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderLayout>
  );
};
