import { useContext } from 'react';
import styled from 'styled-components';
import { ImageContext } from '../context/ImageContext';
import ImageCard from './ImageCard';
import Skeleton from './Skeleton';

const ImageGridStyled = styled.div`
	margin-top: 4rem;
	margin-bottom: 4rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	gap: 2rem;
`;

function ImageGrid() {
	const { imageList, isLoading } = useContext(ImageContext);

	return (
		<>
			<ImageGridStyled>
				{isLoading
					? [...new Array(20)].map((_, i) => <Skeleton key={i} />)
					: imageList.map((image) => (
							<ImageCard key={image.id} image={image} />
					  ))}
			</ImageGridStyled>
		</>
	);
}

export default ImageGrid;
