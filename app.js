document.getElementById('add-todo').addEventListener('click', function() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('new-todo').value = '';
    }
});
