# Navigation Mapping & Route Structure

## Current Navigation → Next.js Routes

### Main Navigation Menu

#### Home Dropdown
- **Home One** → `/` (index.html)
- **Home Two** → `/home-two` (index-2.html)
- **One Page Style1** → `/one-page` (index-one-page.html)  
- **One Page Style2** → `/one-page-alt` (index2-one-page.html)

#### About
- **About** → `/about` (about.html)

#### Services Dropdown
- **Services** → `/services` (services.html)
- **Agriculture Services** → `/services/agriculture` (agriculture-services.html)
- **Graphic Design** → `/services/graphic-design` (graphic-design.html)
- **Delivery Services** → `/services/delivery` (delivery-services.html)
- **Farming Products** → `/services/farming-products` (farming-products.html)

#### Pages Dropdown
- **Portfolio** → `/portfolio` (portfolio.html)
- **Portfolio Carousel** → `/portfolio/carousel` (portfolio-carousel.html)
- **Portfolio Details** → `/portfolio/details` (portfolio-details.html)
- **Team** → `/team` (team.html)
- **Team Carousel** → `/team/carousel` (team-carousel.html)
- **Team Details** → `/team/details` (team-details.html)
- **Testimonial** → `/testimonials` (testimonial.html)
- **Pricing** → `/pricing` (pricing.html)
- **FAQ** → `/faq` (faq.html)
- **404 Error** → `/404` (404.html)
- **Coming Soon** → `/coming-soon` (coming-soon.html)

#### Blog Dropdown
- **Blog** → `/blog` (blog.html)
- **Blog Carousel** → `/blog/carousel` (blog-carousel.html)
- **Blog List** → `/blog/list` (blog-list.html)
- **Blog Details** → `/blog/[slug]` (blog-details.html)

#### Contact
- **Contact** → `/contact` (contact.html)

## Secondary Navigation Elements

### Header Actions
- **Register** → `/register` (auth functionality)
- **Login** → `/login` (auth functionality)
- **Search** → Search overlay popup
- **Cart** → `/cart` (e-commerce functionality)
- **Sidebar Toggle** → Sidebar panel overlay

### Footer Menu
- **Home** → `/`
- **Pages** → `/pages` (overview page)
- **Services** → `/services`
- **Contact** → `/contact`

### Mobile Navigation
- Same as main navigation
- Additional contact info display
- Social media links

## Route Priority & Implementation Order

### Phase 1 - Core Pages (Essential)
1. `/` - Homepage (✅ partially done)
2. `/about` - About page
3. `/services` - Services overview
4. `/contact` - Contact page

### Phase 2 - Service Pages
1. `/services/agriculture`
2. `/services/graphic-design`
3. `/services/delivery`
4. `/services/farming-products`

### Phase 3 - Portfolio & Team
1. `/portfolio`
2. `/team`
3. `/testimonials`
4. `/pricing`

### Phase 4 - Blog System
1. `/blog`
2. `/blog/[slug]`
3. `/blog/carousel`
4. `/blog/list`

### Phase 5 - Support Pages
1. `/faq`
2. `/404`
3. `/coming-soon`

## Dynamic Content Requirements

### Navigation Data
- Menu items and structure from `site-structure.yaml`
- Active state management
- Responsive behavior rules

### Page Content
- Section components from `content-sections.yaml`
- Layout templates from `page-templates.yaml`
- Asset paths and metadata

### Interactive Elements
- Search functionality
- Contact forms
- Newsletter signup
- Social media integration