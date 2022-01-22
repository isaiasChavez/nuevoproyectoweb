import { Router } from 'express';
import { institutosController } from '../controllers/institutosController';
class InstitutosRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
this.router.get('/', institutosController.list );
this.router.get('/:id', institutosController.listOne );
this.router.post('/create', institutosController.create);
this.router.put('/actualizar/:idInstituto',institutosController.actualizar);
this.router.delete('/eliminar/:idInstituto',institutosController.eliminar);
}
}
const institutosRoutes= new InstitutosRoutes();
export default institutosRoutes.router;