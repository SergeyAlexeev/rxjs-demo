import { of, from, interval, Observable, Subject } from 'rxjs';
import { take, multicast, refCount } from 'rxjs/operators';

const intStream$ = of(1, 2, 3);
const stringStream$ = from('hello');
const arrayStream$ = from(['a', 'b', 'c']);
const intervalStream$ = interval(1000).pipe(
  take(3)
);

const subject = new Subject(); // -> multicast example

const fromObservableStream$ = new Observable((subscriber) => {
  console.log('Let\'s emit something');
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
}); //.pipe(multicast(subject), refCount()); -> multicast example

// const promiseStream$ = from(new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Result');
//     // reject('ooops');
//   }, 3000);
// }));

// intStream$.subscribe((value) => {
//   console.log(value);
// });

// stringStream$.subscribe((char) => {
//   console.log(char);
// });

// arrayStream$.subscribe((item) => {
//   console.log(item);
// });

// intervalStream$.subscribe(
//   (val) => {
//     console.log(val);
//   },
//   (err) => {},
//   () => { console.log('Done'); }
// );

// promiseStream$.subscribe((value) => {
//   console.log(value);
// }, (err) => {
//   console.log(err);
// });

fromObservableStream$.subscribe({
  next: (value) => { console.log(value); },
  complete: () => { console.log('Done!'); }
});

fromObservableStream$.subscribe({
  next: (value) => { console.log(value); },
  complete: () => { console.log('Done!'); }
});

// fromObservableStream$.connect(); -> multicast example
