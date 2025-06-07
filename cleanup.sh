#!/usr/bin/env bash
set -e

echo "🚀 Cleaning up React front-end…"

# 1. Delete Firebase & sample data files
rm -f src/firebase.js
rm -f src/blogData.js
rm -f src/analytics.js
rm -f src/openaiService.js

# 2. Remove old form component
rm -f src/components/FormComponent.js src/components/FormComponent.css

# 3. Prune unused UI bits
rm -f src/components/CalendlyEmbed.js
rm -f public/Subprime_Borrower_Guide_Personalized.pdf
rm -f public/ram.png

# 4. Delete duplicate or deprecated pages
rm -f src/components/ScheduleAppointmentPage.js src/components/ScheduleAppointmentPage.css

# 5. Leave only the core components; delete everything else under components
find src/components -maxdepth 1 -type f ! -name Header.js ! -name HomePage.js ! -name BlogListComponent.js \
    ! -name BlogPage.js ! -name AboutPage.js ! -name AppointmentForm.js -delete

# 6. Prune services down to just blogService & formService
rm -f src/services/*.js
mkdir -p src/services
cat > src/services/blogService.js << 'EOF'
import axios from 'axios';
const API = process.env.REACT_APP_API_BASE || '';
export default {
  getBlogs: () => axios.get(\`\${API}/api/blogs\`),
  getBlog:  slug => axios.get(\`\${API}/api/blogs/\${slug}\`)
};
EOF

cat > src/services/formService.js << 'EOF'
import axios from 'axios';
const API = process.env.REACT_APP_API_BASE || '';
export default {
  submitForm: data => axios.post(\`\${API}/api/forms\`, data)
};
EOF

# 7. Clean up public/
find public -maxdepth 1 ! -name index.html ! -name favicon.ico ! -name favicon.* \
    ! -name manifest.json ! -name robots.txt -delete

# 8. Update package.json: set proxy and remove Firebase scripts
npx json -I -f package.json \
  -e 'this.proxy="http://localhost:4001"' \
  -e 'delete this.scripts.fire*'

# 9. Remove installed deps and reinstall only what’s needed
rm -rf node_modules
npm prune
npm install axios react-helmet react-router-dom slugify

echo "✅ Cleanup complete! Now run 'npm start' in one terminal and your Express API in another to test:"
echo "   • Front-end: http://localhost:3000"
echo "   • API:       http://localhost:4001/api/blogs, /api/cars, /api/forms"
