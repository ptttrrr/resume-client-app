import { Component, OnInit } from '@angular/core';
import { CoffeeStatsService } from '../../shared/services/coffee-stats.service';
import { ICoffeeStats } from '../../shared/models/coffee-stats.interface';
import { CoffeeStats } from '../../shared/models/coffee-stats.type';

@Component({
    selector: 'app-coffee-stats',
    templateUrl: './coffee-stats.component.html',
})

export class CoffeeStatsComponent implements OnInit {

    public coffeeStats: ICoffeeStats[];

    constructor(private coffeeStatusService: CoffeeStatsService) {
    }

    ngOnInit() {
        this.coffeeStatusService.GetCoffeeStats()
            .subscribe(stats =>  this.coffeeStats = stats);

    }

    GetTodaysStats(allStats: any[]) {

                console.log('test');
                console.log(allStats);
                console.log(allStats.values);
                const todaysStats: ICoffeeStats[] = [];

                let yesterday: Date;
                yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                console.log('today: ' + allStats[1].level);
                console.log('yesterday:' + yesterday.toString());
                for (let i = 0; i < allStats.length; i++) {
                    if (allStats[i].timestamp < yesterday) {
                        todaysStats.push(allStats[i]);
                    }
                }
                return allStats;
            }


}
