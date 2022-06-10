import { Module } from '@nestjs/common';
import { AppController } from '@src/app/controllers/app.controller';
import FHistoryController from '@src/app/controllers/f-history.controller';
import ReviewsController from '@src/app/controllers/reviews.controller';
import CategoryController from '@src/app/controllers/category.controller';
import BoxController from '@src/app/controllers/box.controller';
import { AppService } from '@src/app/services/app.service';
import { UserModule } from '@src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [
    AppController,
    FHistoryController,
    ReviewsController,
    CategoryController,
    BoxController,
  ],
  providers: [AppService],
})
export class AppModule {}