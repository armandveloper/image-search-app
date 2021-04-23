import { useState } from 'react';
import styled from 'styled-components';
import { Hit } from '../interfaces/search-images-response.interface';
import { pulse } from '../animations';

interface ImageCardProps {
	image: Hit;
}

const ImageCardStyled = styled.div`
	cursor: pointer;
	.media {
		height: 16rem;
		overflow: hidden;
		position: relative;
		span {
			animation: ${pulse} 1.5s infinite ease-in-out;
			box-shadow: 0 9px 33px rgba(0, 0, 0, 0.07);
			display: block;
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
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
		margin: 1rem;
		&:last-of-type {
			margin-bottom: 1.5rem;
		}
	}
`;

function ImageCard({ image }: ImageCardProps) {
	const [isImageLoading, setImageLoading] = useState(true);
	return (
		<ImageCardStyled>
			<div className="media">
				<img
					src={image.previewURL}
					width={image.previewWidth}
					height={image.previewHeight}
					alt={image.tags}
					onLoad={() => setImageLoading(false)}
				/>
				{isImageLoading && <span />}
			</div>
			<div className="body">
				<p className="text">{image.views} Views</p>
				<p className="text">{image.downloads} Downloads</p>
				<a
					href={image.largeImageURL}
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn--secondary btn--block"
				>
					View image
				</a>
			</div>
		</ImageCardStyled>
	);
}

export default ImageCard;
