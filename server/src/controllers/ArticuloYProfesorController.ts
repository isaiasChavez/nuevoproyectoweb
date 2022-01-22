import {Request,Response} from 'express';
import pool from '../database';
class ArticuloYProfesorController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM articuloYprofesor');
		res.json( respuesta );
	}

	public async listOne(req: Request, res: Response): Promise <void>
	{
		const {id} = req.params;
		const respuesta = await pool.query('SELECT * FROM articuloYprofesor WHERE idAyP = ?', [id]);
		if(respuesta.length>0)
		{
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Articulo no encontrado'});
	}

	public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO articuloYprofesor set ?",[req.body]);
        res.json(resp);
    }

	public async actualizar(req: Request, res: Response): Promise<void> 
	{
		const { idAyP } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE articuloYprofesor set ? WHERE idAyP= ?", [req.body, idAyP]);
		res.json(resp);
	}
	
	public async eliminar(req: Request, res: Response): Promise<void> 
	{
		const { idAyP } = req.params;
		const resp = await pool.query(`DELETE FROM articuloYprofesor WHERE idAyP= ${idAyP}`);
		res.json(resp);
	}
	
}
export const articuloYProfesorController = new ArticuloYProfesorController();