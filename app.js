// Select the section with an id of container without using querySelector.
const container1 = document.getElementById('container');

// Select the section with an id of container using querySelector.
const container2 = document.querySelector('#container');

// Select all of the list items with a class of “second”.
const listItems = document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdLiOfOl = document.querySelector('ol > li.third');

// Give the section with an id of container the text “Hello!”.
container1.textContent = 'Hello!';

// Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');

// Remove the class main on the div with a class of footer.
footer.classList.remove('main');

// Create a new li element.
const newLi = document.createElement('li');

// Give the li the text “four”.
newLi.textContent = 'four';

// Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olListItems = document.querySelectorAll('ol > li');
for (let li of olListItems) {
  li.style.backgroundColor = 'green';
}

// Remove the div with a class of footer
footer.remove();