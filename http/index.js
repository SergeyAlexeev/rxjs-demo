import { fromEvent, from, Observable } from 'rxjs'; 
import { switchMap, map } from 'rxjs/operators';

const api = 'https://api.github.com/repos/ReactiveX/rxjs/contributors';
const btn = document.getElementById('btn');
const area = document.getElementById('area');
const eventStream$ = fromEvent(btn, 'click');

const getProcessingStream = (users) => from(users).pipe(
  map(user => ({
    login: user.login,
    avatar: user.avatar_url,
    url: user.html_url
  }))
);

const dataStream$ = new Observable((subscriber) => {
  fetch(api)
    .then(response => response.json())
    .then((data) => {
      subscriber.next(data);
    });
}).pipe(
  switchMap((users) => {
    return getProcessingStream(users);
  })
);


eventStream$.pipe(
  switchMap((e) => {
    return dataStream$;
  })
).subscribe((user) => {
    const link = document.createElement('a');
    const avatar = document.createElement('img');

    link.setAttribute('href', user.url);
    link.setAttribute('target', '_blank');
    link.style.display = 'block';
    link.text = user.login;

    avatar.setAttribute('src', user.avatar);
    avatar.style.width = '100px';
    avatar.style.height = '100px';

    area.appendChild(link);
    area.appendChild(avatar);
});
