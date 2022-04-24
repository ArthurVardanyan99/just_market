
import path from "path";
import {Request, Response} from "express"
import { userCreate } from './db/userCreate';
import { loginUser } from './db/loginUser';
import { productCreate } from './db/productCreate';
import { productGet } from './db/productGet';


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
      // @ts-ignore
      user_data.password = undefined;
      res.json(user_data);
    } catch (error) {
      console.log('user login error: ', error)
    }
    res.end();
  },

  createProduct: async (req: Request, res: Response) => {
    try {
      console.log('product create data: ', req.body);
      await productCreate(req.body);
      // @ts-ignore
    } catch (error) {
      console.log('createProduct error: ', error)
    }
    res.end();
  },

  getProducts: async (req: Request, res: Response) => {
    try {
      console.log('product get data query: ', req.query);
      const type = req.query.type as string;
      const products = await productGet({ type });
      res.json(products);
      // @ts-ignore
    } catch (error) {
      console.log('getProducts error: ', error)
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
