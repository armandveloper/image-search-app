import styled from 'styled-components';
import { pulse } from '../animations';

const SkeletonStyled = styled.div`
	cursor: pointer;
	span {
		animation: ${pulse} 1.5s infinite ease-in-out;
		box-shadow: 0 9px 33px rgba(0, 0, 0, 0.07);
		display: block;
	}
	.media {
		height: 16rem;
		overflow: hidden;
		span {
			height: 100%;
		}
	}
	.body {
		background-color: #4e5d6c;
		padding: 1.2rem 2rem;
		text-align: center;
		> span {
			height: 3.7rem;
			width: 100%;
		}
	}
	.text {
		margin: 1rem;
		&:last-of-type {
			margin-bottom: 1.5rem;
		}
		span {
			height: 2.1rem;
		}
	}
`;

function Skeleton() {
	return (
		<SkeletonStyled>
			<div className="media">
				<span />
			</div>
			<div className="body">
				<p className="text">
					<span />
				</p>
				<p className="text">
					<span />
				</p>
				<span />
			</div>
		</SkeletonStyled>
	);
}

export default Skeleton;
