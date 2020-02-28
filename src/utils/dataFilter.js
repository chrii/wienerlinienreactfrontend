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

export const filterCategoryByLine = (strLine, mData) => {
  const filterData = mData.filter(item => {
    return item.BEZEICHNUNG === strLine;
  });
  console.log(filterData);
  return filterData;
};
