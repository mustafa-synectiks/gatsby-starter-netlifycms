import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Layout from '../components/Layout';
import { Link } from 'gatsby-plugin-modal-routing';

import ConditionalLayout from '../components/ConditionalLayout';
export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => (
	<div>
		<section className='sliderModals'>
			<div className='columnOne skyblue'>
				<div className='columnText'>
					<h3>Infra Transformation</h3>
				</div>
				<button>
					<Link to='/products/product-page' asModal>
						Product
					</Link>
				</button>
			</div>
			<div className='columnOne pink'>
				<div className='columnText'>
					<h3>ARP Transformation</h3>
				</div>
				<button>
					<Link to='/solutions/' asModal>
						Solutions
					</Link>
				</button>
			</div>
			<div className='columnOne ccc'>
				<div className='columnText'>
					<h3>Data Transformation</h3>
				</div>
				<button>
					<Link to='/services/' asModal>
						Services
					</Link>
				</button>
			</div>
			<div className='columnOne yellow'>
				<div className='columnText'>
					<h3>Process Transformation</h3>
				</div>
				<button>
					<Link to='/blog/' asModal>
						Blog
					</Link>
				</button>
			</div>
		</section>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array
	})
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`;
