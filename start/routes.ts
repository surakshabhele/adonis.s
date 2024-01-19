/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import StudentsController from 'App/Controllers/Http/StudentsController'
import SubjectsController from 'App/Controllers/Http/SubjectsController'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/suraxa', async ({ view }) => {
  return { abc: "123" }
})

// Route.get('students', 'StudentsController.index')
Route.post('createStudent', 'StudentsController.getAll')
Route.post('addStudent', 'StudentsController.create')
Route.post('updateStudents', 'StudentsController.create')

// Route.on('/news').render('news.view');

// Route.post('/news', ({request}) => {
//   console.log(request.body());
//   return 'i am post route';
// })

// Route.post('/news', ({ request }) => {
//   const { email, password } = request.body();
//   return { email, password };
// })

// Route.post('/news',({request,response})=>{
//   return response.redirect('/news');
// })

// Route.get('news/*', ({ params }) => {
//   console.log(params['*'])
// })

// Route.patch('/news/:id',({params}) =>{
//   console.log(params);
//   return {params};
// }).where('id',/^[0-9]+$/)

// Route.patch('/news/:id',({params}) =>{
//   console.log(params);
//   return {params};
// }).where('id',{
//   match:/^[0-9]+$/,
//   cast:(id)=>Number(id),
// });

// Route.delete('/news/:id',({params}) =>{
//   console.log(params);
//   return {params};
// }).where('id',{
//   match:/^[0-9]+$/,
//   cast:(id)=>Number(id),
// });

// Route.get('/news',async ({ view }) => {
//   const students = await Database.from('students').select('*');
//   return view.render('news.view',{students});
// })

// Route.get('/students',async ({ view }) => {
//   const students = await Database.from('students').select('*');
//   // return students;
//   return view.render('news.view',{students});
// })

// Route.get('/students', async (ctx) => {
//   return new StudentsController().view(ctx);
// });

Route.get('students','StudentsController.show');
Route.get('create-students','StudentsController.showForm');
Route.post('/students/create','StudentsController.create')
Route.post('/students/store','StudentsController.store')
// Route.post("/students_store", ({request})=>{
//   return request.body();
// }).as("students_store");
// 

// Route.get("/" ,async({request})=>{
//   request.qs
// })

Route.get('/subjects','SubjectsController.show');
Route.post('/subjects/create','SubjectsController.create');
Route.patch('/subjects/update','SubjectsController.update');
Route.delete('/subjects/delete','SubjectsController.delete')


Route.get('/signup-teachers','SignupsController.showForm');
Route.on('/signup').render('news.signup')
Route.post('/signup','SignupsController.update');
// Route.get('/signup','SignupsController.show');

