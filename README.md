# Alex Iliarski - Personal Website

🌐 **Live Site**: [https://alex-iliarski.github.io](https://alex-iliarski.github.io)

## Overview

This is my personal portfolio website showcasing my skills, experience, education, projects, and contact information. Built with modern web technologies and designed with a clean, responsive interface.

## Features

- ✨ **Modern Design**: Clean and professional interface with smooth animations
- 📱 **Fully Responsive**: Optimized for all device sizes (desktop, tablet, mobile)
- 🎨 **Custom Styling**: Beautiful gradient backgrounds and interactive elements
- ⚡ **Fast Performance**: Lightweight and optimized for quick loading
- 🔍 **SEO Friendly**: Proper meta tags and semantic HTML structure
- 📄 **Downloadable Resume**: Direct link to download PDF resume

## Sections

- **Home/Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Brief introduction and background
- **Experience**: Timeline of professional work experience
- **Education**: Academic qualifications and achievements
- **Skills**: Technical skills organized by category
- **Projects**: Featured projects with descriptions and tech stacks
- **Contact**: Contact information and social media links

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Interactive features and smooth scrolling
- **Google Fonts**: Inter font family for clean typography

## Customization Guide

### Updating Personal Information

1. **Hero Section** (index.html, lines ~30-45):
   - Update name, title, and description
   - Modify call-to-action button text/links

2. **About Section** (index.html, lines ~48-60):
   - Replace with your own story and background

3. **Experience Section** (index.html, lines ~63-95):
   - Add/modify timeline items with your work history
   - Update company names, dates, and responsibilities

4. **Education Section** (index.html, lines ~98-115):
   - Update degree information, university, and graduation year

5. **Skills Section** (index.html, lines ~118-165):
   - Modify skill tags to match your expertise
   - Add or remove skill categories as needed

6. **Projects Section** (index.html, lines ~168-235):
   - Replace project cards with your own projects
   - Update GitHub and live demo links
   - Modify tech stack tags

7. **Contact Section** (index.html, lines ~238-280):
   - Update email address
   - Update social media profile links (GitHub, LinkedIn)

### Color Customization

Edit the CSS variables in `styles.css` (lines 1-15) to change the color scheme:

```css
:root {
    --primary-color: #3b82f6;      /* Main brand color */
    --secondary-color: #8b5cf6;     /* Accent color */
    --text-primary: #1e293b;        /* Main text color */
    /* ...modify other colors as needed */
}
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add navigation link if needed
4. Update JavaScript if interactive features are required

## Deployment

This website is designed to be deployed on **GitHub Pages**:

1. Push your changes to the `main` branch
2. Go to repository Settings > Pages
3. Set source to "Deploy from branch"
4. Select `main` branch and `/(root)` folder
5. Save and wait for deployment (usually takes 1-2 minutes)

Your site will be available at: `https://[your-username].github.io`

## Local Development

To view the website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/alex-iliarski/alex-iliarski.github.io.git
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add contact form with backend integration
- [ ] Implement dark mode toggle
- [ ] Add blog section
- [ ] Include testimonials section
- [ ] Add more interactive animations
- [ ] Integrate analytics (Google Analytics)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: your.email@example.com
- **GitHub**: [@alex-iliarski](https://github.com/alex-iliarski)
- **LinkedIn**: [Your Profile](https://linkedin.com/in/alex-iliarski)

---

**Built with ❤️ by Alex Iliarski**
