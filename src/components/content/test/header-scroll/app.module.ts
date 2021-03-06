import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule, ScrollEvent } from '../../../../../ionic-angular';


@Component({
  templateUrl: 'main.html'
})
export class E2EPage {

  onScroll(ev: ScrollEvent) {
    ev.domWrite(() => {
      // DOM writes must go within domWrite()
      // to prevent any layout thrashing
      ev.headerElement.style.transform = `translateY(${-ev.scrollTop}px)`;
    });
  }

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class E2EApp {
  root = E2EPage;
}

@NgModule({
  declarations: [
    E2EApp,
    E2EPage,
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EApp,
    E2EPage,
  ]
})
export class AppModule {}
