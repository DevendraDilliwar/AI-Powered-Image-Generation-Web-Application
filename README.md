/app
│
├── /api
│   ├── /crawl
│   │   └── route.js              # POST → Crawl all URLs of a domain
│   │
│   ├── /scraper
│   │   └── route.js              # POST → Scrape images from a single URL
│   │
│   ├── /image-search
│   │   └── route.js              # POST → Upload image & reverse image search
│   │
│   └── /history
│       ├── toggle-image.js       # POST → Check/uncheck image
│       ├── toggle-page.js        # POST → Check/uncheck page & images
│       ├── image-history.js      # GET → History for Image Search tab
│       ├── url-history.js        # GET → History for URL Search tab
│       └── website-history.js    # GET → History for Website Search tab
│
├── /components
│   ├── /Tabs
│   │   ├── MainSearchPage.jsx         # Parent page with 3 tabs
│   │   ├── ImageSearchTab.jsx         # Feature 1
│   │   ├── URLSearchTab.jsx           # Feature 2
│   │   └── WebsiteSearchTab.jsx       # Feature 3
│   │
│   ├── /Results
│   │   ├── ImageSearchResult.jsx      # Feature 1 result container
│   │   ├── URLSearchResult.jsx        # Feature 2 result container
│   │   └── WebsiteSearchResult.jsx    # Feature 3 result container
│   │
│   ├── /History
│   │   ├── ImageHistory.jsx           # History for Image Search (same layout as result)
│   │   ├── URLHistory.jsx             # History for URL Search (same layout as result)
│   │   └── WebsiteHistory.jsx         # History for Website Search (same layout as result)
│   │
│   └── /Reusable
│       ├── ImageTable.jsx             # Reusable table for image list
│       └── ImageDetailsTable.jsx      # Reusable table for image match/details
│
├── /lib
│   ├── db.js                          # Database connection
│   ├── reverseImageSearch.js          # RapidAPI integration
│   ├── scraper.js                     # Scraper service
│   └── crawler.js                     # Domain crawler service
│
└── /styles
    └── globals.css                    # Global CSS
