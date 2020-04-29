import palette from 'theme/palette';
import moment from 'moment';

export const dataGraph = data => {
  console.log('data:', data);

  /* {
        label: 'Confirmados',
        backgroundColor: palette.cases.confirmed,
        data: [18, 5, 19, 27, 29, 19, 20],
      }, */
  return {
    labels: [
      moment().format('DD/MM'),
      moment()
        .add(1, 'day')
        .format('DD/MM'),
      moment()
        .add(1, 'day')
        .format('DD/MM'),
      moment()
        .add(1, 'day')
        .format('DD/MM'),
      moment()
        .add(1, 'day')
        .format('DD/MM'),
      moment()
        .add(1, 'day')
        .format('DD/MM'),
    ],
    datasets: [
      {
        label: 'Confirmados',
        backgroundColor: palette.cases.confirmed,
        data: [data.confirmed],
      },
      {
        label: 'Descartados',
        backgroundColor: palette.cases.negative,
        data: [data.negative],
      },
      {
        label: 'Suspeitos',
        backgroundColor: palette.cases.suspect,
        data: [data.suspects],
      },
      {
        label: 'Óbtos',
        backgroundColor: palette.cases.death,
        data: [data.deaths],
      },
      {
        label: 'Recuperados',
        backgroundColor: palette.cases.cured,
        data: [data.recovered],
      },
    ],
  };
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
