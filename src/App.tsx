import { GlobalStyles } from './styles/globalStyles';
import Header from './components/Header';
import Content from './components/Content';
import { ImageProvider } from './context/ImageContext';

function App() {
	return (
		<ImageProvider>
			<GlobalStyles />
			<Header />
			<Content />
		</ImageProvider>
	);
}

export default App;
