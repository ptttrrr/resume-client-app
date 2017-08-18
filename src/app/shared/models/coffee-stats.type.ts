import { ICoffeeStats } from './coffee-stats.interface';

export class CoffeeStats implements ICoffeeStats {
    id: number;
    level: number;
    timestamp: Date;


    public static GetTodaysStats(allStats: CoffeeStats[]) {

        console.log('test');
        const todaysStats: CoffeeStats[] = [];

        let yesterday: Date;
        yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        console.log('today: ' + allStats[0].timestamp);
        console.log('yesterday:' + yesterday.toString());
        for (let i = 0; i < allStats.length; i++) {
            if (allStats[i].timestamp < yesterday) {
                todaysStats.push(allStats[i]);
            }
        }
        return allStats;
    }

}
