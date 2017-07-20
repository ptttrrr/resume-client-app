import { Component, OnInit } from '@angular/core';
import { Color } from '../../shared/models/color.type';
import { ColorService } from '../../shared/services/color.service';


@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    // providers: [ColorService]
})
export class DashboardComponent {
    constructor(private colorService: ColorService) {

    }

    private colors: Color[];

    ngOnInit() {
        this.getColors();
    }

    getColors() {
        this.colorService.getColors()
            .subscribe(response => {
                this.colors = response;
            })
    }

}
