##Title: Climate Data Analysis

Description:
This project aims to analyze climate data using Python's pandas, numpy, and matplotlib libraries. It performs various data processing tasks, including handling missing values, detecting outliers, computing summary statistics, and visualizing trends over time and across different regions. The dataset used contains temperature and anomaly data from multiple countries over several years.

##Key Features:
- Missing values handling: The code fills missing values in the temperature, monthly variation, and anomaly columns with their respective means.
- Datatype consistency check: It verifies the consistency of data types across columns.
- Date column creation: The code creates a new date column from the existing years and month columns and removes the original year and month columns.
- Outlier detection: It identifies outliers in the temperature column using a z-score approach.
- Summary statistics calculation: The code computes summary statistics such as mean, median, standard deviation, and range for temperature, monthly variation, and anomaly values.
- Regional analysis: It analyzes temperature trends over time for specific countries such as Afghanistan, Pakistan, Aruba, Zimbabwe, and Argentina, providing insights into regional climate variations.
- Correlation analysis: The code calculates the correlation coefficient between temperature and anomaly values and visualizes the relationship using a scatter plot.

This project provides valuable insights into climate patterns, allowing for a better understanding of temperature variations and anomalies across different regions over time.
