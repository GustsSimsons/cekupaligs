document.getElementById('login-btn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const result = await response.json();
  
      if (response.ok && result.success) {
        window.location.href = '/html/home.html';
      } else {
        alert(result.message || 'Invalid username or password.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login request failed. Please try again later.');
    }
  });

  document.getElementById('registration-btn').addEventListener('click', async () => {
    window.location.href = '/html/registration.html';
  });