"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institutosController_1 = require("../controllers/institutosController");
class InstitutosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', institutosController_1.institutosController.list);
        this.router.get('/:id', institutosController_1.institutosController.listOne);
        this.router.post('/create', institutosController_1.institutosController.create);
        this.router.put('/actualizar/:idInstituto', institutosController_1.institutosController.actualizar);
        this.router.delete('/eliminar/:idInstituto', institutosController_1.institutosController.eliminar);
    }
}
const institutosRoutes = new InstitutosRoutes();
exports.default = institutosRoutes.router;
