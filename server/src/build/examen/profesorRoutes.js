"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesorController_1 = require("../controllers/profesorController");
class ProfesorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', profesorController_1.profesorrController.list);
        this.router.get('/:id', profesorController_1.profesorrController.listOne);
        this.router.post('/create', profesorController_1.profesorrController.create);
        this.router.put('/actualizar/:idPlan', profesorController_1.profesorrController.actualizar);
        this.router.delete('/eliminar/:idPlan', profesorController_1.profesorrController.eliminar);
    }
}
const profesorrRoutes = new ProfesorRoutes();
exports.default = profesorrRoutes.router;
