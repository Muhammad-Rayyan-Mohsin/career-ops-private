## Report: Week 2 - Feature Selection and Engineering

---

**Dataset:** Loan Prediction Dataset

### Theory

### 1. Importance of Feature Selection

Feature selection is crucial in building robust and efficient machine learning models. It helps in:

- **Reducing Over-fitting**: By removing irrelevant or redundant features, the model becomes less complex and more generalizable.
- **Improving Accuracy**: Better features lead to better model performance.
- **Reducing Training Time**: Fewer features mean less computational effort, resulting in faster training.

### 2. Techniques for Feature Selection

- **Filter Methods**: Evaluate the relevance of features by looking at the intrinsic properties of data. Examples include correlation coefficients, chi-square test, and mutual information.
- **Wrapper Methods**: Evaluate the features by training and testing the model on different combinations of features. Examples include forward selection, backward elimination, and recursive feature elimination (RFE).
- **Embedded Methods**: Perform feature selection during the process of model training. Examples include Lasso regression and tree-based methods.

### 3. Advanced Feature Engineering

- **Polynomial Features**: Creating interaction features that capture relationships between original features.
- **Domain-Specific Features**: Crafting features based on domain knowledge to improve model performance.

---

### Practical Implementation

### Data Preparation

First, we loaded the dataset and performed necessary preprocessing steps, such as encoding categorical variables and dropping irrelevant columns. We also created new features to capture more information and improve the model's predictive power. These new features included Total Assets Value, Debt-to-Income (DTI) ratio, Income x Loan Term, Loan to Asset Ratio, and Total Asset Ratio x Income.

### Feature Scaling

To ensure all features contributed equally to the model, we scaled the numerical columns using standardization.

### Train-Test Split

We split the dataset into training and testing sets to evaluate the model's performance on unseen data.

### Initial Model Performance (Without Feature Selection)

Before applying any feature selection methods, we trained several models and evaluated their performance:

- **Logistic Regression**: 62.8% accuracy
- **Decision Trees**: 96% accuracy
- **K-means**: 57.8% accuracy
- **Random Forest**: 98% accuracy

### Regularization Techniques

1. **Lasso Regression (L1)**: Helped improve Logistic Regression accuracy from **89.9%** to **90.5%.**
2. **Ridge Regression**: Improved Logistic Regression accuracy to **90.3%** and SVM accuracy to **90.5%**.
3. **Elastic Net**: Enhanced Logistic Regression accuracy to **90.5%**.

### Cross-Validation

To ensure the robustness of our models, we performed 5-fold cross-validation, assessing the models' performance across multiple splits of the dataset. This provided a more reliable estimate of the models' generalization capabilities.

---

### **Summary**

- **Feature Engineering**: Created new features like Total Assets Value, DTI, Income x Loan Term, Loan to Asset Ratio, and Total asset ratio x Income.
- **Feature Selection**: Applied various feature selection methods, including filter methods (mutual information, correlation, variance threshold), wrapper methods (forward selection, backward elimination, RFE), and embedded methods (Lasso, Random Forest feature importance).
- **Regularization Techniques**: Utilized Lasso, Ridge, and Elastic Net to improve model performance.
- **Initial Model Performance**: Evaluated models without feature selection, resulting in lower accuracies.
- **Model Training**: Retrained Logistic Regression, Decision Trees, K-means, SVM, and Random Forest models, achieving significant accuracy improvements.
- **Evaluation**: Evaluated models using classification report, accuracy, and confusion matrix. Performed cross-validation to ensure model robustness.

This comprehensive approach to feature selection and engineering, followed by rigorous model training and evaluation, provides a solid foundation for building accurate and efficient machine learning models for loan prediction.

---
