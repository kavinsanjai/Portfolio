# Profile Image Setup

## Current Status
A placeholder SVG image is currently being used at `/public/images/profile.jpg`

## To Add Your Actual Profile Photo:

1. **Save your profile photo** (the one you provided) as:
   - Location: `d:\Portfolio\public\images\profile.jpg`
   - This will replace the placeholder

2. **Or rename and use the existing image**:
   ```powershell
   # If you have the image file in your Portfolio folder
   Copy-Item "d:\Portfolio\[YOUR_IMAGE_NAME].jpg" "d:\Portfolio\public\images\profile.jpg"
   ```

3. **Recommended image specifications**:
   - Format: JPG or PNG
   - Minimum size: 280x280 pixels (square)
   - Recommended: 560x560 pixels or higher (for retina displays)
   - The image will be automatically cropped to fit a square container

## Image Styling
- The profile image has a rounded border with gradient effect
- Hover animation that lifts the image
- Gradient border that expands on hover
- Responsive design that adapts to mobile screens

Once you replace the placeholder file, refresh your browser to see your actual photo!
