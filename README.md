## 🚀 Getting Started

### 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ioNihal/warewee-test.git
   cd warewee-test
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open your browser and visit:  
   [http://localhost:3000](http://localhost:3000)

---

## 🌐 Live Preview

You can check out the deployed version here:  
**🔗 [Live Site](https://warewee-test.vercel.app)**

---

## 🖼️ Preview

![Project Preview](./desktop.png)
![Project Preview](./mobile.png) 



I want to be honest about my process. At first, I didn’t know Tailwind CSS this deeply, but I had a solid understanding of regular CSS. So I decided to use CSS Modules with scoped styling to keep my code clean, readable, and well-organized.

I also ran into some performance issues with SVGs. Some of them were huge—up to 12MB! I optimized them by converting to PNG (which brought them down to 900KB), and then further compressed them into WebP format, ending up with just 100KB. This significantly improved load time.

You might be thinking I finished this pretty quickly and probably used AI to do it. That’s partly true. I did use ChatGPT to generate a base folder structure, which was pretty decent. But I made several custom tweaks to better fit my needs.

Midway through, I had to go to the hospital and wasn’t sure when I’d return. So I quickly made sure the mobile nav was at least hidden, though I didn’t have time to add a proper hamburger menu or complete the drawer navigation.

I initially used ChatGPT to build the drawer component too, but the result wasn’t great. I ended up rewriting most of it. That’s why you might notice some class names that look “too perfect” or the use of aria-labels—it came from AI-generated suggestions that I refined. There's also an unused ref I forgot to remove, which I’ll clean up later. As of now, I’m literally writing this README from the hospital.

Lastly, about Tailwind CSS: Instead of slowing myself down learning something new under time pressure, I chose to go with what I already knew well. And honestly, I think that was the most efficient choice.