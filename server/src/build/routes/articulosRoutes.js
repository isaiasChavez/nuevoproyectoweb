"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articulosController_1 = require("../controllers/articulosController");
class ArticulosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', articulosController_1.articulosController.list);
        this.router.get('/:id', articulosController_1.articulosController.listOne);
        this.router.post('/create', articulosController_1.articulosController.create);
        this.router.put('/actualizar/:idPlan', articulosController_1.articulosController.actualizar);
        this.router.delete('/eliminar/:idPlan', articulosController_1.articulosController.eliminar);
    }
}
const articulosRoutes = new ArticulosRoutes();
exports.default = articulosRoutes.router;
