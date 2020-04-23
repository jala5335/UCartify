const SignUp = document.querySelector('.SignUp')
SignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = SignUp.querySelector('.username').value;
    const password = SignUp.querySelector('.password').value;
    post('/SignUp', {username, password});
});

function post (path, data) {
    return window.fetch(path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }