import {Request, Response} from 'express';

export const home = (req:Request, res:Response)=>{
    res.send('Home no controller');
}


export const dogs = (req:Request, res:Response)=>{
    res.send('Dogs no controller');
}


export const cats = (req:Request, res:Response)=>{
    res.send('Cats no controller');
}


export const fishes = (req:Request, res:Response)=>{
    res.send('Fishes no controller');
}
