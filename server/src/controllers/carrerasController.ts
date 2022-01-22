import {Request,Response} from 'express';

import pool from '../database';
class CarrerasController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        const respuesta = await pool.query('SELECT * FROM carreras order by codigoCarrera');
        console.log(respuesta);
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        let consulta='SELECT * FROM carreras WHERE idCarrera = '+id;
        const respuesta = await pool.query(consulta);
        console.log(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Carrera no encontrado'});
        }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO carreras set ?",
        [req.body]);
        res.json(resp);
        }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { idCarrera } = req.params;
        console.log(idCarrera);
        const resp = await pool.query("UPDATE carreras set ? WHERE idCarrera = ?", [req.body, idCarrera]);
        res.json(resp);
        }
    public async eliminar(req: Request, res: Response): Promise<void> {
         const { idCarrera } = req.params;
         const resp = await pool.query(`DELETE FROM carreras WHERE idCarrera= ${idCarrera}`);
         res.json(resp);
        }       
        public async getCarrerasbyInstituto(req: Request, res: Response): Promise<void>{
            const { idInstituto } = req.params;      
            const resp = await pool.query(`SELECT nombre FROM carreras WHERE idInstituto= ${idInstituto}`);
            res.json(resp);
        }
    }

export const carrerasController = new CarrerasController();