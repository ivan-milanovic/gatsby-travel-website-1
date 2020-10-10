import React from 'react';
import {
    FaFacebook, FaInstagram, FaLinkedIn, FaTwitter, FaYoutube,
    FooterContainer,
    SocialIcon, SocialIconLink, SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrapper,
    WebsiteRights
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        EXPLOR
                    </SocialLogo>
                    <WebsiteRights>EXPLOR © {new Date().getFullYear()}</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedIn />
                    </SocialIconLink>
                </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
