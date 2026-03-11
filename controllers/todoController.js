const Todo = require('../models/Todo');

// Récupérer toutes les tâches
const getAllTodos = (req, res) => {
    try {
        const todos = Todo.getAll();
        res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erreur serveur',
            error: error.message
        });
    }
};

// Récupérer une tâche par ID
const getTodoById = (req, res) => {
    try {
        const todo = Todo.getById(req.params.id);
        
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: `Tâche avec l'ID ${req.params.id} non trouvée`
            });
        }
        
        res.status(200).json({
            success: true,
            data: todo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erreur serveur',
            error: error.message
        });
    }
};

// Créer une nouvelle tâche
const createTodo = (req, res) => {
    try {
        const { title, completed } = req.body;
        
        // Validation : le titre est requis
        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Le champ "title" est requis'
            });
        }
        
        const newTodo = Todo.create({ title, completed });
        
        res.status(201).json({
            success: true,
            message: 'Tâche créée avec succès',
            data: newTodo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erreur serveur',
            error: error.message
        });
    }
};

// Mettre à jour une tâche
const updateTodo = (req, res) => {
    try {
        const { title, completed } = req.body;
        const updatedTodo = Todo.update(req.params.id, { title, completed });
        
        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: `Tâche avec l'ID ${req.params.id} non trouvée`
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Tâche mise à jour avec succès',
            data: updatedTodo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erreur serveur',
            error: error.message
        });
    }
};

// Supprimer une tâche
const deleteTodo = (req, res) => {
    try {
        const deleted = Todo.delete(req.params.id);
        
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: `Tâche avec l'ID ${req.params.id} non trouvée`
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Tâche supprimée avec succès'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erreur serveur',
            error: error.message
        });
    }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};