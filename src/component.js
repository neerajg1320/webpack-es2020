import logo from './logo.svg'; // This will give a url in logo

function component() {
  let m = document.createElement('main');
  let p = document.createElement('p');
  let img = document.createElement('img');

  m.append(p);
  p.append(img);
  img.src = logo;
  img.alt = 'sample logo';

  return m;
}

export default component;
