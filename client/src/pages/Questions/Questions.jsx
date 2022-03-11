import React from 'react';
import { SingleQuestion } from '../../components';

const Questions = () => {
	return (
		<div className='container p-3'>
			<h3 className='mb-5'>Questions</h3>
			{/* Will have some kind of map function to map over all the questions within a database */}
			<SingleQuestion />
			<SingleQuestion />
			<SingleQuestion />
			<SingleQuestion />
			<SingleQuestion />
			<SingleQuestion />
			<SingleQuestion />
			<SingleQuestion />
		</div>
	);
};

export default Questions;
