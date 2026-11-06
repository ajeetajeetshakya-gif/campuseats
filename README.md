# CampusEats Catalogue

A small Node.js and Express app for viewing and adding menu items. The menu is stored in memory and resets when the server restarts.

## Run locally

```sh
npm install
node server.js
```

Open [http://localhost:3000](http://localhost:3000). The API exposes `GET /items`, `GET /items/:id`, and `POST /items`.
