import { Router } from 'express';
import { articulosController } from '../controllers/articulosController';
class ArticulosRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', articulosController.list );
        this.router.get('/:id', articulosController.listOne );
        this.router.post('/create', articulosController.create);
		this.router.put('/actualizar/:idPlan',articulosController.actualizar);
		this.router.delete('/eliminar/:idPlan',articulosController.eliminar);
    }
}
const articulosRoutes= new ArticulosRoutes();
export default articulosRoutes.router;