import {Request,Response} from 'express';

import pool from '../database';
class InstitutosController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        const respuesta = await pool.query('SELECT * FROM institutos order by codigo');
        console.log(respuesta);
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        let consulta='SELECT * FROM institutos WHERE idInstituto = '+id;
        const respuesta = await pool.query(consulta);
        console.log(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Instituto no encontrado'});
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO institutos set ?",
        [req.body]);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { idInstituto } = req.params;
        console.log(idInstituto);
        const resp = await pool.query("UPDATE institutos set ? WHERE idInstituto = ?", [req.body, idInstituto]);
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { idInstituto } = req.params;
        const resp = await pool.query(`DELETE FROM institutos WHERE idInstituto= ${idInstituto}`);
        res.json(resp);
    }
    
}      

export const institutosController = new InstitutosController();