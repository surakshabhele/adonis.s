import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

import Subject from "App/Models/Subject";
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class SubjectsController {
    // public static async index(ctx: HttpContextContract) {
    //     const allSubjects = await Subject.all()
    //     return allSubjects;
    // }

    // public async show({ request, response, view }: HttpContextContract) {
    //     const subjects = await Database.from('subjects').select('*');
    //     console.log(subjects)
    //     return view.render('news.view', { subjects });
    // }

    // public async create({ request, response, view }: HttpContextContract) {
    //     const subjects = schema.create({
    //         subName: schema.string(),
    //         subCode: schema.string(),
    //         // categories: schema.array().members(schema.number()),
    //     });
    //     const payload = await request.validate({ schema: subjects })
    //     const user = await Subject.create(payload)
    //     // user.merge(payload)
    //     await user.save()
    // }

    public async update({ request, response, view }: HttpContextContract) {
        const user = await Subject.findOrFail({
            subName: schema.string(),
            subCode: schema.string(),
        })
                await user.save()

        // const updatesubjects = schema.update({
        //     subName: schema.string(),
        //     subCode: schema.string(),
        // });
        // const payload = await request.validate({ schema: updatesubjects })
        // const user = await Subject.update(payload)
        // // user.merge(payload)
        // await user.save()
    }

    public async delete({ request }: HttpContextContract) {
        const delete = schema.delete({

        })
        const user = await Subject.findOrFail(1)
        await user.delete()
        await Subject.query().where('isVerified', false).delete()
    }
}



