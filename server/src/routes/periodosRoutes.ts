import { Router } from 'express';
import { periodoController } from '../controllers/periodoController';
class PeriodosRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', periodoController.list );
        this.router.get('/:id', periodoController.listOne );
        this.router.post('/create', periodoController.create);
		this.router.put('/actualizar/:idPeriodo',periodoController.actualizar);
		this.router.delete('/eliminar/:idPeriodo',periodoController.eliminar);
    }
}
const periodosRoutes= new PeriodosRoutes();
export default periodosRoutes.router;