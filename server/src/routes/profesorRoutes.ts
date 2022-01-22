import { Router } from 'express';
import { profesorrController } from '../controllers/profesorController';
class ProfesorRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', profesorrController.list );
        this.router.get('/:id', profesorrController.listOne );
        this.router.post('/create', profesorrController.create);
		this.router.put('/actualizar/:idPlan',profesorrController.actualizar);
		this.router.delete('/eliminar/:idPlan',profesorrController.eliminar);
    }
}
const profesorrRoutes= new ProfesorRoutes();
export default profesorrRoutes.router;