"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profesoresController = void 0;
const database_1 = __importDefault(require("../database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class ProfesoresController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM profesores');
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM Profesores WHERE idProfesor = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Profesor no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let password = req.body.contrasena;
            var salt = bcryptjs_1.default.genSaltSync(10);
            bcryptjs_1.default.compare('prueba', "$2a$10$j87VT9.6v24xKwtXsSdGZe596VTHz5TvhHkfPq4t0hIpzr.bG6FvO", (err, res) => {
                console.log('Compared result', res);
            });
            /*bcrypt.hash(password,salt).then(function(nuevoPassword)
            {
                req.body.contrasena=nuevoPassword;
                const resp = pool.query("INSERT INTO profesores set ?",
    
                [req.body]);
    
                res.json(resp);
            })*/
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProfesor } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE Profesores set ? WHERE idProfesor= ?", [req.body, idProfesor]);
            res.json(resp);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProfesor } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM Profesores WHERE codigo= ${idProfesor}`);
            res.json(resp);
        });
    }
}
exports.profesoresController = new ProfesoresController();
