
const container = document.createElement('div');
container.classList.add('container');

const content = document.createElement('div');
content.classList.add('content');

const heading1 = document.createElement('h1');
heading1.textContent = '404';

const heading2 = document.createElement('h2');
heading2.textContent = 'Page Not Found';

const paragraph = document.createElement('p');
paragraph.textContent = "Oops! The page you're looking for does not exist.";

const link = document.createElement('a');
link.href = '/';
link.textContent = 'Return to Home Page';

// Append elements to the DOM
content.appendChild(heading1);
content.appendChild(heading2);
content.appendChild(paragraph);
content.appendChild(link);
container.appendChild(content);
document.body.appendChild(container);

// Apply styles dynamically
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.height = '100vh';

content.style.textAlign = 'center';

heading1.style.fontSize = '100px';
heading1.style.color = '#e74c3c';
heading1.style.marginBottom = '20px';

heading2.style.fontSize = '36px';
heading2.style.color = '#333';
heading2.style.marginBottom = '20px';

paragraph.style.fontSize = '18px';
paragraph.style.color = '#555';
paragraph.style.marginBottom = '30px';

link.style.display = 'inline-block';
link.style.padding = '10px 20px';
link.style.backgroundColor = '#3498db';
link.style.color = '#fff';
link.style.textDecoration = 'none';
link.style.borderRadius = '5px';
link.style.transition = 'background-color 0.3s';

link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#2980b9';
});

link.addEventListener('mouseout', () => {
    link.style.backgroundColor = '#3498db';
});
