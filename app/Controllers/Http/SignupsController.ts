// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class SignupsController {
    public async update({ request }: HttpContextContract) {
        const req = await request.validate({
            schema: schema.create({
                name: schema.string(),
                email: schema.string({}, [rules.email()]),
                password: schema.string({}, [rules.confirmed()])
            }

            ),
            messages: {
                'name.required': 'Name is required to sign up',
                'email.required': 'email is required to sign up',
                'password.required': 'password is required to sign up',
            }
        })
        console.log(req)
        return request.all()
        // return View.render('news.signup');/
    }

    public async showForm({ request, response, view }: HttpContextContract) {
        const teachers = await Database.from('teachers').select('*');
        return view.render('news.signup');
    }


    // public async show({request}:HttpContextContract){
    //    return View.render('news.signup')
    // }
}
