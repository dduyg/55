---
layout: essay
type: essay
published: true
title: "Example Post"
permalink: posts/fenced-code-blocks
# All dates must be YYYY-MM-DD format!
date: 2023-09-08
labels:
  - Text Transformation
  - JavaScript
  - Glitch
# projectlabel: -
# mediumurl: -
# githuburl: -
# summary of max. 165 characters <meta name="description>
summary: fjkkfhjjijjghj
---

```R
# Install and load required packages
install.packages(c("readr", "readxl", "DBI", "RSQLite", "RODBC", "DBI", "odbc"))

library(readr)
library(readxl)
library(DBI)
library(RSQLite)
library(RODBC)
library(odbc)

# Define functions for importing data from different sources
# Function to import data from CSV files
import_csv <- function(file_path) {
  data <- read_csv(file_path)
  return(data)
}

# Function to import data from Excel files
import_excel <- function(file_path, sheet_name) {
  data <- read_excel(file_path, sheet = sheet_name)
  return(data)
}

# Function to import data from databases (SQLite, MySQL, etc.)
import_database <- function(connection_string, query) {
  con <- dbConnect(odbc::odbc(), .connection_string = connection_string)
  data <- dbGetQuery(con, query)
  dbDisconnect(con)
  return(data)
}

# Define file paths and connection strings for data sources
# Customize these according to your specific data sources
csv_file_paths <- c("path/to/your/csv/file1.csv", "path/to/your/csv/file2.csv")
excel_file_path <- "path/to/your/excel/file.xlsx"
excel_sheet_name <- "Sheet1"
database_connection_string <- "Driver={SQLite};Database=path/to/your/database.sqlite"
database_query <- "SELECT * FROM your_table"

# Import data from CSV files
csv_data <- lapply(csv_file_paths, import_csv)

# Import data from Excel file
excel_data <- import_excel(excel_file_path, excel_sheet_name)

# Import data from database
database_data <- import_database(database_connection_string, database_query)

# Combine all datasets into a single dataset
final_dataset <- do.call(rbind, list(csv_data, list(excel_data), list(database_data)))

# Save the final dataset to a CSV file
write.csv(final_dataset, "final_dataset.csv", row.names = FALSE)

# Print summary of the final dataset
print(summary(final_dataset))
```
