# Rodrigo Barba - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Bilingual Support**: English and Spanish
- **Dark Theme**: Sleek dark design with vibrant green accents
- **Responsive Design**: Works perfectly on all devices
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS 4
- **Smooth Animations**: Hover effects and transitions
- **SEO Optimized**: Meta tags and Open Graph support

## 🖼️ Adding Your Portfolio Images

To populate your portfolio with images from your current site at [http://rodrigobarba.coloratto.com/](http://rodrigobarba.coloratto.com/), follow these steps:

### 1. Profile Image

- **File**: `public/images/profile.jpg`
- **Size**: Recommended 400x400px or larger
- **Format**: JPG, PNG, or WebP
- **Content**: Your professional headshot or profile photo

### 2. Project Images

- **File**: `public/images/project1.jpg` (E-commerce Platform)
- **File**: `public/images/project2.jpg` (Mobile App Design)
- **File**: `public/images/project3.jpg` (Dashboard Interface)
- **Size**: Recommended 800x450px (16:9 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Content**: Screenshots or mockups of your actual projects

### 3. Image Sources

You can extract images from your current portfolio by:

1. Right-clicking on images at [http://rodrigobarba.coloratto.com/](http://rodrigobarba.coloratto.com/)
2. Selecting "Save image as..."
3. Renaming them according to the file structure above
4. Placing them in the `public/images/` folder

### 4. Customizing Project Content

Update the project descriptions in `src/app/page.tsx` to match your actual work:

- Project titles
- Descriptions
- Technology tags
- Image sources

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── images/          # Add your portfolio images here
│       ├── profile.jpg   # Your profile photo
│       ├── project1.jpg  # Project 1 screenshot
│       ├── project2.jpg  # Project 2 screenshot
│       └── project3.jpg  # Project 3 screenshot
├── src/
│   └── app/
│       ├── page.tsx      # Main portfolio page
│       ├── layout.tsx    # Root layout
│       └── globals.css   # Global styles
└── README.md
```

## 🎨 Customization

- **Colors**: Update the primary color `#beff48` in the CSS variables
- **Content**: Modify the content object in `page.tsx` for both languages
- **Layout**: Adjust spacing and grid layouts in the Tailwind classes
- **Images**: Replace placeholder images with your actual portfolio work

## 🌐 Deployment

The portfolio is ready to deploy to:

- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## 📱 Responsive Design

The portfolio automatically adapts to:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons (SVG)
- **Fonts**: Geist Sans & Mono
- **Deployment**: Ready for Vercel/Netlify

---

Built with ❤️ by Rodrigo Barba
