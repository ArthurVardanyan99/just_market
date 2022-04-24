
import path from "path";
import {Request, Response} from "express"
import { userCreate } from './db/userCreate';
import { logUsers } from './db/logUsers';


const routes = {

  userCreate: async function(req: Request, res: Response) {

    req.body
    try {
      console.log('user create');
      userCreate({
        email: "aaa@g.com",
        name: "frangul",
        passowrd: "56",
        surname: "aaaaaaaaaaaaa",
      });
      res.end();

      setTimeout(() => {
        logUsers()
      }, 3000);

    } catch (error) {
      console.log('user create error: ', error)
    }
  },

  userLogin: function(req: Request, res: Response) {
    console.log('user login');
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
