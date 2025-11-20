# Kavin Sanjai . S - Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, JavaScript, and powered by Deno on the backend.

## 🚀 Features

- **Modern Dark Theme UI** - Professional design with gradient accents
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero section with call-to-action buttons
  - About section with skills showcase
  - Projects section with 5 featured projects
  - Contact form with backend integration
- **No Framework Dependencies** - Pure HTML5, CSS3, and vanilla JavaScript
- **Deno Backend** - Fast, secure runtime with TypeScript support
- **Persistent Storage** - Contact messages saved to JSON file
- **Form Validation** - Client and server-side validation
- **Smooth Animations** - Professional transitions and hover effects

## 📂 Project Structure

```
Portfolio/
├── public/                 # Frontend files
│   ├── index.html         # Main HTML file
│   ├── css/
│   │   └── style.css      # All styles
│   └── js/
│       └── main.js        # Contact form & interactions
├── data/
│   └── messages.json      # Stores contact form submissions
├── main.ts                # Deno server
└── README.md             # This file
```

## 🛠 Prerequisites

You need to have Deno installed on your system.

### Install Deno

**Windows (PowerShell):**
```powershell
irm https://deno.land/install.ps1 | iex
```

**macOS/Linux:**
```bash
curl -fsSL https://deno.land/install.sh | sh
```

**Verify Installation:**
```bash
deno --version
```

## 🏃‍♂️ Running Locally

1. **Navigate to the project directory:**
   ```powershell
   cd d:\Portfolio
   ```

2. **Run the Deno server:**
   ```powershell
   deno run --allow-net --allow-read --allow-write main.ts
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:8000
   ```

### Command Explanation:
- `--allow-net` - Allows network access for the HTTP server
- `--allow-read` - Allows reading files (HTML, CSS, JS, messages.json)
- `--allow-write` - Allows writing to messages.json

## 📝 Using the Contact Form

1. Fill in all required fields:
   - Name
   - Email (must be valid)
   - Subject
   - Message

2. Click "Send Message"

3. Messages are stored in `data/messages.json` with:
   - Unique ID
   - Timestamp
   - All form data

4. Check stored messages:
   ```powershell
   Get-Content data/messages.json | ConvertFrom-Json | Format-List
   ```

## 🌐 Deployment Options

### Option 1: Deno Deploy (Recommended)

Deno Deploy is the easiest way to deploy Deno applications.

1. **Install Deno Deploy CLI:**
   ```bash
   deno install --allow-all --no-check -r -f https://deno.land/x/deploy/deployctl.ts
   ```

2. **Create account at [dash.deno.com](https://dash.deno.com)**

3. **Link your project:**
   ```bash
   deployctl deploy --project=kavin-portfolio main.ts
   ```

4. **Your site will be live at:**
   ```
   https://kavin-portfolio.deno.dev
   ```

### Option 2: Render

1. Go to [render.com](https://render.com) and sign up

2. Click "New +" → "Web Service"

3. Connect your Git repository (push this code to GitHub first)

4. Configure:
   - **Name:** kavin-portfolio
   - **Runtime:** Docker
   - **Build Command:** Leave empty
   - **Start Command:** 
     ```bash
     deno run --allow-net --allow-read --allow-write main.ts
     ```

5. Click "Create Web Service"

### Option 3: Railway

1. Go to [railway.app](https://railway.app)

2. Click "New Project" → "Deploy from GitHub repo"

3. Select your repository

4. Add environment configuration:
   - Runtime: Deno
   - Start Command: `deno run --allow-net --allow-read --allow-write main.ts`

5. Deploy automatically

## 🔧 Customization

### Change Personal Information

Edit `public/index.html`:
- Update name in hero section
- Modify about text
- Change project details
- Update GitHub links

### Modify Styling

Edit `public/css/style.css`:
- Change color scheme in `:root` variables
- Adjust layout and spacing
- Modify animations

### Update Projects

In `public/index.html`, find the projects section and update:
- Project titles
- Descriptions
- Tech stack tags
- GitHub and demo links

### Change Port

In `main.ts`, modify:
```typescript
const PORT = 8000; // Change to your preferred port
```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## 🔒 Security Features

- Input validation on both client and server
- Email format validation
- XSS protection through proper escaping
- CORS enabled for API endpoints
- Sanitized user inputs before storage

## 🐛 Troubleshooting

### Server won't start
- Check if port 8000 is available
- Ensure Deno is properly installed
- Verify file permissions

### Contact form not working
- Check browser console for errors
- Ensure backend is running
- Verify `data/messages.json` has write permissions

### Styles not loading
- Clear browser cache
- Check network tab in DevTools
- Ensure file paths are correct

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Contact

**Kavin Sanjai . S**
- Email: kavinsanjais1712@gmail.com
- GitHub: [@kavinsanjai](https://github.com/kavinsanjai)
- LinkedIn: [kavin-sanjai](https://linkedin.com/in/kavin-sanjai-80b407286)
- LeetCode: [@kavinsanjai](https://leetcode.com/u/kavinsanjai/)

---

Built with ❤️ using Deno and pure web technologies
