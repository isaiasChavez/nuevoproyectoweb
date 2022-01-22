import { Router } from 'express';
import { profesorYMateriaController } from '../controllers/profesorYMateriaController';
class ProfesorYMateriaRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', profesorYMateriaController.list );
        this.router.get('/:id', profesorYMateriaController.listOne );
        this.router.post('/create', profesorYMateriaController.create);
		this.router.put('/actualizar/:idPlan',profesorYMateriaController.actualizar);
		this.router.delete('/eliminar/:idPlan',profesorYMateriaController.eliminar);
    }
}
const pprofesorYMateriaRoutes= new ProfesorYMateriaRoutes();
export default pprofesorYMateriaRoutes.router;