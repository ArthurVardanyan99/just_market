
import path from "path";
import {Request, Response} from "express"
import { userCreate } from './db/userCreate';
import { loginUser } from './db/loginUser';


const routes = {

  userCreate: async function(req: Request, res: Response) {
    try {
      console.log('user create data : ', req.body);
      await userCreate(req.body);
    } catch (error) {
      console.log('user create error: ', error)
    }
    res.end();
  },

  userLogin: async (req: Request, res: Response) => {
    try {
      console.log('user login');
      const user_data = await loginUser(req.body);
      console.log('user data from db: ', user_data);
      res.json(user_data);
    } catch (error) {
      console.log('user login error: ', error)
    }
    res.end();
  },

  home: function (req: Request, res: Response) {
    res.redirect('/index.html');
  },
  not_found: async function (req: Request, res: Response) {
    res.set('Content-Type', 'text/html');
    res.write('404');
    res.end();
  },
}

export { routes };
