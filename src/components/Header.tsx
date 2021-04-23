import styled from 'styled-components';
import SearchBox from './SearchBox';

const HeaderStyled = styled.header`
	padding: 2rem;
`;

function Header() {
	return (
		<HeaderStyled>
			<h1>Image Search</h1>
			<SearchBox />
		</HeaderStyled>
	);
}

export default Header;
