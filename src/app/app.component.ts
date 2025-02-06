import { Component } from '@angular/core';
import { ResizeService } from 'src/services/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fastland';
  size: any;
  panelOpenState = false;
  width: number | undefined;
  isMobileView!: boolean;
  mode='over';
  opened!: boolean;
 sidemenulist=['Products','Sectors','Customers','Assistance','Company']


  constructor(
    private resizeService: ResizeService,
  ){
    this.resizeService.size$.subscribe((user) => {
      this.size = user.size;
      if (this.size < 992) {
        this.isMobileView = true;
      } else {
        this.isMobileView = false;
      }
    });
    this.width = window.innerWidth;
    if (!this.size && this.width < 992) {
      this.isMobileView = true;
    } else if (!this.size && this.width > 992) {
      this.isMobileView = false;
    }
  }
}
