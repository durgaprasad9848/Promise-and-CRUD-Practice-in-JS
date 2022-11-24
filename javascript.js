const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = 'green';
 

}
);

btn.addEventListener('mouseout', (e) => {
  e.preventDefault();
  document.querySelector('#name').style.background = 'red';
 

}
);

btn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  document.querySelector('#email').style.background = 'yellow';
 

}
);


 