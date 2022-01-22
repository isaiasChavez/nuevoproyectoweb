"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materiaController_1 = require("../controllers/materiaController");
class MateriasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', materiaController_1.materiaController.list);
        this.router.get('/:id', materiaController_1.materiaController.listOne);
        this.router.post('/create', materiaController_1.materiaController.create);
        this.router.put('/actualizar/:idMateria', materiaController_1.materiaController.actualizar);
        this.router.delete('/eliminar/:idMateria', materiaController_1.materiaController.eliminar);
    }
}
const materiasRoutes = new MateriasRoutes();
exports.default = materiasRoutes.router;
