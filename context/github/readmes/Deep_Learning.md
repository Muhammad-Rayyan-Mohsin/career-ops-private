## Week 5 Report: Deep Learning and Neural Networks

### 1. Theory

1. **Advanced Neural Network Architectures**
    - Studied Convolutional Neural Networks (CNNs) for image recognition.
    - Explored Recurrent Neural Networks (RNNs) for sequential data analysis.
    - Examined Transformer Networks for their application in language processing and sequence modeling.
2. **Transfer Learning and Pre-trained Models**
    - Investigated the principles of transfer learning.
    - Reviewed the use of pre-trained models to reduce training time and improve accuracy.

### 2. **Practical Implementation**

**1. Data Preparation**

- **Data Cleaning**: The initial steps involved handling missing values and ensuring data integrity. The first column (label) was separated from the pixel data for further processing.
- **Feature Scaling**: Normalized pixel values by dividing by 255.0 to ensure the data values are within the range of [0, 1].
- **Feature Reshaping**: Reshaped the pixel data to match the image shape (28x28) for CNN and upscaled images to (32x32) for VGG16 transfer learning.
- **Label Encoding**: Converted the labels into categorical values using `to_categorical` for compatibility with neural network training.

**2. Model Training and Evaluation**

- **Convolutional Neural Networks (CNNs)**:
    - **Baseline Model**: Built a CNN model consisting of Conv2D, MaxPooling2D, Flatten, and Dense layers. The model was trained for 10 epochs with a batch size of 32, achieving a test accuracy of approximately 90.1% test accuracy.
- **Transfer Learning with VGG16**:
    - **Data Preparation**: Upscaled images from 28x28 to 32x32 and converted grayscale images to 3-channel RGB to match the input requirements of VGG16.
    - **Model Setup**: Loaded the pre-trained VGG16 model without the top classification layer and added custom Dense layers for classification.
    - **Training**: Trained the modified VGG16 model for 3 epochs with a batch size of 32. Achieved a test accuracy of approximately 93% test accuracy.

---

### 3. Results

- **Convolutional Neural Networks (CNNs)**:
    - Achieved a baseline test accuracy of 90.1%. The CNN model demonstrated the ability to classify Fashion MNIST images with reasonable accuracy.
- **Transfer Learning with VGG16**:
    - Achieved a test accuracy of 93%. Transfer learning with VGG16 provided a boost in performance, showcasing the effectiveness of pre-trained models on image classification tasks.

**Best Hyperparameters**:

- The CNN model used default parameters with the following settings: `Conv2D(32, (3, 3))`, `MaxPooling2D((2, 2))`, `Conv2D(64, (3, 3))`, `MaxPooling2D((2, 2))`, `Conv2D(128, (3, 3))`, `Dense(128, activation='relu')`, and `Dense(num_classes, activation='softmax')`.
- For the VGG16 model, the base layers were frozen, and the following layers were added: `Flatten()`, `Dense(128, activation='relu')`, and `Dense(num_classes, activation='softmax')`.

---

### 4. Conclusion

This week's work focused on the implementation of CNNs and transfer learning using the VGG16 model to classify the Fashion MNIST dataset. The practical tasks involved data preparation, model training, and evaluation. The results highlighated the importance of neural network architectures and the potential of transfer learning to improve model performance. The hands-on experience with these techniques provided valuable insights into the intricacies of deep learning and the benefits of leveraging pre-trained models.
