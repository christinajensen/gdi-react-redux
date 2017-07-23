import React from 'react';
import FeedList from '../components/FeedList.jsx';
import Form from '../components/Form.jsx';

import data from '../../data.json';

const { photos } = data;

const HomePage = () => {
	return (
		<div className="HomePage">
			<Form />
      <FeedList photos={ photos }/>
		</div>
	);
};

export default HomePage;