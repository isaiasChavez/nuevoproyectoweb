import {Request,Response} from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
class ProfesoresController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM profesores');
		res.json( respuesta );
	}
	public async listOne(req: Request, res: Response): Promise <void>
	{
		const {id} = req.params;
		const respuesta = await pool.query('SELECT * FROM Profesores WHERE idProfesor = ?', [id]);
		if(respuesta.length>0)
		{
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Profesor no encontrado'});
	}	
	public async create(req: Request, res: Response): Promise<void> 
	{
		console.log(req.body);
		let password=req.body.contrasena as any;
		var salt = bcrypt.genSaltSync(10);
		bcrypt.compare('prueba', "$2a$10$j87VT9.6v24xKwtXsSdGZe596VTHz5TvhHkfPq4t0hIpzr.bG6FvO", (err, res) =>
{
console.log('Compared result', res);
})
		/*bcrypt.hash(password,salt).then(function(nuevoPassword)
		{
			req.body.contrasena=nuevoPassword;
			const resp = pool.query("INSERT INTO profesores set ?",

			[req.body]);

			res.json(resp);
		})*/
	}
	public async actualizar(req: Request, res: Response): Promise<void> 
	{
		const { idProfesor } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE Profesores set ? WHERE idProfesor= ?", [req.body, idProfesor]);
		res.json(resp);
	}
	public async eliminar(req: Request, res: Response): Promise<void> 
	{
		const { idProfesor } = req.params;
		const resp = await pool.query(`DELETE FROM Profesores WHERE codigo= ${idProfesor}`);
		res.json(resp);
	}
	
}
export const profesoresController = new ProfesoresController();