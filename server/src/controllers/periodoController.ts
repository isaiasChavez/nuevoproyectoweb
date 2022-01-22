import {Request,Response} from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
class PeriodoController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM periodo');
		res.json( respuesta );
	}

	public async listOne(req: Request, res: Response): Promise <void>
	{
		const {id} = req.params;
		const respuesta = await pool.query('SELECT * FROM periodo WHERE idPeriodo = ?', [id]);
		if(respuesta.length>0)
		{
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Profesor no encontrado'});
	}

	public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO periodo set ?",[req.body]);
        res.json(resp);
    }

	public async actualizar(req: Request, res: Response): Promise<void> 
	{
		const { idPeriodo } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE periodo set ? WHERE idPeriodo= ?", [req.body, idPeriodo]);
		res.json(resp);
	}
	
	public async eliminar(req: Request, res: Response): Promise<void> 
	{
		const { idPeriodo } = req.params;
		const resp = await pool.query(`DELETE FROM periodo WHERE idPeriodo= ${idPeriodo}`);
		res.json(resp);
	}
	
}
export const periodoController = new PeriodoController();