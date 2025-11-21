# Contact Form Email Setup

Your contact form is configured to send emails to: **kavinsanjais1712@gmail.com**

## Setup Steps:

### 1. Get Web3Forms API Key (FREE)
1. Visit [https://web3forms.com](https://web3forms.com)
2. Click "Get Started for Free"
3. Enter your email: `kavinsanjais1712@gmail.com`
4. Verify your email
5. Copy your **Access Key**

### 2. Add the API Key to Deno Deploy

#### For Local Development:
Create a `.env` file in your project root:
```bash
WEB3FORMS_KEY=your_access_key_here
```

Then run with:
```bash
deno run --allow-net --allow-read --allow-write --allow-env main.ts
```

#### For Deno Deploy (Production):
1. Go to your project on [dash.deno.com](https://dash.deno.com)
2. Click on **Settings**
3. Scroll to **Environment Variables**
4. Add:
   - **Name**: `WEB3FORMS_KEY`
   - **Value**: `your_access_key_here`
5. Click **Save**
6. Redeploy your project

### 3. Test the Contact Form
1. Visit your deployed site
2. Fill out the contact form
3. Submit
4. You should receive an email at `kavinsanjais1712@gmail.com`

## Alternative: Use FormSubmit (No setup required)

If you want an even simpler solution, I can update the form to use FormSubmit which requires no backend at all!

## Features:
✅ Email notifications to your inbox
✅ Messages stored in `data/messages.json`
✅ Form validation
✅ Spam protection
✅ No cost (Web3Forms free tier: 250 emails/month)

## Troubleshooting:
- If emails aren't arriving, check your spam folder
- Verify the API key is correctly set in environment variables
- Check Deno Deploy logs for any errors
