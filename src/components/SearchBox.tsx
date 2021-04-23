import { FormEvent, useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';
import { ImageContext } from '../context/ImageContext';

const SearchBoxStyled = styled.form`
	height: 4rem;
	margin-top: 2.5rem;
	margin-left: auto;
	margin-right: auto;
	max-width: 60rem;
	display: grid;
	grid-template-columns: 1fr 3rem 2rem;
	input {
		background-color: #4e5d6c;
		border: none;
		color: #ebebeb;
		font-family: inherit;
		font-size: 1.6rem;
		height: 100%;
		padding: 0 6rem 0 1rem;
		grid-row: 1;
		grid-column: 1 / -1;
		&:focus {
			outline: none;
		}
	}
	button {
		background: none;
		border: none;
		cursor: pointer;
		margin: 0;
		padding: 0;
		grid-row: 1;
		grid-column: 2;
		transition: transform 0.2s ease, opacity 0.2s ease;
		&:focus {
			outline: none;
		}
		&:hover:not(:disabled),
		&:focus:not(:disabled) {
			transform: scale(1.1);
		}
		&:disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}
`;

function SearchBox() {
	const [query, setQuery] = useState('');
	const [prevQuery, setPrevQuery] = useState(query);

	const { searchImages, initElementRef } = useContext(ImageContext);

	const elementRef = useRef<HTMLFormElement>(null!);

	const disableButton = () => query.length < 3;

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		if (query.trim().length < 3 || query === prevQuery) return;
		searchImages(query);
		setPrevQuery(query);
		setQuery('');
	};

	useEffect(() => {
		initElementRef(elementRef.current);
	}, [initElementRef]);

	return (
		<SearchBoxStyled onSubmit={handleSearch} ref={elementRef}>
			<input
				aria-label="Enter a keyword for search images"
				type="text"
				value={query}
				onChange={({ target }) => setQuery(target.value)}
			/>
			<button type="submit" title="Search" disabled={disableButton()}>
				<Search size={24} color="#ebebeb" transform="rotate(90)" />
			</button>
		</SearchBoxStyled>
	);
}

export default SearchBox;
