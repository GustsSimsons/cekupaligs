document.getElementById('signup-btn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const result = await response.json();
  
      if (response.ok && result.success) {
        window.location.href = 'authentication.html';
      } else {
        alert(result.message || 'Invalid username or password.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup request failed. Please try again later.');
    }
  });