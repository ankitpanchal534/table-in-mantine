function processCropData(data) {
  const productionByYear = {};

  // Parse the data
  data.forEach((entry) => {
    const year = entry.Year.match(/\d{4}/)[0]; // Extract the year
    const cropName = entry["Crop Name"];
    let cropProduction = entry["Crop Production (UOM:t(Tonnes))"];

    // Handle missing or empty production values
    cropProduction = cropProduction ? parseFloat(cropProduction) : 0.0;

    if (!productionByYear[year]) {
      productionByYear[year] = [];
    }

    productionByYear[year].push({ cropName, cropProduction });
  });

  // Create a list to store table rows
  const tableData = [];

  // Find max and min production crops for each year
  Object.keys(productionByYear)
    .sort()
    .forEach((year) => {
      const crops = productionByYear[year];

      if (crops.length === 0) return;

      // Sort crops by production
      crops.sort((a, b) => a.cropProduction - b.cropProduction);

      const minProductionCrop = crops[0].cropName;
      const maxProductionCrop = crops[crops.length - 1].cropName;

      tableData.push({
        year: year,
        maxProductionCrop: maxProductionCrop,
        minProductionCrop: minProductionCrop,
      });
    });

  return tableData;
}

export { processCropData };

export function aggregateCropData(data) {
  const cropAggregation = {};

  data.forEach((entry) => {
    const cropName = entry["Crop Name"];
    const yieldOfCrop = entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
    const areaUnderCultivation =
      entry["Area Under Cultivation (UOM:Ha(Hectares))"];

    // Initialize crop data if not already present
    if (!cropAggregation[cropName]) {
      cropAggregation[cropName] = {
        totalYield: 0,
        totalArea: 0,
        count: 0,
      };
    }

    // Add yield and area values to the crop data
    if (yieldOfCrop && areaUnderCultivation) {
      cropAggregation[cropName].totalYield += parseFloat(yieldOfCrop);
      cropAggregation[cropName].totalArea += parseFloat(areaUnderCultivation);
      cropAggregation[cropName].count += 1;
    }
  });

  // Calculate averages
  const averageData = [];
  for (const crop in cropAggregation) {
    const { totalYield, totalArea, count } = cropAggregation[crop];
    if (count > 0) {
      const averageYield = totalYield / count;
      const averageArea = totalArea / count;
      averageData.push({
        cropName: crop,
        averageYield: averageYield.toFixed(2),
        averageArea: averageArea.toFixed(2),
      });
    }
  }

  return averageData;
}
