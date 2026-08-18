import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

function updateRefsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace .png, .jpg, .jpeg with .webp, but only for local paths starting with '/'
  // We use a regex that looks for strings starting with '/' and ending with the extensions.
  // We will be careful not to match 'https://' URLs.
  content = content.replace(/(["'`])(\/[^"'`]+)\.(png|jpg|jpeg)\1/gi, '$1$2.webp$1');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      updateRefsInFile(fullPath);
    }
  }
}

console.log('Starting update refs...');
processDirectory(srcDir);
console.log('Done.');
