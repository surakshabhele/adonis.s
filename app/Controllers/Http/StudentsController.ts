import { Response } from '@adonisjs/core/build/standalone';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View';
import Database from '@ioc:Adonis/Lucid/Database';

import Student from "App/Models/Student"
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StudentsController {
    public static async index(ctx: HttpContextContract) {

        const allStudents = await Student.all()
        return allStudents;
    }

    public static async getAll(ctx: HttpContextContract) {

        console.log(ctx.request.body)
    }

    public static async create({ request }: HttpContextContract) {
        const values = request.input('input')
        console.log(values)
        // const createStudents = await Student.create(values)
        // return createStudents;
    }

    // public static async update({ request }: HttpContextContract) {
        // const payload = await request.validate()
        // const updateStudents = await Student.findByOrFail('id', payload.id)
        // await Student.merge(payload).save()
        // return updateStudents;
    // }

    public async show({ request, response, view }: HttpContextContract) {
        const students = await Database.from('students').select('*');
        return view.render('news.view', { students });
    }
    public async showForm({ request, response, view }: HttpContextContract) {
        const students = await Database.from('students').select('*');
        return view.render('news.create');
    }
    public async create({ view }) {
        return view.render('news.create');
    }
   
    public async store({ request }: HttpContextContract) {
        const studentsSchema = schema.create({
          name: schema.string({ trim: true }, [
            rules.minLength(10)
          ]),
          mob_no: schema.string({ trim: true }, [
            rules.minLength(10)
          ]),
          body: schema.string(),
        })
    
        const payload = await request.validate({ schema: studentsSchema })
        console.log(payload)
    
        return 'Post created'
      }
}

