export const filterLines = (strLine, way, mData) => {
  const filterData = mData.filter(item => {
    if (way === "both") {
      return item.VERKEHRSMITTEL === strLine;
    } else {
      return item.VERKEHRSMITTEL === strLine && item.RICHTUNG === "H";
    }
  });
  return filterData;
};
