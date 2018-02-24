import { Component, Input } from '@angular/core';

/**
 * @author : kmr.
 *
 */
@Component({
  selector: 'ng-progress-bar',
  templateUrl: 'ng-progress-bar.html'
})
export class NgProgressBarComponent {

  @Input('value') value: number = 0;
  @Input('symbol') symbol: string = '%';
  @Input('hide') hide: string = 'false';

  @Input('outer-padding') outerPadding: string = '3px';
  @Input('inner-padding') innerPadding: string = '4px';

  @Input('outer-bg') outerBg: string = '#f4f4f4';
  @Input('inner-bg') innerBg: string = '#369fbf';

  @Input('radius') radius: string = '25px';
  @Input('color') color: string = '#fff';

  constructor() {

  }

}
