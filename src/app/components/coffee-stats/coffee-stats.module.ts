import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeStatsComponent } from './coffee-stats.component';
import { CoffeeStatsService } from '../../shared/services/coffee-stats.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CoffeeStatsComponent
    ],
    declarations: [
        CoffeeStatsComponent
    ],
    providers: [CoffeeStatsService]
})

export class CoffeeStatsModule {
}
