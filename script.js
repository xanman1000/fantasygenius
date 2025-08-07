const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', addItem);
input.addEventListener('keyup', e => {
    if (e.key === 'Enter') addItem();
});

function addItem() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.className = 'todo-item';
    li.textContent = text;

    const remove = document.createElement('span');
    remove.textContent = '✖';
    remove.className = 'remove-btn';
    li.appendChild(remove);

    list.appendChild(li);
    input.value = '';
}

list.addEventListener('click', e => {
    if (e.target.classList.contains('remove-btn')) {
        const item = e.target.parentElement;
        item.classList.add('remove');
        item.addEventListener('animationend', () => item.remove());
    } else if (e.target.classList.contains('todo-item')) {
        e.target.classList.toggle('completed');
    }
});
