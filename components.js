/**
 * Adds a back button to the page.
 * @param {string} targetUrl - The URL to navigate to (default: 'index.html')
 * @param {string} label - The label for the button (default: 'Back')
 */
function addBackButton(targetUrl = 'index.html', label = 'Back') {
  // Ensure body has relative positioning for absolute placement of button
  document.body.classList.add('relative');

  const button = document.createElement('a');
  button.href = targetUrl;
  button.className = 'absolute top-6 left-6 text-gray-500 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 font-medium';
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg>
    ${label}
  `;
  
  document.body.prepend(button);
}
