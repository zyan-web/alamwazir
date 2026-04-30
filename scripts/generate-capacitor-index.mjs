import { writeFile } from 'node:fs/promises';
import server from '../dist/server/index.js';

const response = await server.fetch(new Request('https://app.sage.com/'));

if (!response.ok) {
  throw new Error(`Unable to render Capacitor index.html: ${response.status}`);
}

const html = await response.text();
const capacitorHtml = html.replaceAll('href="/assets/', 'href="./assets/').replaceAll('src="/assets/', 'src="./assets/');

await writeFile('dist/client/index.html', capacitorHtml);
console.log('Created dist/client/index.html for Capacitor Android');