import { useContext } from 'react';
import styled from 'styled-components';
import { ImageContext } from '../context/ImageContext';

const PaginationStyled = styled.div`
	margin-bottom: 2rem;
	padding: 2rem;
	text-align: center;
`;

function Pagination() {
	const { currentPage, totalPages, prevPage, nextPage } = useContext(
		ImageContext
	);

	return (
		<PaginationStyled>
			{currentPage === 1 ? null : (
				<button type="button" onClick={prevPage} className="btn">
					Anterior &laquo;
				</button>
			)}
			{currentPage === totalPages || currentPage > totalPages ? null : (
				<button type="button" onClick={nextPage} className="btn">
					Siguiente &raquo;
				</button>
			)}
		</PaginationStyled>
	);
}

export default Pagination;
