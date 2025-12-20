# Deployment Guide for Cloud9 Smoke Shop

This guide covers deploying your Cloud9 Smoke Shop website to production.

## Prerequisites

Before deploying, ensure you have:
1. A Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Node.js installed (v18 or higher)
3. All dependencies installed (`npm install`)

## Environment Variables

The application requires the following environment variable:

- `GEMINI_API_KEY`: Your Google Gemini API key for the AI chat feature

### Local Development

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Set environment variable in Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `GEMINI_API_KEY` with your API key
   - **Important**: If using `vercel.json` with secret syntax `@gemini_api_key`, create a secret first using `vercel secrets add gemini_api_key your-key`, or simply set `GEMINI_API_KEY` as a regular environment variable in the dashboard

4. Redeploy for changes to take effect

### Option 2: Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

3. Set environment variable in Netlify dashboard:
   - Go to Site settings > Environment variables
   - Add `GEMINI_API_KEY` with your API key

4. Trigger a new deployment for changes to take effect

### Option 3: Static Hosting (GitHub Pages, etc.)

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

3. Upload the contents of `dist/` to your hosting provider

**Note:** For static hosting without server-side environment variables, you'll need to:
- Either hardcode the API key (not recommended for security)
- Or implement a backend proxy to handle API requests

### Option 4: Custom Server

If deploying to your own server:

1. Build the project:
   ```bash
   npm run build
   ```

2. Serve the `dist/` directory with a web server (nginx, Apache, etc.)

3. Configure environment variables on your server

4. Example nginx configuration:
   ```nginx
   server {
       listen 80;
       server_name cloud9ukiah.com;
       root /path/to/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

## Post-Deployment Checklist

- [ ] Verify the website loads correctly
- [ ] Test age verification gate
- [ ] Test navigation between pages
- [ ] Test AI chat functionality
- [ ] Verify all images load properly
- [ ] Test on mobile devices
- [ ] Check browser console for errors
- [ ] Test contact form (if applicable)
- [ ] Verify business information is correct
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)

## Important Notes

1. **Age Verification**: The site includes an age gate that requires users to verify they are 21+ before accessing content.

2. **API Key Security**: 
   - Never commit `.env.local` to git (it's already in `.gitignore`)
   - Use environment variables in your deployment platform
   - Consider implementing rate limiting for the API

3. **Custom Domain**: Configure your custom domain in your hosting platform's dashboard

4. **SSL Certificate**: Ensure HTTPS is enabled (most platforms provide this automatically)

5. **Analytics**: Consider adding Google Analytics or similar tracking

## Troubleshooting

### Build fails
- Ensure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be v18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### Chat not working
- Verify `GEMINI_API_KEY` is set correctly in environment variables
- Check browser console for API errors
- Verify API key has proper permissions in Google AI Studio

### Pages not loading (404 errors)
- Ensure your hosting platform is configured for SPA routing
- Check that all route redirects go to `index.html`

## Support

For issues or questions:
- Email: hello@cloud9ukiah.com
- Phone: 707-367-2896
