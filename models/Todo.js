// On simule une base de données avec un tableau en mémoire
let todos = [
    { id: 1, title: 'Test SEOMANIACK en 72h', completed: true },
    { id: 2, title: "Création d'une API RESTfull avec Node.js/express.JS", completed: false },
    { id: 3, title: 'DIOUF Le Codeur Pro', completed: false }
];

// Fonction pour générer un nouvel ID
const getNextId = () => {
    return todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
};

module.exports = {
    getAll: () => todos,
    getById: (id) => todos.find(t => t.id === parseInt(id)),
    create: (todoData) => {
        const newTodo = {
            id: getNextId(),
            title: todoData.title,
            completed: todoData.completed || false
        };
        todos.push(newTodo);
        return newTodo;
    },
    update: (id, updatedData) => {
        const index = todos.findIndex(t => t.id === parseInt(id));
        if (index === -1) return null;
        
        todos[index] = { ...todos[index], ...updatedData };
        return todos[index];
    },
    delete: (id) => {
        const index = todos.findIndex(t => t.id === parseInt(id));
        if (index === -1) return false;
        
        todos.splice(index, 1);
        return true;
    }
};