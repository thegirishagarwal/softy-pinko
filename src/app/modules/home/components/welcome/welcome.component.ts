import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/global/services/router.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private routerService: RouterService
  ) { }

  ngOnInit(): void {
  }

  onScrollSection(section: string): void {
    this.routerService.anchorName$.next(section);
  }

}
