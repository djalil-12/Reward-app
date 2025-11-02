# Ad Reward App

<!-- Add a screenshot of your application here -->
<!-- ![App Screenshot](link-to-your-screenshot.png) -->

A simple application for earning rewards by watching ads and completing tasks. Users can manage their profile, language preferences, and request withdrawals of their earnings.

<!-- Add a live demo link if you have one -->
<!-- [**Live Demo**](https://your-demo-link.com) -->

---

## ✨ Features

-   **Google Account Sign-In:** Secure and easy login for users.
-   **Earn Points:** Watch ads to accumulate reward points.
-   **Complete Tasks:** Engage with multi-step tasks for bonus rewards.
-   **Withdraw Earnings:** Request withdrawals via PayPal (requires backend setup).
-   **History Tracking:** View a complete history of all withdrawal requests.
-   **Profile Management:** Users can update their name and verify their phone number.
-   **Multi-language Support:** Seamlessly switch between English & Arabic with full RTL support.
-   **Responsive Design:** Fully functional and looks great on both mobile and desktop.

---

## 🚀 Tech Stack

-   **Frontend:** React, Tailwind CSS (via CDN)
-   **Backend (Example):** Node.js, Express, Firebase Firestore

---

## 🛠️ Getting Started

### Prerequisites

-   A modern web browser.
-   [Node.js](https://nodejs.org/) installed on your machine.
-   A [Firebase project](https://firebase.google.com/) for the backend.

### Installation & Running the App

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ad-reward-app.git
    cd ad-reward-app
    ```

2.  **Run the Frontend:**
    ```bash
    # Install dependencies
    npm install

    # Start the development server
    npm start
    ```
    The frontend will be available at the local address provided by the server (e.g., `http://localhost:8080`).

3.  **Run the Backend:**
    The `server/withdrawal.js` file is an example backend for processing withdrawal requests.
    ```bash
    # Navigate to the server directory in a new terminal
    cd server

    # Install server dependencies
    npm install

    # IMPORTANT: Configure Firebase
    # Open `server/withdrawal.js` and replace the placeholder `serviceAccount` object 
    # with your actual Firebase Admin SDK credentials from your Firebase project settings.

    # Start the server
    npm start
    ```
    The backend will run on `http://localhost:3001`.

---

## 🚀 النشر (Deployment)

لجعل تطبيقك يعمل عبر الإنترنت، تحتاج إلى نشر الواجهة الأمامية (Frontend) والخادم الخلفي (Backend) بشكل منفصل.

### الخطوة 1: نشر الواجهة الأمامية (Frontend) على GitHub Pages

GitHub Pages هي طريقة مجانية لاستضافة المواقع الثابتة مباشرة من مستودع GitHub الخاص بك.

1.  **إنشاء مستودع على GitHub:** إذا لم تكن قد فعلت ذلك بالفعل، فأنشئ مستودعًا جديدًا على حسابك في GitHub.

2.  **دفع الكود إلى المستودع:**
    ```bash
    # قم بربط مشروعك المحلي بالمستودع على GitHub
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    
    # تأكد من أنك على الفرع الرئيسي (main)
    git branch -M main
    
    # ادفع الكود
    git push -u origin main
    ```

3.  **تفعيل GitHub Pages:**
    -   اذهب إلى مستودعك على GitHub.
    -   انقر على **Settings** (الإعدادات).
    -   في القائمة الجانبية، انقر على **Pages**.
    -   تحت قسم "Build and deployment"، اختر المصدر (Source) ليكون **Deploy from a branch**.
    -   اختر الفرع (Branch) ليكون `main` والمجلد ليكون `/(root)`.
    -   انقر على **Save**.
    -   بعد بضع دقائق، سيتم نشر موقعك وسيكون متاحًا على الرابط: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

### الخطوة 2: نشر الخادم الخلفي (Backend)

لا يمكن تشغيل الخادم الخلفي (ملف `server/withdrawal.js`) على GitHub Pages. تحتاج إلى استضافته على خدمة تدعم تطبيقات Node.js مثل [Render](https://render.com/) أو [Heroku](https://www.heroku.com/). (Render لديه خطة مجانية جيدة للمشاريع الصغيرة).

1.  **إنشاء حساب:** أنشئ حسابًا مجانيًا على [Render.com](https://render.com/).

2.  **إنشاء خدمة ويب جديدة (New Web Service):**
    -   في لوحة التحكم، انقر على **New +** ثم **Web Service**.
    -   اربط حسابك في GitHub واختر مستودع التطبيق الخاص بك.
    -   **الإعدادات:**
        -   **Name:** اختر اسمًا لخدمتك (مثال: `ad-reward-app-server`).
        -   **Root Directory:** `server` (لأن كود الخادم موجود في هذا المجلد).
        -   **Environment:** `Node`.
        -   **Build Command:** `npm install`.
        -   **Start Command:** `node withdrawal.js`.
    -   اختر الخطة المجانية (Free tier).
    -   انقر على **Create Web Service**.

3.  **الحصول على رابط الخادم:** بعد اكتمال النشر، سيعطيك Render رابطًا عامًا لخادمك (مثال: `https://ad-reward-app-server.onrender.com`). احتفظ بهذا الرابط.

### الخطوة 3: ربط الواجهة الأمامية بالخلفية

1.  **تحديث رابط الخادم:**
    -   افتح ملف `components/WithdrawalTab.tsx` في مشروعك.
    -   ابحث عن السطر التالي:
        ```javascript
        const API_BASE_URL = 'https://your-backend-server-url.com';
        ```
    -   استبدل `https://your-backend-server-url.com` بالرابط الفعلي لخادمك الذي حصلت عليه من Render.

2.  **إعادة نشر الواجهة الأمامية:**
    -   بعد حفظ التغيير، قم بدفع التحديثات إلى GitHub:
        ```bash
        git add .
        git commit -m "Update API base URL"
        git push origin main
        ```
    -   سيقوم GitHub Pages تلقائيًا بإعادة نشر موقعك بالتحديثات الجديدة.

---

## ⚠️ Important Configuration Notes

-   **Google Client ID:** بعد نشر موقعك على GitHub Pages، يجب عليك تحديث "مصادر JavaScript المصرّح بها" (Authorized JavaScript origins) لمعرف العميل الخاص بك في [Google Cloud Console](https://console.cloud.google.com/) لتشمل رابط موقعك الجديد (`https://YOUR_USERNAME.github.io`). بدون هذه الخطوة، لن يعمل تسجيل الدخول بحساب Google.

-   **Ad Network:** The ad URL in `components/AdModal.tsx` is a placeholder. You should replace this with your actual ad network provider's URL.

-   **Backend Security:** The provided backend code is a simple example. For a production application, ensure you implement proper security measures, such as authenticating user requests and securing your Firebase rules.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Open a Pull Request.

Please make sure to update tests as appropriate.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.