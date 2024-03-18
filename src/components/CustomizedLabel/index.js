const CustomizedLabel = ({ data }) => {
    return (
      <p className="label">
        {data.name} ({data.value}%)
      </p>
    );
  };

export default CustomizedLabel