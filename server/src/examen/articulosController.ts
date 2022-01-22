import {Request,Response} from 'express';
import pool from '../database';
class ArticulosController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM Articulo');
		res.json( respuesta );
	}

	public async listOne(req: Request, res: Response): Promise <void>
	{
		const {id} = req.params;
		const respuesta = await pool.query('SELECT * FROM Articulo WHERE idArticulo = ?', [id]);
		if(respuesta.length>0)
		{
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Articulo no encontrado'});
	}

	public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO Articulo set ?",[req.body]);
        res.json(resp);
    }

	public async actualizar(req: Request, res: Response): Promise<void> 
	{
		const { idArticulo } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE Articulo set ? WHERE idArticulo= ?", [req.body, idArticulo]);
		res.json(resp);
	}
	
	public async eliminar(req: Request, res: Response): Promise<void> 
	{
		const { idArticulo } = req.params;
		const resp = await pool.query(`DELETE FROM Articulo WHERE idArticulo= ${idArticulo}`);
		res.json(resp);
	}
	
}
export const articulosController = new ArticulosController();