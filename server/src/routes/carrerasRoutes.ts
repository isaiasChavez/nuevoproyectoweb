import { Router } from 'express';
import { carrerasController } from '../controllers/carrerasController';
class CarrerasRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
this.router.get('/', carrerasController.list );
this.router.get('/:id', carrerasController.listOne );
this.router.post('/create', carrerasController.create);
this.router.put('/actualizar/:idInstituto',carrerasController.actualizar);
this.router.delete('/eliminar/:idInstituto',carrerasController.eliminar);
this.router.get('/getCarrerasbyInstituto/:idInstituto',carrerasController.getCarrerasbyInstituto);

}
}
const carrerasRoutes= new CarrerasRoutes();
export default carrerasRoutes.router;