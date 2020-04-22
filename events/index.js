import { fromEvent } from 'rxjs';
import { scan, throttleTime, filter, map } from 'rxjs/operators';

const button = document.getElementById('btn');
const txt = document.getElementById('txt');

const clickStream$ = fromEvent(button, 'click').pipe(
  scan(count => count + 1, 0),
  filter(count => count % 2 === 0),
);

const keyDownStream$ = fromEvent(txt, 'keydown').pipe(
  throttleTime(200),
  map(e => e.target.value)
);

clickStream$.subscribe((count) => {
  console.log(`Click count - ${count}`);
});

keyDownStream$.subscribe((text) => {
  console.log(`Text is - ${text}`);
});
