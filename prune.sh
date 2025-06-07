#!/usr/bin/env bash
set -e

echo "🧹 Pruning unused components and assets…"

# 1) In src/components, keep only the six core .js files:
cd src/components
rm -f AboutPage.css BlogPage.css HomePage.css AppointmentForm.css ScheduleAppointmentPage.css BlogList.css SinglePost.css
rm -f CalendlyEmbed.js FormComponent.js FormComponent.css BlogComponent.js BlogList.js SinglePost.js ScheduleAppointmentPage.js analytics.js
# (we want: Header.js, HomePage.js, BlogListComponent.js, BlogPage.js, AboutPage.js, AppointmentForm.js, CarListComponent.js, CarDetailPage.js)

# 2) In src/services, you already have blogService.js, carService.js, formService.js—no action needed.

cd ../..

# 3) Clean up public/
cd public
rm -f Subprime_Borrower_Guide_Personalized.pdf _redirects ram.png
# Keep index.html, favicon*, manifest.json, robots.txt, logo*.png

cd ..

echo "✅ Pruned. Now reinstall and start fresh:"
echo "   npm install"
echo "   npm start"
