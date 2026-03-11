// Importer les dépendances
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Initialiser l'application Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (conditions de sécurité)
app.use(cors()); // Permet les requêtes cross-origin
app.use(express.json()); // Permet de parser le JSON dans le body des requêtes
app.use(express.static('public')); // Servir les fichiers statiques (pour le front)

// Importer les routes
const todoRoutes = require('./routes/todoRoutes');

// Utiliser les routes
app.use('/api/todos', todoRoutes);

// Route de base pour tester que le serveur tourne
app.get('/', (req, res) => {
    res.send('API Todo List fonctionne !');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});