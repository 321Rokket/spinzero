# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a static HTML landing page project using the "Baosh" responsive HTML template. The project contains static HTML files with associated CSS, JavaScript, and PHP contact form functionality.

## Project Structure
```
templates/baosh-package-files/1_baosh-html-files/
├── assets/                 # Static assets
│   ├── css/               # Stylesheets (style.css, responsive.css)
│   ├── images/            # All images organized by category
│   ├── js/                # Custom JavaScript (custom.js)
│   ├── vendors/           # Third-party libraries (Bootstrap, jQuery, etc.)
│   └── inc/               # PHP includes (PHPMailer, sendemail.php)
├── *.html                 # HTML pages (index.html, about.html, etc.)
docs/                      # Documentation directory (empty)
schemas/                   # Schema files directory (empty)
tests/                     # Test directory (empty)
```

## Technology Stack
- **Frontend**: Static HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: Bootstrap 5
- **JavaScript Libraries**: jQuery 3.6.0, Swiper, AOS animations, GSAP
- **Backend**: PHP with PHPMailer for contact forms
- **Deployment**: Docker support via Dockerfile

## Key Files
- `templates/baosh-package-files/1_baosh-html-files/index.html` - Main landing page
- `templates/baosh-package-files/1_baosh-html-files/assets/css/style.css` - Primary stylesheet
- `templates/baosh-package-files/1_baosh-html-files/assets/js/custom.js` - Custom JavaScript functionality
- `templates/baosh-package-files/1_baosh-html-files/assets/inc/sendemail.php` - Contact form processing

## Development Notes
- This is a template-based project with static HTML files
- No package.json or Node.js build process - files are served directly
- PHP contact form requires SMTP configuration in sendemail.php
- All vendor libraries are included locally in assets/vendors/
- The project uses jQuery as the primary JavaScript framework

## Contact Form Configuration
The contact form uses PHPMailer and requires SMTP configuration in `assets/inc/sendemail.php`:
- Configure SMTP_EMAIL and SMTP_PASSWORD constants
- Set RECIPIENT_EMAIL for form submissions
- Ensure PHPMailer dependencies are properly included