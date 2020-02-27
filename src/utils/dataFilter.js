export const filterCategorys = (strLine, way, mData) => {
  const filterData = mData.filter(item => {
    if (way === "both") {
      return item.VERKEHRSMITTEL === strLine;
    } else {
      return item.VERKEHRSMITTEL === strLine && item.RICHTUNG === "H";
    }
  });
  return filterData;
};

export const filterLinesByLine = (strLine, mData) => {
  const filterData = mData.filter(item => {
    return item.BEZEICHNUNG === 5;
  });
  return filterData;
};
