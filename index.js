import React from "react";
import ReactDom from 'react-router-dom'
import Route from './src/routes/user.route'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>
)

//ROTA
// Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
// GET - pega um info
// POST - criar uma info
// PATH - altera parte da info
// DELETE - apaga uma info
// NAME
// FUNCTION (callback)
