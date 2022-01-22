import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import institutosRoutes from './routes/institutosRoutes'
import carrerasRoutes from './routes/carrerasRoutes';
import profesoresRoutes from './routes/profesoresRoutes';
import materiasRoutes from './routes/materiasRoutes';
import periodosRoutes from './routes/periodosRoutes';
import planesRoutes from './routes/planesRoutes';
import profesorYMateriasRoutes from './routes/profesorYMateriasRoutes';
import articuloYprofesorRoutes from './routes/articuloYprofesorRoutes';
import articulosRoutes from './routes/articulosRoutes';
import profesorrRoutes from './routes/profesorRoutes';
import morgan from 'morgan';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import cors from 'cors';
class Server
{
public app: Application;
constructor()
{
this.app= express();
this.config();profesorrRoutes
this.routes();
this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
}
config (): void
{
	this.app.set('port',process.env.PORT|| 3000);
	this.app.use(morgan('dev'));
	this.app.use(cors());
	this.app.use(express.json());
	this.app.use(express.urlencoded({extended: false}));
}
routes (): void
{
	this.app.use(indexRoutes);
	this.app.use('/api/institutos',institutosRoutes);
	this.app.use('/api/carreras',carrerasRoutes);
	this.app.use('/api/profesores',profesoresRoutes);
	this.app.use('/api/materias',materiasRoutes);
	this.app.use('/api/periodos',periodosRoutes);
	this.app.use('/api/planes',planesRoutes);
	this.app.use('/api/profesorYMaterias',profesorYMateriasRoutes);
	this.app.use('/api/articuloYprofesor',articuloYprofesorRoutes);
	this.app.use('/api/articulos',articulosRoutes);
	this.app.use('/api/profesor',profesorrRoutes);
	
	
}
start (): void
{
this.app.listen(this.app.get('port'), () =>
{
console.log('Servidor ejecutándose en el puerto ',this.app.get('port'));
});
}
} 	
const server = new Server();
server.start();
