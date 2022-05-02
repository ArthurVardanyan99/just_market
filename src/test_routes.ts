import {Request, Response} from "express"
import {
  userCreate,
  loginUser,
  productCreate,
  productGet,
  orderCreate,
  ordersGet,
  ordersComplete,
} from './db';




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
      const products = await productGet({ type, id: undefined });
      res.json(products);
      // @ts-ignore
    } catch (error) {
      console.log('getProducts error: ', error)
    }
    res.end();
  },

  getProductsById: async (req: Request, res: Response) => {
    try {
      console.log('product get data by id: ', req.params);
      const id = Number(req.params.id)

      // const type = req.query.type as string;
      const products = await productGet({ type: undefined, id });
      // @ts-ignore
      res.json(products[0]);
      // @ts-ignore
    } catch (error) {
      console.log('getProducts error: ', error)
    }
    res.end();
  },

  createOrder: async (req: Request, res: Response) => {
    console.log('createOrder: body', req.body);
    try {
      await orderCreate(req.body);
    } catch (error) {
      console.log('createOrder error: ', error);
    }
    res.end();
  },

  getOrders: async (req: Request, res: Response) => {
    console.log('getOrders', req.query);
    try {
      const {
        completed,
      } = req.query;
      const {
        id,
      } = req.params;

      let com: undefined | boolean = undefined;
      if (completed === 'true') {
        com = true;
      } else if (completed === 'false') {
        com = false;
      }

      const orders = await ordersGet({
        completed: com,
        userId: (id && Number(id)) || undefined,
      });
      console.log('orders get data query: ', req.query);
      res.json(orders);
    } catch (error) {
      console.log('createOrder getOrders: ', error);
    }
    res.end();
  },


  completeOrder: async (req: Request, res: Response) => {
    console.log('completeOrder', req.query);
    try {
      const {
        id,
      } = req.params;

      const o_id = Number(id);
      if (!o_id) {
        throw new Error('incorrect order id');
      }

      await ordersComplete({
        orderId: o_id,
      });
    } catch (error) {
      console.log('createOrder getOrders: ', error);
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
