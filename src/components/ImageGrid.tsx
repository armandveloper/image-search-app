import { useContext } from 'react';
import styled from 'styled-components';
import { ImageContext } from '../context/ImageContext';
import ImageCard from './ImageCard';

const ImageGridStyled = styled.div`
	margin-top: 4rem;
	margin-bottom: 4rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	gap: 2rem;
`;

function ImageGrid() {
	const {
		imageList,
		currentPage,
		totalPages,
		prevPage,
		nextPage,
	} = useContext(ImageContext);

	return (
		<>
			<ImageGridStyled>
				{imageList.map((image) => (
					<ImageCard key={image.id} image={image} />
				))}
			</ImageGridStyled>

			<div className="pagination">
				{currentPage === 1 ? null : (
					<button type="button" onClick={prevPage} className="btn">
						Anterior &laquo;
					</button>
				)}
				{currentPage === totalPages ? null : (
					<button type="button" onClick={nextPage} className="btn">
						Siguiente &raquo;
					</button>
				)}
			</div>
		</>
	);
}

export default ImageGrid;
