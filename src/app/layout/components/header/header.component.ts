import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { SlideUpDown } from 'src/app/global/animations';
import { RouterService } from 'src/app/global/services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [SlideUpDown]
})
export class HeaderComponent implements OnInit {

  public anchorName: string;
  public isMenuOpen: boolean = false;


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const navItem = document.querySelectorAll('#navigation li a');
    navItem.forEach(anchor => {
      const scrollPosition = document.documentElement.scrollTop;
      const anchorAttr = anchor.getAttribute('data-anchor');
      const hashDoc = document.getElementById(anchorAttr);
      if ((hashDoc.offsetTop - 130) <= scrollPosition) {
        this.anchorName = anchorAttr;
      }
    })
  }

  constructor(
    private viewportScroller: ViewportScroller,
    private routerService: RouterService
  ) {
    this.anchorName = 'welcome';
    this.routerService.anchorName$.subscribe(name => {
      if (name !== '') {
        this.anchorName = name;
        this.viewportScroller.scrollToAnchor(name);
      }
    })
  }

  ngOnInit(): void {
  }

  onMenuTrigger(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


  onScrollSection(section: string): void {
    this.routerService.anchorName$.next(section);
  }

}
