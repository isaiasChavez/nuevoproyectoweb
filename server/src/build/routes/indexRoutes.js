"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.get('/instituto/', (req, res) => res.send('probando instituto'));
        this.router.get('/carrera/', (req, res) => res.send('probando carrera'));
        this.router.get('/materia/', (req, res) => res.send('probando materia'));
        this.router.get('/periodo/', (req, res) => res.send('probando materia'));
        this.router.get('/plan/', (req, res) => res.send('probando materia'));
        this.router.get('/profesorYMateria/', (req, res) => res.send('probando materia'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
