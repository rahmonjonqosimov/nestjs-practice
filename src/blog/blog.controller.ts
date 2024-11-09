import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogDto } from './dto/blog-dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {


    constructor( private readonly blogService: BlogService ){}

    @HttpCode(200)
    @Get()
    async getAll(){
        return this.blogService.getAll();
    }
    
    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() blog: BlogDto){
        return this.blogService.create(blog);
    }

    @HttpCode(200)
    @Get(':id')
    async getById(@Param('id') id: string){
       return this.blogService.getById(id);
    }

    @HttpCode(200)
    @Patch(':id')
    async update(@Param('id') id: string, @Body() blog: BlogDto){
       return this.blogService.update(id, blog);
    }

    @HttpCode(200)
    @Delete(':id')
    async delete(@Param('id') id: string){
      return this.blogService.delete(id);
    }

}
