# Nagesh Portfolio

A modern portfolio website built with Next.js, React, and Tailwind CSS.

## 🚀 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages with custom domain support.

### Automatic Deployment

1. **Push to GitHub**: Every push to the `main` branch will automatically trigger a deployment
2. **GitHub Actions**: The workflow in `.github/workflows/deploy.yml` handles the build and deployment process
3. **Custom Domain**: Update the `CNAME` file in the `public` folder with your custom domain

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

### Setting up Custom Domain

1. **Update CNAME file**: Replace `your-custom-domain.com` in `public/CNAME` with your actual domain
2. **Configure DNS**: Point your domain to GitHub Pages:
   - For apex domain (example.com): Create A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - For subdomain (www.example.com): Create a CNAME record pointing to `username.github.io`
3. **Enable GitHub Pages**: In your repository settings, enable GitHub Pages and set the custom domain

### GitHub Repository Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Add your custom domain in the "Custom domain" field
5. Enable "Enforce HTTPS"

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                 # Utility functions
├── public/              # Static assets
├── styles/              # Global styles
└── .github/workflows/   # GitHub Actions workflows
```

### Technologies Used

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
