import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PatientsModule } from './patients/patients.module';
import { DietChartsModule } from './diet-charts/diet-charts.module';
import { PantryModule } from './pantry/pantry.module';
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
  imports: [PatientsModule, DietChartsModule, PantryModule, DeliveriesModule],
  providers: [PrismaService],
})
export class AppModule {}

