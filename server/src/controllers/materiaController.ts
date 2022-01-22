import {Request,Response} from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
class MateriaController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM materia');
		res.json( respuesta );
	}

	public async listOne(req: Request, res: Response): Promise <void>
	{
		const {id} = req.params;
		const respuesta = await pool.query('SELECT * FROM materia WHERE idMateria = ?', [id]);
		if(respuesta.length>0)
		{
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Profesor no encontrado'});
	}

	public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO materia set ?",[req.body]);
        res.json(resp);
    }

	public async actualizar(req: Request, res: Response): Promise<void> 
	{
		const { idMateria } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE materia set ? WHERE idMateria= ?", [req.body, idMateria]);
		res.json(resp);
	}
	
	public async eliminar(req: Request, res: Response): Promise<void> 
	{
		const { idMateria } = req.params;
		const resp = await pool.query(`DELETE FROM materia WHERE idMateria= ${idMateria}`);
		res.json(resp);
	}
	
}
export const materiaController = new MateriaController();