import { SocialLink } from "../../components/socialLink/socialLink"

import { FooterContainer, LinksContainer } from "./styled"

const  items = [
    {
        icon: 'github',
    },
    {
        icon: 'linkedin',
    },
    {
        icon: 'steam',
    }
]


export const Footer = () => {
    return (
        <FooterContainer>
                <LinksContainer>
                {items.map((item, index) => (
                    <SocialLink
                        key={index}
                        iconName={item.icon}
                    />
                ))}
                </LinksContainer>
        </FooterContainer>
    )
}