import { Request, Response } from "express";
import { Pet } from '../models/Pet';
import { creatMenuObject } from '../helpers/creatMenuObject';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    let list = Pet.getfromName(query);

    res.render('pages/page', {
        menu: creatMenuObject(''),
        list,
        query
    });
}