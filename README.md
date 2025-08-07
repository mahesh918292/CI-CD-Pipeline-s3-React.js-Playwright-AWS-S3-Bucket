# 🚀 React App with CI/CD Pipeline using GitHub Actions & S3

This repository contains a React.js application with a fully automated CI/CD pipeline powered by **GitHub Actions**. It builds, tests, and deploys the app to an **Amazon S3** bucket configured for static website hosting.

---

## 🛠️ Tech Stack

| Technology         | Purpose                          |
|--------------------|----------------------------------|
| **React.js**       | Frontend framework               |
| **Playwright**     | End-to-end testing               |
| **GitHub Actions** | CI/CD automation                 |
| **Amazon S3**      | Static site hosting              |

---

## ⚙️ CI/CD Workflow Summary

Every time code is pushed to the `main` branch or a pull request is opened against it, the following steps are executed automatically:

1. ✅ **Checkout Code**  
   Retrieves the latest code from the repository.

2. 🧰 **Set Up Node.js**  
   Initializes the Node.js environment (v22).

3. 📦 **Install Dependencies**  
   Installs project dependencies using `npm ci`.

4. 🌐 **Install Playwright Browsers**  
   Downloads required browser binaries for Playwright testing.

5. 🧪 **Run Tests**  
   Executes Playwright tests to validate the application.

6. 🏗️ **Build React App**  
   Compiles the production-ready React app into the `build/` directory.

7. 🛠️ **Install AWS CLI**  
   Installs the AWS CLI for deployment.

8. 🚀 **Deploy to S3**  
   Syncs the `build/` folder to the configured S3 bucket using credentials stored in GitHub Secrets.

---

## 🔐 Secrets Configuration

To enable deployment, the following secrets must be added to your GitHub repository:

| Secret Name             | Description                          |
|-------------------------|--------------------------------------|
| `AWS_ACCESS_KEY_ID`     | Your AWS access key ID               |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret access key           |
| `AWS_S3_BUCKET`         | Name of your S3 bucket               |
| `AWS_REGION` *(optional)* | Defaults to `ap-south-1` if not set |

---

## 🌐 Live Deployment

Once deployed, your app will be accessible via the S3 static website endpoint:

