import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import {
	Hit,
	SearchImagesResponse,
} from '../interfaces/search-images-response.interface';

interface ImageContextInt {
	imageList: Hit[];
	currentPage: number;
	totalPages: number;
	isLoading: boolean;
	searchImages(q: string): void;
	initElementRef(element: HTMLFormElement): void;
	prevPage(): void;
	nextPage(): void;
}

const apiKey = process.env.REACT_APP_API_KEY;

export const ImageContext = createContext({} as ImageContextInt);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
	const baseURL = 'https://pixabay.com/api/';

	const [imageList, setImageList] = useState<Hit[]>([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [isLoading, setLoading] = useState(false);

	const prevPage = () => setCurrentPage(currentPage - 1);

	const nextPage = () => setCurrentPage(currentPage + 1);

	const query = useRef('');

	const elementRef = useRef<HTMLFormElement>(null!);

	const initElementRef = (element: HTMLFormElement) => {
		elementRef.current = element;
	};

	const searchImages = useCallback(
		async (q: string) => {
			try {
				setLoading(true);
				// Si el término es distinto al de la referencia es una nueva búsqueda y la paginación se reinicia
				const page = q === query.current ? currentPage : 1;
				const resp = await fetch(
					`${baseURL}?key=${apiKey}&q=${encodeURI(
						q
					)}&safesearch=true&page=${page}`
				);
				const data: SearchImagesResponse = await resp.json();
				query.current = q;
				setTotalPages(~~data.totalHits / 20);
				setImageList(data.hits);
				page === 1 && setCurrentPage(page);
				elementRef.current?.scrollIntoView({
					block: 'end',
					behavior: 'smooth',
				});
			} catch (err) {
				console.log('Error:', err);
			} finally {
				setLoading(false);
			}
		},
		[currentPage]
	);

	useEffect(() => {
		if (query.current.trim().length < 3) return;
		searchImages(query.current);
	}, [currentPage, searchImages]);

	return (
		<ImageContext.Provider
			value={{
				imageList,
				currentPage,
				totalPages,
				isLoading,
				searchImages,
				initElementRef,
				prevPage,
				nextPage,
			}}
		>
			{children}
		</ImageContext.Provider>
	);
};
