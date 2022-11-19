import React from "react";
import { createBrowserRouter as Router, Routes, Route } from "react-router-dom";
import express from "express";
import userController from '../controllers/user.controller'
function Route() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<userController/>} />
      </Routes>
    </Router>
  );
}

export default Route;