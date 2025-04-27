# DEREKFX Website Management Guide

## Website Overview

Congratulations on your new DEREKFX trading signals website! This guide will help you understand how to manage and update your website.

**Website URL:** [https://nlijtpiu.manus.space](https://nlijtpiu.manus.space)

Your website includes:
- Homepage with video section
- Services page with pricing packages
- About page with team information
- Contact page with contact form
- Telegram page with subscription options and payment integration
- Admin panel for easy content management

## Accessing the Admin Panel

1. Go to [https://nlijtpiu.manus.space/admin](https://nlijtpiu.manus.space/admin)
2. Login with the following credentials:
   - Username: `admin`
   - Password: `password`
3. After logging in, click "Open Admin Panel" to access all editing features

**Important:** For security reasons, please change the default password as soon as possible.

## Managing Website Content

### Updating the Video

1. In the Admin Panel, go to the "Video Settings" tab
2. Enter the embed URL of your video:
   - For YouTube: `https://www.youtube.com/embed/VIDEO_ID`
   - For Vimeo: `https://player.vimeo.com/video/VIDEO_ID`
3. Click "Save Changes" to update your video

### Updating Telegram Links

1. In the Admin Panel, go to the "Telegram Links" tab
2. Enter your Telegram channel username (with or without the @ symbol)
3. If you have a private channel, enter the invite link
4. Click "Save Changes" to update your Telegram information

### Editing Website Content

1. In the Admin Panel, go to the "Content Editor" tab
2. Update the website title, description, and contact information
3. Edit your social media links
4. Click "Save Changes" to update your website content

### Managing Subscription Plans

1. In the Admin Panel, go to the "Payment Settings" tab
2. Update the pricing and descriptions for each subscription plan
3. Click "Save Changes" to update your subscription plans

## Payment Gateway Integration

The current implementation simulates the payment process for demonstration purposes. To fully integrate a payment gateway, follow these steps:

### Stripe Integration (Recommended)

1. Sign up for a [Stripe account](https://stripe.com)
2. In your Stripe Dashboard, get your API keys:
   - Publishable Key
   - Secret Key
3. Create products and pricing plans in Stripe that match your website subscription plans
4. Hire a developer to update the payment integration code with your Stripe API keys

### PayPal Integration (Alternative)

1. Sign up for a [PayPal Business account](https://www.paypal.com/business)
2. Get your PayPal API credentials
3. Hire a developer to update the payment integration code with your PayPal API credentials

## Customizing Your Website

### Changing Colors

The website uses a color scheme based on your logo. If you want to change the colors:

1. Edit the `/src/app/globals.css` file
2. Update the color variables in the `:root` section:
   ```css
   :root {
     --primary-bg: #2e2863;
     --secondary: #462e7c;
     --accent: #5f2a83;
     --highlight-1: #30317c;
     --highlight-2: #43439b;
     --text-light: #ffffff;
     --text-dark: #121212;
   }
   ```

### Adding New Pages

To add new pages to your website, you'll need to:

1. Create a new file in the `/src/app/` directory (e.g., `/src/app/new-page/page.tsx`)
2. Add the page content using the existing pages as templates
3. Update the navigation menu in `/src/components/Navbar.tsx` to include the new page

## Technical Information

Your website is built with:
- Next.js (React framework)
- Tailwind CSS (styling)
- TypeScript (programming language)

The website structure:
- `/src/app/` - Pages
- `/src/components/` - Reusable components
- `/public/` - Static assets (images, etc.)

## Getting Help

If you need assistance with your website:

1. For basic content updates, use the Admin Panel
2. For technical issues or advanced customization, consult with a web developer
3. For hosting or domain-related questions, contact your hosting provider

## Backup and Security

It's recommended to:
1. Regularly backup your website code and content
2. Change the admin password regularly
3. Keep your website and dependencies updated

---

This guide covers the basics of managing your DEREKFX website. For more advanced customization or technical support, please consult with a web developer.
