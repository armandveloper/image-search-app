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
	searchImages(q: string): void;
	initElementRef(element: HTMLFormElement): void;
	prevPage(): void;
	nextPage(): void;
}

export const ImageContext = createContext({} as ImageContextInt);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
	const baseURL = 'https://pixabay.com/api/',
		apiKey = '9128348-fc774bc9d976d27e45c7513f6';

	const [imageList, setImageList] = useState<Hit[]>([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

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
				const resp = await fetch(
					`${baseURL}?key=${apiKey}&q=${encodeURI(
						q
					)}&safesearch=true&page=${currentPage}`
				);
				const data: SearchImagesResponse = await resp.json();
				query.current = q;
				setTotalPages(~~data.totalHits / 20);
				setImageList(data.hits);
				elementRef.current?.scrollIntoView({
					block: 'end',
					behavior: 'smooth',
				});
			} catch (err) {
				console.log('Error:', err);
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
