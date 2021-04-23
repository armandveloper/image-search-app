import styled from 'styled-components';
import { Hit } from '../interfaces/search-images-response.interface';

interface ImageCardProps {
	image: Hit;
}

const ImageCardStyled = styled.div`
	cursor: pointer;
	.media {
		height: 16rem;
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		transition: transform 0.3s ease-in-out;
	}
	&:hover img {
		transform: scale(1.2);
	}
	.body {
		background-color: #4e5d6c;
		padding: 1.2rem 2rem;
		text-align: center;
	}
	.text {
		margin: 0;
		&:first-child {
			margin-bottom: 1rem;
		}
	}
`;

function ImageCard({ image }: ImageCardProps) {
	return (
		<ImageCardStyled>
			<div className="media">
				<img
					src={image.previewURL}
					width={image.previewWidth}
					height={image.previewHeight}
					alt={image.tags}
				/>
			</div>
			<div className="body">
				<p className="text">{image.views} Views</p>
				<p className="text">{image.downloads} Downloads</p>
			</div>
		</ImageCardStyled>
	);
}

export default ImageCard;
