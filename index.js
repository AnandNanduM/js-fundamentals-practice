// Function to handle navigation menu clicks
function handleMenuClick(event) {
    // Prevent default behavior of link
    event.preventDefault();

    // Get the href attribute of the clicked link
    const href = event.target.getAttribute('href');

    // Load the content of the linked page into the main section
    fetch(href)
        .then(response => response.text())
        .then(html => {
            document.querySelector('main').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}

// Function to initialize the page
function initPage() {
    // Add click event listener to navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', handleMenuClick);
    });

    // Log a message when the page loads
    console.log('Page loaded!');
}

// Initialize the page when DOM content is loaded
document.addEventListener('DOMContentLoaded', initPage);

function copyText(preId, buttonId) {
    // Select the text within the <pre> tag
    var textToCopy = document.getElementById(preId);
    var range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Change button text to "Copied"
    var button = document.getElementById(buttonId);
    button.textContent = 'Copied';

    // Change button color to green
    button.classList.add('copied');

    // Revert button text and color after 3 seconds
    setTimeout(function() {
        button.textContent = 'Copy';
        button.classList.remove('copied');
    }, 3000);
}
