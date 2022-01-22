import { Router } from 'express';
class IndexRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
this.router.get('/',(req,res) => res.send('probando ruta'));
this.router.get('/instituto/',(req,res) => res.send('probando instituto'));
this.router.get('/carrera/',(req,res) => res.send('probando carrera'));
this.router.get('/materia/',(req,res) => res.send('probando materia'));
this.router.get('/periodo/',(req,res) => res.send('probando materia'));
this.router.get('/plan/',(req,res) => res.send('probando materia'));
this.router.get('/profesorYMateria/',(req,res) => res.send('probando materia'));
}
}
const indexRoutes= new IndexRoutes();
export default indexRoutes.router;
