const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "massive sun icon",
  },
  winter: {
    text: "Burr it is cold",
    iconName: "massive snowflake icon",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
