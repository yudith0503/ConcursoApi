import { Module } from '@nestjs/common';
import { EvaluatorService } from './evaluator.service';
import { EvaluatorController } from './evaluator.controller';

@Module({
  providers: [EvaluatorService],
  controllers: [EvaluatorController]
})
export class EvaluatorModule {}
