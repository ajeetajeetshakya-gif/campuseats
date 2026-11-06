// server.js
const express = require('express');
const app = express();

app.use(express.json());          // Read JSON request bodies
app.use(express.static('public')); // Serve static frontend files from 'public' folder

// The menu in-memory array
let items = [
  { id: 1, name: 'Veg Thali', price: 90 },
  { id: 2, name: 'Paneer Roll', price: 70 }
];

let nextId = 3;

// GET /items -- List the whole menu
app.get('/items', (req, res) => {
  res.json(items);
});

// GET /items/:id -- One dish, or 404 Not Found
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'not found' });
  res.json(item);
});

// POST /items -- Add a new dish
app.post('/items', (req, res) => {
  const { name, price } = req.body;
  if (!name) return res.status(422).json({ error: 'name required' });

  const item = { 
    id: nextId++, 
    name, 
    price: Number(price) || 0 
  };
  
  items.push(item);
  res.status(201).json(item); // 201 Created
});

app.listen(3000, () => console.log('Catalogue on http://localhost:3000'));