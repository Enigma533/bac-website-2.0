# BAC Website

Link to website - [bac.moe](https://bac.moe/) \
Built on [next.js](https://nextjs.org/) and hosted on [Vercel](https://vercel.com) \
Previous repo (deprecated): https://github.com/BangaloreAnimeClub/bac-website 

### Navigating the code

- The content for blogs, articles, and event announcements are in [/content](https://github.com/BangaloreAnimeClub/bac-website-2.0/tree/main/content), in markdown (MDX) files
- The webpages are present in [/app](https://github.com/BangaloreAnimeClub/bac-website-2.0/tree/main/app), in the respective directories
- Components and UI elements are defined in [/components](https://github.com/BangaloreAnimeClub/bac-website-2.0/tree/main/components)
- Images are added in [/public/images](https://github.com/BangaloreAnimeClub/bac-website-2.0/tree/main/public/images) in appropriate directories

## Requested features / updates

(in no particular order)
- **Search**
  - A _search bar/button_ at the website navigation bar, that takes user queries as input and searches through, say, the page/blog titles and returns the top results.
  - There is an official [doc/tutorial](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination) related to this which may be helpful.
 
- **Events Calendar**
  - A calendar page at bac.moe/calendar that displays the upcoming BAC events or other animanga events in Bengaluru.
  - It maybe in a calendar format, or a timeline-like format. Design suggestions are welcome, too!
 
- **Editorial Section**
  - A redesign of the current blog section at [bac.moe/blog](https://bac.moe/blog).
  - Basically split the blog section into different subcategories, such as - anime spotlights, manga spotlights, long-form blogs on animanga topics, post-event blogs/reports, and other types of blogs. Inside each subcategory, we'll have the list of blogs of that kind.
  - _Motivation:_ With an increasing number of blogs, it's becoming harder for people who are navigating bac.moe for the first time, to find content that _they_ may find interesting. We do have _tags_, but that also becomes cumbersome with a larger number of blogs. Some kind of structure is required for bac.moe/blog.
 
If you are interested in contributing to any of these features, please reach out to _Aravind_ from the _[BAC] Tech_ WhatsApp group. When done making the changes locally, and if the changes look good on the preview deployments, submit your PR for review. Again, reach out to _Aravind_ for any clarifications/suggestions!
