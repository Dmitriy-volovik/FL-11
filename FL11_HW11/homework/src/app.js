let rootNode = document.getElementById('root');
let addBoxIMG = document.getElementById('addBoxIMG');
let newEvent = document.getElementById('newEvent');
let ul = document.getElementById('list');
let inputValue;
const NUMBER_FOR_LOOP = 20;
const MAX_COUNT_OF_LI = 4;
function inputHandler(text) {
  console.log('text - ', text);
  inputValue = text;
  if (inputValue) {
    addBoxIMG.style.color = '#00b4fa';
    addBoxIMG.style.cursor = 'pointer';
    document.getElementById('addBox').disabled = false;
  } else {
    addBoxIMG.style.color = 'rgb(180, 179, 179)';
    addBoxIMG.style.cursor = 'default';
    document.getElementById('addBox').disabled = true;
  }
}

function addActionHandler() {
  let li = document.createElement('li');
  li.className = 'task';
  li.setAttribute('draggable', true);
  let divTitle = document.createElement('div');
  divTitle.className = 'task-description';
  li.appendChild(divTitle);
  let label = document.createElement('label');
  label.className = 'container';
  divTitle.appendChild(label);
  let spanText = document.createElement('span');
  spanText.className = 'task-label';
  spanText.appendChild(document.createTextNode(inputValue));
  label.appendChild(spanText);
  let input = label.appendChild(document.createElement('input'));
  input.type = 'checkbox';
  input.onclick = () => checkboxHandler(event, input);
  let span = document.createElement('span');
  span.className = 'check-mark';
  label.appendChild(span);
  let i = document.createElement('i');
  i.className = 'material-icons';
  i.classList.add('md-30');
  i.classList.add('cursor');
  i.onclick = () => editActionHandler(i);
  i.appendChild(document.createTextNode('create'));
  divTitle.appendChild(i);

  let divSave = document.createElement('div');
  divSave.className = 'edit-action task-edit';
  let inputEvent = document.createElement('input');
  divSave.appendChild(inputEvent);
  let saveI = document.createElement('i');
  saveI.className = 'material-icons md-30 cursor';
  saveI.onclick = () => saveActionHandler(saveI);
  saveI.appendChild(document.createTextNode('save'));
  divSave.appendChild(saveI);
  li.appendChild(divSave);

  let divDelete = document.createElement('div');
  divDelete.className = 'task-delete';
  li.appendChild(divDelete);
  let deleteI = document.createElement('i');
  deleteI.className = 'material-icons md-30 cursor';
  deleteI.onclick = () => deleteActionHandler(deleteI);
  deleteI.appendChild(document.createTextNode('delete'));
  divDelete.appendChild(deleteI);

  ul.appendChild(li);
  document.getElementById('newEvent').value = '';
  document.getElementById('addBox').disabled = true;
  addBoxIMG.style.color = 'rgb(180, 179, 179)';
  addBoxIMG.style.cursor = 'default';
     if (ul.getElementsByTagName('li').length > MAX_COUNT_OF_LI) {
         document.querySelector('.error-notice').style.display = 'block';
         newEvent.disabled = true;
         newEvent.placeholder = '';
         return;
     }
}

function editActionHandler(that) {
  console.log('log - ', that);
  let parentLi = findParent(that, 'task');
  console.log('parent - ', parentLi);
  let taskDescription = parentLi.querySelector('.task-description');
  taskDescription.style.display = 'none';
  let taskEdit = parentLi.querySelector('.task-edit');
  taskEdit.style.display = 'block';
}

function saveActionHandler(that) {
  let name = findParent(that, 'task-edit').querySelector('input').value;
  let parentLi = findParent(that, 'task');
  let taskDescription = parentLi.querySelector('.task-description');
  taskDescription.style.display = 'block';
  let label = taskDescription.querySelector('.task-label');
  label.innerText = name;

  let taskEdit = parentLi.querySelector('.task-edit');
  taskEdit.style.display = 'none';
}

function deleteActionHandler(that) {
    let parentLi = findParent(that, 'task');
    parentLi.remove();
     if (ul.getElementsByTagName('li').length <= MAX_COUNT_OF_LI) {
         document.querySelector('.error-notice').style.display = 'none';
         newEvent.disabled = false;
         newEvent.placeholder = 'Add new action';
         return;
     }
}

function checkboxHandler(event, that) {
    if (!that.checked) {
        event.preventDefault();
    }
}

function findParent(element, searchClass) {
  for (let i = 0; i < NUMBER_FOR_LOOP; i++) {
    if (element.classList.contains(searchClass)) {
      return element;
    }
    element = element.parentElement;
  }
}

let dragSrcEl = null;

function handleDragStart(e) {
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);

    this.classList.add('dragElem');
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    this.classList.add('over');

    e.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.

    return false;
}

function handleDragEnter() {
    return null;
}

function handleDragLeave() {
    this.classList.remove('over');
}

function handleDrop(e) {
    // this/e.target is current target element.
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragSrcEl !== this) {
        this.parentNode.removeChild(dragSrcEl);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin', dropHTML);
        let dropElem = this.previousSibling;
        addDnDHandlers(dropElem);

    }
    this.classList.remove('over');
    return false;
}

function handleDragEnd() {
    this.classList.remove('over');
}

function addDnDHandlers(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragenter', handleDragEnter, false)
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('dragleave', handleDragLeave, false);
    elem.addEventListener('drop', handleDrop, false);
    elem.addEventListener('dragend', handleDragEnd, false);
}

let cols = document.querySelectorAll('#list .task');
[].forEach.call(cols, addDnDHandlers);
