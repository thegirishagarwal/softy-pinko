import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const SlideUpDown =
  trigger('slideInOut', [
    state('void', style({
      display: 'block'
    })),
    state('*', style({
      display: 'none'
    })),
    transition('* => void', [
      style({
        height: '0',
        display: 'block'
      }),
      animate('200ms', style({
        height: '360px',
        display: 'block'
      }))  // final
    ]),
    transition('void => *', [
      style({
        height: '360px',
        display: 'block'
      }),
      animate('200ms', style({
        height: '0',
        display: 'none'
      }))
    ])

  ])
