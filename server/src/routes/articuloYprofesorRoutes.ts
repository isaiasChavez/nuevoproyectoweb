import { Router } from 'express';
import { articuloYProfesorController } from '../controllers/ArticuloYProfesorController';
class ArticuloYprofesorRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', articuloYProfesorController.list );
        this.router.get('/:id', articuloYProfesorController.listOne );
        this.router.post('/create', articuloYProfesorController.create);
		this.router.put('/actualizar/:idPlan',articuloYProfesorController.actualizar);
		this.router.delete('/eliminar/:idPlan',articuloYProfesorController.eliminar);
    }
}
const articuloYprofesorRoutes= new ArticuloYprofesorRoutes();
export default articuloYprofesorRoutes.router;