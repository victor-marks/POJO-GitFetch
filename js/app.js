const inputValue = document.querySelector('#search');
const searchButton = document.querySelector('.searchButton');
const nameContainer = document.querySelector('.main__profile-name');
const unContainer = document.querySelector('.main__profile-username');
const reposContainer = document.querySelector('.main__profile-repos');
const urlContainer = document.querySelector('.main__profile-url');

const id = 'Iv1.78f89d07f5a372d1';
const sec = '8521c44e37b59c9ac99d9d0726ce35d4332ca87d';

const fetchUsers = async user => {
  const api_call = await fetch(
    `https://api.github.com/users/${user}?client_id=${id}&client_secret=${sec}`
  );

  const data = await api_call.json();
  return { data };
};

const showData = () => {
  fetchUsers(inputValue.value).then(res => {
    nameContainer.innerHTML = `Name: <span class="main__profile-value">${
      res.data.name
    }</span>`;

    unContainer.innerHTML = `Username: <span class="main__profile-value">${
      res.data.login
    }</span>`;

    reposContainer.innerHTML = `Repos: <span class="main__profile-value">${
      res.data.public_repos
    }</span>`;

    urlContainer.innerHTML = `URL: <span class="main__profile-value">${
      res.data.html_url
    }</span>`;
  });
};

searchButton.addEventListener('click', () => {
  showData();
});
