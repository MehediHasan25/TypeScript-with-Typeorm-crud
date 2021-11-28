import { Request, Response } from 'express';
import { Post } from '../entity/Post';
import { getRepository } from 'typeorm';

class PostController {
  static postPost = async (req: Request, res: Response) => {
    const newPost = {
      title: req.body.title,
      content: req.body.content
    }

    const post = getRepository(Post).create(newPost);
    const result = await getRepository(Post).save(post);
    return res.json(result);

  };

  static getPost = async (req: Request, res: Response) => {
    const result = await getRepository(Post).find();
    return res.json(result);
  };

  static getOne = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await getRepository(Post).findOne(id);
    return res.json(result);
  };

  static updatePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await getRepository(Post).findOne(id);
    if (data) {
      const newData = {
        ...data,
        title: req.body.title,
        content: req.body.content
      };

      const result = await getRepository(Post).save(newData);
      return res.json(result);
    }
    return res.json({ message: "No data Found" });

  };
  // You can use this also for Update using Merge
  // static updatePost = async (req: Request, res: Response) => {
  //   const post = await getRepository(Post).findOne(req.params.id);
  //   if (post) {
  //     getRepository(Post).merge(post, req.body);
  //     const result = await getRepository(Post).save(post);
  //     return res.json(result);
  //   }
  //   return res.json({ msg: "Post Not Found" });
  // };

  static deletePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await getRepository(Post).delete(req.params.id);
    return res.json(result);
  }



}

export default PostController;