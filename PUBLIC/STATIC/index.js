  // Get the form element
  const form = document.getElementById('myForm');

  // Add an event listener to the form's submit event
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);
    let payload = [...formData]
 
    // Submit the form data using the Fetch API
  
    fetch('/postdata', {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
    }) 
    .catch(error => {
      // Handle any errors during the fetch request
      console.error(error);
    });
  }); 