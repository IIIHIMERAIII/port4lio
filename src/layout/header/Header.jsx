import { HeaderContainer, HeaderTitle, HeaderNav, NavLink } from "../header/styled";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Navigation</HeaderTitle>
            <HeaderNav>
                <NavLink to='/'>Home</NavLink>
                <NavLink>Contacts</NavLink>
                <NavLink>Partfolio</NavLink>
                <NavLink>Some link</NavLink>
            </HeaderNav>
        </HeaderContainer>
    )
}