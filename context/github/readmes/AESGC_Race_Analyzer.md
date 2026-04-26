# AESGC_Race_Analyzer
The AESGC Race Predictor Pro web application is a comprehensive tool designed to analyze and visualize participant guesses for horse races. This application was developed for the Al Ain Equestrian, Shooting & Golf Club (AESGC), a premier sports facility in Al Ain, Abu Dhabi. The club is renowned for its world-class equestrian, shooting, and golf facilities, making it a hub for sports enthusiasts in the region.


![WhatsApp Image 2024-12-06 at 00 05 16_aec40ce8](https://github.com/user-attachments/assets/66a6bec9-165c-4919-a00d-8e3991e5587d)

![WhatsApp Image 2024-12-06 at 00 06 30_3247bee0](https://github.com/user-attachments/assets/c6be7fda-6a58-4382-afec-30b164ff758a)

![WhatsApp Image 2024-12-06 at 00 07 06_8f59c010](https://github.com/user-attachments/assets/2f7df250-86d0-49eb-a3b1-50432a2c0bd5)

![WhatsApp Image 2024-12-06 at 00 07 58_544bb6fe](https://github.com/user-attachments/assets/56764f76-6dc3-4013-85ad-4eaa4bfd6ab6)

### Key Features

1. **Data Loading and Caching**:
    - The application utilizes Streamlit's caching mechanism to load guesses data efficiently from a CSV file. This ensures that the data is quickly accessible and reduces the load time for subsequent analyses.
2. **Guesses Analysis**:
    - The core functionality of the application involves analyzing participant guesses against correct answers. The analysis is performed using vectorized operations to enhance performance. The results include detailed points calculation for each race and OPT (Optional) guesses.
3. **PDF Report Generation**:
    - The application generates a detailed PDF report summarizing the analysis. The PDF includes sections for lucky draw winners, correct answers summary, and top scorers. The PDF is styled with a modern and professional design, utilizing a dark charcoal gray background and gold accents for a premium feel.
4. **User Interface**:
    - The user interface is built using Streamlit, providing an intuitive and interactive experience. Users can upload guesses files, input correct answers, and view detailed results. The interface also includes custom styling for headers and logos, enhancing the overall user experience.
5. **Lucky Draw Feature**:
    - The application includes a lucky draw feature that allows users to conduct lucky draws for top performers in various categories. The results of the lucky draws are displayed in the PDF report.
6. **Visualizations**:
    - The application uses Plotly to create interactive visualizations, such as gauge charts, to display the total points for specific participants. This helps users quickly understand the performance metrics.
7. **Error Handling**:
    - Robust error handling is implemented throughout the application to ensure that any issues during data loading, analysis, or PDF generation are promptly reported to the user.

---

### Technical Details

1. **Libraries and Frameworks**:
    - **Streamlit**: Used for building the web application interface.
    - **Pandas**: Utilized for data manipulation and analysis.
    - **Plotly**: Employed for creating interactive visualizations.
    - **ReportLab**: Used for generating PDF reports.
    - **PIL (Python Imaging Library)**: Used for image processing and display.
2. **Code Structure**:
    - The code is modular, with functions for loading data, analyzing guesses, creating PDFs, and handling user interactions. This structure ensures maintainability and scalability.
3. **Performance Optimization**:
    - Vectorized operations are used in the `analyze_guesses` function to improve performance. Caching is implemented to speed up data loading.
4. **Styling and Design**:
    - Custom CSS is used to style the application, including headers, logos, and other UI elements. The design aims to provide a modern and professional look.

---

### Application Conversion

The web application was converted into a standalone application using Auto-Py-to-Exe (PyInstaller). This allows the application to be distributed and used without the need for a web server, making it more accessible for end-users.

---

### Conclusion

The AESGC Race Predictor Pro web application is a powerful tool for analyzing and visualizing participant guesses for horse races. With its comprehensive features, intuitive user interface, and robust performance, it meets the needs of the Al Ain Equestrian, Shooting & Golf Club. The conversion to a standalone application further enhances its usability and accessibility.

---
