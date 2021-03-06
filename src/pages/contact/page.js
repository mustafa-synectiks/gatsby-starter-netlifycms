import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';
import one from '../../../static/img/blog-index.jpg';
import two from '../../../static/img/chemex.jpg';
import three from '../../../static/img/flavor_wheel.jpg';
import BlogRoll from '../../components/BlogRoll.js';
import ConditionalLayout from '../../components/ConditionalLayout';
// import SEO from "../components/seo"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const SecondPage = () => (
	<ConditionalLayout>
		<BlogRoll />
	</ConditionalLayout>
);

export default SecondPage;
