const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'Javascript', 'React', 'Node', 'Database'],
      datasets: [{
        label: '# of Votes',
        data: [99, 98, 98, 78, 70, 80],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });