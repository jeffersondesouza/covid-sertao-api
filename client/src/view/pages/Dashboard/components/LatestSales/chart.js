import palette from 'theme/palette';

export const data = {
  labels: ['1 abr', '2 abr', '3 abr', '4 abr', '5 abr', '6 abr'],
  datasets: [
    {
      label: 'Confirmados',
      backgroundColor: palette.cases.confirmed,
      data: [18, 5, 19, 27, 29, 19, 20],
    },
    {
      label: 'Suspeitos',
      backgroundColor: palette.cases.suspect,
      data: [11, 20, 12, 29, 30, 25, 13],
    },
    {
      label: 'Descartados',
      backgroundColor: palette.cases.cured,
      data: [18, 5, 19, 27, 29, 19, 20],
    },
    {
      label: 'Confirmados',
      backgroundColor: palette.cases.negative,
      data: [11, 20, 12, 29, 30, 25, 13],
    },
    {
      label: 'Óbtos',
      backgroundColor: palette.cases.death,
      data: [11, 20, 12, 0, 30, 25, 13],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary,
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider,
        },
      },
    ],
  },
};
