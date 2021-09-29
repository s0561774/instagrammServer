import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './comments/comments.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PostsModule, DatabaseModule,

    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'instagram',
      entities:['dist/**/*.entity{.ts,.js}'],
      synchronize:true
    }),

    CommentsModule,

    UserModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
