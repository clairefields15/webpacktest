import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import ErrorBoundary from './components/ErrorBoundary';

const domNode = document.getElementById('root');
if (domNode) {
	const root = createRoot(domNode);
	root.render(
		<ErrorBoundary>
			<App />
		</ErrorBoundary>,
	);
}
