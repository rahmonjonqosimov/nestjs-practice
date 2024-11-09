import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
    blogs: BlogDto[];
    constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

    async getAll(){
        return this.blogModel.find({});
    }

    async create(blog: BlogDto){
        return this.blogModel.create(blog);
    }

    async getById(id: string){
        return this.blogModel.findById(id);
    }

    async update(id: string, blog: BlogDto){
        return this.blogModel.findByIdAndUpdate(id, blog, {new: true});
    }

    async delete(id: string){
        return this.blogModel.findByIdAndDelete(id);
    }

}
