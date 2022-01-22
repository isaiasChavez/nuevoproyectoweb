import {Request,Response} from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
class PlanesController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM planes');
		res.json( respuesta );
	}

	public async listOne(req: Request, res: Response): Promise <void>
	{
		const {id} = req.params;
		const respuesta = await pool.query('SELECT * FROM planes WHERE idPlan = ?', [id]);
		if(respuesta.length>0)
		{
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Profesor no encontrado'});
	}

	public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO planes set ?",[req.body]);
        res.json(resp);
    }

	public async actualizar(req: Request, res: Response): Promise<void> 
	{
		const { idPlan } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE planes set ? WHERE idPlan= ?", [req.body, idPlan]);
		res.json(resp);
	}
	
	public async eliminar(req: Request, res: Response): Promise<void> 
	{
		const { idPlan } = req.params;
		const resp = await pool.query(`DELETE FROM planes WHERE idPlan= ${idPlan}`);
		res.json(resp);
	}
	
}
export const planesController = new PlanesController();