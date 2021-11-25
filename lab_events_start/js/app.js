document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

document.querySelector('#new-item-form').addEventListener('submit', handleForm);

const deleteButton = document.createElement('button');
deleteButton.textContent = "Delete";
deleteButton.id = "Delete";
const body = document.querySelector('body')
const h1tag = document.querySelector('h1')
body.insertBefore(deleteButton, h1tag);

document.querySelector('#Delete').addEventListener('click', handleDelete);


})


const handleForm = function () {
  event.preventDefault();
  console.log('form submitted')
  const newListItem = document.createElement('li');
  const newTitle = document.createElement('h3');
  const newAuthor = document.createElement('h4');
  const newCat = document.createElement('h5');
  
  newListItem.classList.add('item');
  newTitle.textContent = this.title.value;
  newAuthor.textContent = this.author.value;
  newCat.textContent = this.category.value;
  
  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);
  
  newListItem.appendChild(newTitle);
  newListItem.appendChild(newAuthor);
  newListItem.appendChild(newCat);
  
  document.querySelector('#new-item-form').reset();
}

const handleDelete = function (){
  document.querySelector('ul').innerHTML = "";
}