import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';

import Layout from '../../components/Layout';
import ProductRoll from '../../components/ProductRoll';

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<section className='section'>
					<div className='container'>
						<div className='content'>
							<productRoll />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
