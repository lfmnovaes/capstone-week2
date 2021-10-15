import './style.css';
import { loadShows } from './elements.js';
// import addCommentListener from './eventListener.js';

const main = document.getElementById('listedShow');

// COMEDY
const comedy = [
  'tt0386676', // The Office
  'tt0108778', // Friends
  'tt0898266', // The Big Bang Theory
  'tt0098904', // Seinfeld
  'tt1442437', // Modern Family
  'tt0096697', // The Simpsons
];

// DRAMA
const drama = [
  'tt0903747', // Breaking Bad
  'tt1475582', // Sherlock
  'tt0185906', // Band of Brothers
  'tt7366338', // Chernobyl
  'tt0773262', // Dexter
  'tt10919420', // Squid Game
  'tt0141842', // The Sopranos
  'tt4574334', // Stranger Things
];

// DOCUMENTARY
const documentary = [
  'tt15260794', //Turning Point: 9/11
  'tt5491994', // Planet Earth II
  'tt15254840', // Nuclear Family
  'tt15166116', // Countdown: Inspiration4 Mission to Space
  'tt8420184', // The Last Dance
  'tt11823076', //Tiger King: Murder, Mayhem and Madness
  'tt14734548', // 9/11: One Day in America 
];

loadShows(drama, main);

const modal = `
<div class="modal fade" id="mainModal" tabindex="-1" aria-labelledby="mainModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mainModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;

main.insertAdjacentHTML('beforeend', modal);

const listenerNav = (shows, navbar) => {
  console.log(shows);
  navbar.addEventListener('click', () => {
    main.innerHTML = '';
    loadShows(shows, main);       
    main.insertAdjacentHTML('beforeend', modal); 
  })
};

const nav = document.getElementById('nav').querySelectorAll('li');
listenerNav(drama, nav[0]);
listenerNav(comedy, nav[1]);
listenerNav(documentary, nav[2]);