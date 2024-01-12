import { HeaderContainer, HeaderTitle, HeaderNav, NavLink } from "../header/styled";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Navigation</HeaderTitle>
            <HeaderNav>
                <NavLink>Link</NavLink>
                <NavLink>Link</NavLink>
                <NavLink>Link</NavLink>
                <NavLink>Link</NavLink>
                <NavLink>Link</NavLink>
            </HeaderNav>
        </HeaderContainer>
    )
}