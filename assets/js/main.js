// Init bootstrap Poppers
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
)
if (typeof bootstrap !== 'undefined') {
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  )
} else {
  console.error(
    'Bootstrap não está disponível. Verifique se você incluiu o arquivo bootstrap.js.'
  )
}

// Init lucide icons
if (lucide) {
  lucide.createIcons()
} else {
  console.log(
    'Lucide não está disponível. Verifique se você incluiu o arquivo lucide.js.'
  )
}

const checkbox = document.getElementById('darkmode-checkbox')

checkbox.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
  }
})

// const ctx = document.getElementById('coinChart').getContext('2d')

// // Dados com variações mensais, mas legendas apenas anuais
// const labels = ['2015']

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Valor do Bitcoin',
//       data: [300],
//       borderColor: 'rgba(255, 99, 132, 1)',
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       fill: true,
//       tension: 0.4,
//     },
//     {
//       label: 'Valor do Ethereum',
//       data: [
//         0,
//         5,

//         2515, // 2024
//       ],
//       borderColor: 'rgba(54, 162, 235, 1)',
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       fill: true,
//       tension: 0.4,
//     },
//   ],
// }

// const config = {
//   type: 'line',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Variação do Valor das Criptomoedas (2015-2024)',
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Ano',
//         },
//         ticks: {
//           callback: function (value, index, ticks) {
//             // Mostrar apenas os anos (primeiros labels)
//             if (index % 12 === 0) {
//               return this.getLabelForValue(value)
//             }
//             return ''
//           },
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Valor (USD)',
//         },
//       },
//     },
//   },
// }

// const coinChart = new Chart(ctx, config)
