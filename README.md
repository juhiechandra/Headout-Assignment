# Unsplash Video
### Headout Assignment
<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.gif">
      <img alt="Animated Remotion Logo" src="https://user-images.githubusercontent.com/75068056/236899416-94da4313-5aca-4c2e-8d71-c14fc0ecdfc2.png">
    </picture>
  </a>
</p>


## Table of Contents
1. [Outcomes Expected](#outcomes-expected)
2. [Process](#process)
3. [Decisions](#decisions)
4. [Demo Video](#demo-video)
5. [Instructions To Setup](#instructions)
6. [References](#references)
7. [Thanking Note](#thanking-note)


## Outcomes Expected

 - **Use Unsplash API:** Use Unsplash API to fetch at least 5 images from a
   chosen profile and store them in a local directory in the project.
   
- **Create a showreel:** Use any tool of your choice to create a 10-15
   second video that showcases the images. Add animation, transition,
   sound effects, and export the video in a common format.
   
 - **Document your process:** Create a README file that explains your
   approach to the assignment, any decisions made, and instructions on
   how to run the script and build the video. Publish the assignment on
   a public repository on your Github/Gitlab profile.

## Process
![image](https://user-images.githubusercontent.com/75068056/236891978-97326122-c325-4ff4-a1cc-90a9a45a1b70.png)


 
## Decisions
### How to go about fetching data:
![image](https://user-images.githubusercontent.com/75068056/236894462-892a5232-8724-44ca-b0f9-1514e0092c18.png)


### Using static images in video or using @remotion/preload:
![image](https://user-images.githubusercontent.com/75068056/236894257-c7494ab0-7727-481c-902d-0691fb0f53a4.png)

### How to go about integrating script and video app:
![image](https://user-images.githubusercontent.com/75068056/236895264-2cee1245-ee42-41c4-bf0c-12f74699b779.png)

## Demo Video

This video is rendered from this codebase
[Youtube Video](https://youtube.com/shorts/r-EoNCJILRw?feature=share)

## Instructions

#### Setup Locally
To set up this project on your local system, follow these steps:

**1. Clone the repository using the following command:**
```console
git clone https://github.com/juhiechandra/Headout-Assignment.git
``` 
    
**2. Install Dependencies**

```console
npm i
```
**3. Create a profile on Unsplash for Developers** 

**4. Create your Unsplash API Application**

**5. Get the Access key. Replace "ENTER_YOUR_CLIENT_ID" in /scripts/index.js with it.**

```const  collectionResponse  =  await  axios.get('https://api.unsplash.com/search/collections?query=winter&client_id=ENTER_YOUR_CLIENT_ID');```

```const  photoResponse  =  await  axios.get(`https://api.unsplash.com/collections/${collectionId}/photos?client_id=ENTER_YOUR_CLIENT_ID&per_page=5&orientation=landscape&content_filter=low`);```

**6.Change Output Path of /scripts/index.js to Public folder in your local system**

```function downloadImg(url, i) {
  const outputPath = '/Users/juhiechandra/Interns-assign/my-video/public';
  const collectionName = 'image';
```
**7. Fetch Important Scripts:**
 ```console
npm run fetch
```

**8. Start Preview**

```console
npm start
```

**9. Render video**

```console
npm run build
```

**10. Upgrade Remotion**

```console
npm run upgrade
```
**11. You can modify search query to any theme you like.**

**12. You can modify Intro Text in /src/Intro.jsx to any theme you like.
 ```<div  style={{...}}>THEME OF YOUR CHOICE</div>```**

### References

1. Remotion Docs
2. Node.js Docs
3. [Fireship Tutorial on Remotion](https://www.youtube.com/watch?v=deg8bOoziaE)

## Thanking Note
I'd sincerely like to thank Sid for being patient with throughout this assignment. Happy Headouting!⛱️🏖️


