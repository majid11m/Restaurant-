const foodItems = document.querySelectorAll('.food-item');
const tables = document.querySelectorAll('.table');

foodItems.forEach(item => {
    item.addEventListener('click', () => {
        const color = item.getAttribute('data-color');
        item.style.color = color;
    });
});

tables.forEach(table => {
    table.addEventListener('click', () => {
        // Handle table selection here
        // For example, display a message or take further action
        console.log(Table ${table.textContent} selected);
    });
});
