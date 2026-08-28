
const containerst = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  };

  const starContainerStyles = {
    display: "flex",
    gap: "4px",
  }

  const textStyles = {
   lineHeight: "1",
   margin: "0",
  }

export default function StarRating({maxRating = 5, rating = 0}) {



  return (
    <div style={containerst}>
      <div  style={starContainerStyles}>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyles}>10</p>
    </div>
  );
}
