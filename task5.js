// 1. Select the section with an id of container without using querySelector.
const container1 = document.getElementById('container');

// 2. Select the section with an id of container using querySelector.
const container2 = document.querySelector('#container');

// 3. Select all of the list items with a class of "second".
const secondListItems = document.querySelectorAll('.second');

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdListItemInOl = document.querySelector('ol .third');

// 5. Give the section with an id of container the text "Hello!".
container1.textContent = 'Hello!';

// 6. Add the class main to the div with a class of footer.
const footerDiv = document.querySelector('.footer');
footerDiv.classList.add('main');

// 7. Remove the class main on the div with a class of footer.
footerDiv.classList.remove('main');

// 8. Create a new li element.
const newLi = document.createElement('li');

// 9. Give the li the text "four".
newLi.textContent = 'four';

// 10. Append the li to the ul element.
const ul = document.querySelector('ul');
ul.appendChild(newLi);

// 11. Loop over all of the lis inside the ol tag and give them a background color of "green".
const olListItems = document.querySelectorAll('ol li');
olListItems.forEach(li => {
    li.style.backgroundColor = 'green';
});

// 12. Remove the div with a class of footer.
const footerToRemove = document.querySelector('.footer');
footerToRemove.remove();
