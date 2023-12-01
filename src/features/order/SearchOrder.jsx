import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	const handleOrderSearch = (e) => {
		e.preventDefault();
		if (!query) return;
		navigate(`/order/${query}`);
		setQuery('');
	};
	return (
		<>
			<form onSubmit={(e) => handleOrderSearch(e)}>
				<input
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
			</form>
		</>
	);
}

export default SearchOrder;
