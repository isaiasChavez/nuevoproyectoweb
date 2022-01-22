"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesorYMateriaController_1 = require("../controllers/profesorYMateriaController");
class ProfesorYMateriaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', profesorYMateriaController_1.profesorYMateriaController.list);
        this.router.get('/:id', profesorYMateriaController_1.profesorYMateriaController.listOne);
        this.router.post('/create', profesorYMateriaController_1.profesorYMateriaController.create);
        this.router.put('/actualizar/:idPlan', profesorYMateriaController_1.profesorYMateriaController.actualizar);
        this.router.delete('/eliminar/:idPlan', profesorYMateriaController_1.profesorYMateriaController.eliminar);
    }
}
const pprofesorYMateriaRoutes = new ProfesorYMateriaRoutes();
exports.default = pprofesorYMateriaRoutes.router;
