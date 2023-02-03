import styled from "styled-components";
import ApexCharts from "react-apexcharts";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartBalance = ({ data, color, height }) => {
  const chartData = {
    series: [
      {
        name: "Price",
        data: data,
      },
    ],
    options: {
      colors: ["#EA4694"],
      fill: {
        gradient: {
          type: "vertical",
          shadeIntensity: 0.5,
          inverseColors: true,

          stops: [0, 100],
          colorStops: [
            {
              offset: 20,
              color: "#EA4694",
              opacity: 0.3,
            },
            {
              offset: 100,
              color: "#EA4694",
              opacity: 0,
            },
          ],
        },
      },
      chart: {
        width: "100%",
        height: "100%",
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        labels: {
          show: true,
        },
      },
      yaxis: {
        labels: {
          show: true,
        },
      },
      tooltip: {
        y: {
          format: "",
          formatter: (value) => {
            return value;
          },
        },
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
    },
  };
  return (
    <StyledContainer color={color}>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type="area"
        // eslint-disable-next-line no-restricted-globals
        height={height}
      />
    </StyledContainer>
  );
};

export default ChartBalance;

const StyledContainer = styled.div`
  .apexcharts-tooltip {
    color: #EA4694;
  }
  .apexcharts-tooltip.apexcharts-theme-light {
    /* background: rgba(110, 220, 181, 0.5); */
  }
  .apexcharts-tooltip-title {
    display: none;
  }
  .apexcharts-xaxistooltip {
    display: none;
  }
  .apexcharts-tooltip.apexcharts-theme-light {
    border: none;
  }
  .apexcharts-tooltip-text-y-label {
    display: none;
  }
  .apexcharts-tooltip-marker {
    margin-right: 0;
  }
  .apexcharts-tooltip-text-y-value {
    font-size: 16px;
  }
  .apexcharts-text.apexcharts-yaxis-label {
    fill: ${({ color }) => color};
  }
  .apexcharts-text.apexcharts-xaxis-label {
    fill: ${({ color }) => color};
  }
  > div:nth-child(2) > div {
    min-height: unset !important;
    margin-top: -23px;
  }
  height: 100%;
  width: 100%;
  @media screen and (max-height: 725px) {
    height: 200px;
  }
`;
