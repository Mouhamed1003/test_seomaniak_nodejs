# Todo List API - Projet de Test Technique

Une API RESTful simple de gestion de tâches (Todo List) construite avec Node.js et Express dans le cadre du test technique Seomaniak 2026.

## Stack technique

- **Node.js** - Environnement d'exécution
- **Express** - Framework web
- **CORS** - Gestion des requêtes cross-origin
- **Dotenv** - Gestion des variables d'environnement
- **Postman** - Teste des requetes (CRUD) du back-end.

## Routes de l'API

GET /todos  
→ récupérer toutes les tâches

GET /todos/:id  
→ récupérer une tâche par ID

POST /todos  
→ créer une nouvelle tâche

PUT /todos/:id  
→ modifier une tâche

DELETE /todos/:id  
→ supprimer une tâche

## 📁 Structure du projet
├── controllers/
│ └── todoController.js # Logique métier des routes
├── models/
│ └── Todo.js # Modèle de données (simulation mémoire)
├── routes/
│ └── todoRoutes.js # Définition des routes
├── public/
│ └── index.html # Interface de démo
├── server.js # Point d'entrée de l'application
├── .env # Variables d'environnement
├── .gitignore # Fichiers ignorés par Git
└── README.md # Documentation
└── README.txt # details

## Installation

1. Cloner le projet

git clone https://github.com/Mouhamed1003/test_seomaniak_nodejs

2. Installer les dépendances

npm install

3. Lancer le serveur
npm start
nodemon server.js
node server.js
npm run dev

Le serveur démarre sur :

http://localhost:5000
