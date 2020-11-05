import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';
import one from '../../../static/img/blog-index.jpg';
import two from '../../../static/img/chemex.jpg';
import three from '../../../static/img/flavor_wheel.jpg';
import ConditionalLayout from '../../components/ConditionalLayout';
// import SEO from "../components/seo"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const ThirdPage = () => (
	<ConditionalLayout>
		{/* <ul>
			<li>
				<Link to='/contact/page/'>Go to page 2</Link>
			</li>
			<li>
				<Link to='/contact/page/' asModal>
					Go to page 2 modal
				</Link>
			</li>

		</ul> */}

		<Carousel>
			<div>
				<img src={one} />
			</div>
			<div>
				<img src={two} />
			</div>
			<div>
				<img src={three} />
			</div>
		</Carousel>
	</ConditionalLayout>
);

export default ThirdPage;
