import {Request,Response} from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
class ProfesorYMateriaController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM profesorYMateria');
		res.json( respuesta );
	}

	public async listOne(req: Request, res: Response): Promise <void>
	{
		const {id} = req.params;
		const respuesta = await pool.query('SELECT * FROM profesorYMateria WHERE idProfesorYMateria = ?', [id]);
		if(respuesta.length>0)
		{
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Profesor no encontrado'});
	}

	public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO profesorYMateria set ?",[req.body]);
        res.json(resp);
    }

	public async actualizar(req: Request, res: Response): Promise<void> 
	{
		const { idProfesorYMateria } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE profesorYMateria set ? WHERE idProfesorYMateria= ?", [req.body, idProfesorYMateria]);
		res.json(resp);
	}
	
	public async eliminar(req: Request, res: Response): Promise<void> 
	{
		const { idProfesorYMateria } = req.params;
		const resp = await pool.query(`DELETE FROM profesorYMateria WHERE idProfesorYMateria= ${idProfesorYMateria}`);
		res.json(resp);
	}
	
}
export const profesorYMateriaController = new ProfesorYMateriaController();