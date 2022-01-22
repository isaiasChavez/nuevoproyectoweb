import {Request,Response} from 'express';
import pool from '../database';
class profesorController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM Profesor');
		res.json( respuesta );
	}

	public async listOne(req: Request, res: Response): Promise <void>
	{
		const {id} = req.params;
		const respuesta = await pool.query('SELECT * FROM Profesor WHERE idProfesor = ?', [id]);
		if(respuesta.length>0)
		{
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Articulo no encontrado'});
	}

	public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO Profesor set ?",[req.body]);
        res.json(resp);
    }

	public async actualizar(req: Request, res: Response): Promise<void> 
	{
		const { idProfesor } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE Profesor set ? WHERE idProfesor= ?", [req.body, idProfesor]);
		res.json(resp);
	}
	
	public async eliminar(req: Request, res: Response): Promise<void> 
	{
		const { idProfesor } = req.params;
		const resp = await pool.query(`DELETE FROM Profesor WHERE idProfesor= ${idProfesor}`);
		res.json(resp);
	}
	public async listNameProf(req: Request, res: Response): Promise<void> 
	{
		const { idArticulo } = req.params;
		const resp = await pool.query(`SELECT Profesor.nombreProfesor FROM Profesor INNER JOIN articuloYprofesor ON Articulo.idArticulo  = ${idArticulo}`);
		res.json(resp);
	}
}
export const profesorrController = new profesorController();