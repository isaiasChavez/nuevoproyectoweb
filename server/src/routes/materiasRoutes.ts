import { Router } from 'express';
import { materiaController } from '../controllers/materiaController';
class MateriasRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', materiaController.list );
        this.router.get('/:id', materiaController.listOne );
        this.router.post('/create', materiaController.create);
		this.router.put('/actualizar/:idMateria',materiaController.actualizar);
		this.router.delete('/eliminar/:idMateria',materiaController.eliminar);
    }
}
const materiasRoutes= new MateriasRoutes();
export default materiasRoutes.router;