"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ArticuloYProfesorController_1 = require("../controllers/ArticuloYProfesorController");
class ArticuloYprofesorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ArticuloYProfesorController_1.articuloYProfesorController.list);
        this.router.get('/:id', ArticuloYProfesorController_1.articuloYProfesorController.listOne);
        this.router.post('/create', ArticuloYProfesorController_1.articuloYProfesorController.create);
        this.router.put('/actualizar/:idPlan', ArticuloYProfesorController_1.articuloYProfesorController.actualizar);
        this.router.delete('/eliminar/:idPlan', ArticuloYProfesorController_1.articuloYProfesorController.eliminar);
    }
}
const articuloYprofesorRoutes = new ArticuloYprofesorRoutes();
exports.default = articuloYprofesorRoutes.router;
