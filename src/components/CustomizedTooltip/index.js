const CustomizedTooltip = ({ active, payload }) => {
    if (active && payload && payload[0]) {
      const { date, value } = payload[0].payload;
      return (
        <p className="tooltip">
          {date} ({value})
        </p>
      );
    }
  
    return null;
  };
export default CustomizedTooltip