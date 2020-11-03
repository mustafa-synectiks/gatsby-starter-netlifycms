module.exports = {
	siteMetadata: {
		title: 'Gatsby + Netlify CMS Starter',
		description:
			'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-smoothscroll',
		{
			resolve: `gatsby-plugin-modal-routing`,
			options: {
				// A selector to set react-modal's app root to, default is `#___gatsby`
				// See http://reactcommunity.org/react-modal/accessibility/#app-element
				appElement: '#___gatsby',

				// Object of props that will be passed to the react-modal container
				// See http://reactcommunity.org/react-modal/#usage
				modalProps: {
					closeTimeoutMS: 500
				}
			}
		},

		{
			// `gatsby-plugin-scroll-reveal`,
			resolve: 'gatsby-plugin-scroll-reveal',
			options: {
				threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: false, // Flag for disabling animations

				// Advanced Options
				selector: '[data-sal]', // Selector of the elements to be animated
				animateClassName: 'sal-animate', // Class name which triggers animation
				disabledClassName: 'sal-disabled', // Class name which defines the disabled state
				rootMargin: '0% 50%', // Corresponds to root's bounding box margin
				enterEventName: 'sal:in', // Enter event name
				exitEventName: 'sal:out' // Exit event name
			}
		},
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images'
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads'
						}
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048
						}
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static'
						}
					}
				]
			}
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`
			}
		},
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: [ '/all.scss' ] // applies purging only on the bulma css file
			}
		}, // must be after other CSS plugins
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
		},
		'gatsby-plugin-netlify' // make sure to keep it last in the array
	]
};
