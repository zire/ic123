export default {
	// Nav Items shown at the navbar/app menu
	// overwrite => false [default]
	// If overwrite is true, then the `items` will
	// overwrite the auto-generated ones.
	// If overwrite is false, then the `items` will
	// be merged with the default ones.
	// TIP: you can use overwrite: true to hide
	// GRANDPARENTs by including the public ones
	// to `items` like so:
	// items: [{ link: "/guide", name: "Guide" }]
	nav: {
		overwrite: true,
		items: [
			{
				link: '/developcenter',
				name: '开发者中心'
			},
			{
				link: '/glossary',
				name: '核心词汇表'
			},
			{
				link: '/grants',
				name: '激励计划'
			},
			{
				link: '/hackathon',
				name: '黑客松'
			},
			{
				link: '/about',
				name: '关于'
			}
		]
	},
	// Used in title meta tag
	title: 'IC 123',
	// Sorting method
	// Types: alphabetically, modified
	// alphabetically => A-Z (reverse: Z-A) [default]
	// modified => last modified (reverse: first modified)
	sorting: {
		type: 'alphabetically',
		reverse: false
	}
};
