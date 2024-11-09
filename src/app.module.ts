import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://rahmonjon:22hGCPpLAiB3MzGi@cluster0.vdef2.mongodb.net/'), BlogModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}

// username - rahmonjon
// password - 22hGCPpLAiB3MzGi