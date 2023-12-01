import { Link } from 'react-router-dom';

function CartOverview() {
	return (
		<div>
			<p>
				<Link to='/menu' />
				<span>23 pizzas</span>
				<span>$23.45</span>
			</p>
			<a href='/cart'>Open cart &rarr;</a>
		</div>
	);
}

export default CartOverview;
