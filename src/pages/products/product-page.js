import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';
import one from '../../../static/img/blog-index.jpg';
import two from '../../../static/img/chemex.jpg';
import three from '../../../static/img/flavor_wheel.jpg';
import ProductRoll from '../../components/ProductRoll.js';
import ConditionalLayout from '../../components/ConditionalLayout';
// import SEO from "../components/seo"

const SecondPage = () => (
	<ConditionalLayout>
		<ProductRoll />
	</ConditionalLayout>
);

export default SecondPage;
