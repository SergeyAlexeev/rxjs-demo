import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

const input = document.getElementById('input');

const stream$ = fromEvent(input, 'keydown').pipe(
  throttleTime(1000),
  map((e) => e.target.value)
);


stream$.subscribe((value) => {
  console.log(value);
});

