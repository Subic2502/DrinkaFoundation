// scroll.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private enableScrolling = true;

  setEnableScrolling(enable: boolean): void {
    this.enableScrolling = enable;
  }

  getEnableScrolling(): boolean {
    return this.enableScrolling;
  }
}
