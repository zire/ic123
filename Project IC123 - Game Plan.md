# Project IC123 - Game Plan
### 1. The positioning of a Chinese site
1. ic123.xyz or dfinity.org/china ?    
2. We will go with ic123.xyz
3. We don't label ic123.xyz as an “official” site, but we use that to share useful info with the community (the notion of “official” is too centralized and Web2)     

### 2. The goals and scope of work of ic123.xyz for V1.0
1. A window of education and communication to help Chinese developers get started on IC    
2. A demo to showcase how to build a website and community 100% on IC and leverage cool features from IC SDK such as Internet Identity, etc
3. An explorer to promote high-quality IC projects from the community
    
### 3.  Future goals and scope of work of ic123.xyz beyond V1.0
1. Storage of important assets from DFINITY (such as Paul Liu’s videos)
2. A community for Chinese IC developers with Internet Identity integration (similar to ICP League but in pure Web3 style)
3. A global platform to introduce DFINITY/IC to developers of all regions
4. A mailing list to broadcast the latest from DFINITY (Substack/Mailchimp)
5.  General introduction of the blockchain industry
6. Turn ic123.xyz into a DAO that is owned and managed by a collective IC community where DFINITY Asia team is one of the key developers and promoters. Go full Web3.

### 4.  Technical architecture
1. Front-end
	1. No Motoko is required
	2. Use [Svelte](https://svelte.dev/), out of Angular, React, and Vue
	3. Multiple-page static site
	4. Needs to be mobile-friendly
	5. Templates
		i.  [sveltethemes](https://www.sveltethemes.dev/)
		ii.  [Svelte Society](https://sveltesociety.dev/templates/)
	6. Markdown engine support? (optional for V1.0)
		a.  [https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog)
		b.  [Sapper/Svelte: How do I add markdown files? - Stack Overflow](https://stackoverflow.com/questions/58417881/sapper-svelte-how-do-i-add-markdown-files)
	    c.  [Building a blog with Svelte, Sapper, and Markdown — Mahmoud Ashraf](https://mahmoudashraf.dev/blog/build-a-blog-with-svelte-and-markdown/)
2.  Back-end
    1.  Static site 
    2.  Query call only (only storage will burn cycles)
    
### 5.  Contents for V1.0 (in descending order of importance)
1. Hackathon
	a. Supernova
    b. SEA Web3 
2. Grants Program
    a. Developer Grant
    b. Community Grant
3. Community Events
    a. What’s happening with DFINITY team
	b. What’s happening in the 3P IC communities and projects
4. Links to education videos
5. Chinese technical documentation
	a.  Chinese glossary
    b.  Links to translated whitepapers/wiki articles from IC communities
    c.  Release announcements (ie. v0.9.2 to v.0.9.3.. etc)
6. Tech demos
	a. From DFINITY Web3 Gaming team
	b. From the IC community
7.  Dashboard of Internet Computer
	  [https://dashboard.internetcomputer.org/](https://dashboard.internetcomputer.org/)
8. Where to find DFINITY team
	a. Developer Forum
	b. Twitter
	c. Telegram
	d. Mailing list
	e. Websites
9.  Useful links (catch-all)
	a. Major IC communities
	b. Grants Program
    c. Community Events

### 6. Sitemap
1. Landing page
	a.  Hackathon
	b.  Grants Program
	c.  Community Events
2.  Menu 
	a.  Educational videos
	b. Technical documentation
	c. Tech demos
	d. Where to find us
	e. Useful link

### 7.  Search Engine Optimization (SEO)
1. The site name (ic123.xyz) is currently managed by godaddy.com
2. Herbert to transfer this domain to Google Domains Service, which is the only domain service provider that can provide 301 re-direct service AUTOMATICALLY for every file in a folder
3. The expected result: 
	1.  ic123.xyz/article01.html will be redirected to xxx-xxx-xxx-xxx.ic0.app/article01.html
	2.  ic123.xyz/article02.html will be redirected to xxx-xxx-xxx-xxx.ic0.app/article02.html
	3.  ic123.xyz/articleXYZ.html will be redirected to xxx-xxx-xxx-xxx.ic0.app/articleXYZ.html
    
4. The domain service provider used by dfinity.org does not have this function, therefore dfinity.org still remains on AWS server and cannot be migrated to IC
5. Google Search will target everything under the hood for ic123.xyz , and Google Domain Service will do 301 re-direct for every article under ic123.xyz to the canister
6. v1.0 will use raw.ic0.app rather than ic0.app to avoid the unnecessary installation of service worker
    
### 8.  Deployment of the site
1.  [https://github.com/zire/dfinity-intro](https://github.com/zire/dfinity-intro) (private)
2.  Only production repo, no staging/testing repo for now, for maximum agility
