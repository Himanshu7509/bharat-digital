import WebImage from "@/components/assets/webHero.png";
import img1 from "@/components/assets/p1.png";
import img2 from "@/components/assets/p2.png";
import img3 from "@/components/assets/p3.png";
import img4 from "@/components/assets/p4.png";
import img5 from "@/components/assets/p5.png";
import rightImg from '@/components/assets/ap1.png';
import AppImage from '@/components/assets/appHero.png'
import img6 from "@/components/assets/p6.png";
import img7 from "@/components/assets/p7.png";
import img8 from "@/components/assets/p8.png";
import img9 from "@/components/assets/p9.png";
import SoftImage from '@/components/assets/softHero.png'
import img17 from "@/components/assets/p17.png";
import img18 from "@/components/assets/p18.png";
import img19 from "@/components/assets/p19.png";
import img20 from "@/components/assets/p20.png";
import img21 from "@/components/assets/p21.png";



const servicesData = {
  "web-development": {
    HeroBanner: [
      {
        title: "Web Design and Development",
        para1: "At JobQuick, we specialize in creating high-performing, user-friendly, and visually appealing websites tailored to your business needs. Our expert team designs and develops responsive, SEO-optimized.",
        para2: "From corporate websites to e-commerce and custom web apps, we ensure secure, modern, and high-performing solutions.",
        bannerImage: WebImage,
        gradientColor: ["#4F6BF0", "#25BAC3"]
      },
    ],
    OurProcess: [
      {
          title: 'Planning and Research',
          subtitle: 'Understanding the Project Scope and Goals',
          desc: `Before any design or coding begins, it’s essential to understand what the website aims to achieve. This phase involves gathering requirements, identifying the target audience, and defining the project’s objectives. Planning also includes researching competitors and outlining the site structure with a sitemap or wireframe to create a clear roadmap.`,
          img: img1,
        },
        {
          title: 'Design Phase',
          subtitle: 'Creating Visual Concepts and Layouts',
          desc: `In the design phase, web designers focus on the visual elements of the website such as layout, color schemes, typography, and user interface (UI) tools like Figma or Adobe XD are used to create mockups or prototypes. This step ensures the site is visually appealing and aligns with the brand identity while providing a seamless user experience (UX).`,
          img: img2,
        },
        {
          title: 'Development',
          subtitle: 'Turning Designs into Functional Websites',
          desc: `This is where the actual coding takes place. Front-end developers convert design files into HTML, CSS, and JavaScript, while back-end developers work on server-side programming, databases, and content management systems. The goal is to build a responsive, fast, and secure website that functions smoothly across all devices and browsers.`,
          img: img3,
        },
        {
          title: 'Testing and Review',
          subtitle: 'Ensuring Quality and Performance',
          desc: `Before going live, the website is rigorously tested for functionality, compatibility, speed and security. This includes checking forms, links, responsiveness, and loading times. Bugs and errors are fixed during this stage to ensure that the site works as intended and provides a smooth user experience.`,
          img: img4,
        },
        {
          title: 'Launch and Maintenance',
          subtitle: 'Deploying and Keeping the Website Updated',
          desc: `After successful testing, the website is launched to the public. But the process doesn’t end there—regular maintenance is also crucial. This includes patching errors, fixing issues, enhancing security, and adding new features as needed. Ongoing support ensures the website remains effective and up-to-date with the latest trends and technologies.`,
          img: img5,
        },
    ],
    OurApproach: [
      {
        heading: "Benefits of Bharatdigital for Web Design and Development Services",
        rightImage: rightImg,
      },
    ],
  },

  "app-development": {
    HeroBanner: [
      {
        title: "App Development",
        para1: "At JobQuick, we specialize in creating high-performing, user-friendly, and visually appealing websites tailored to your business needs. Our expert team designs and develops responsive, SEO-optimized.",
        para2: "From corporate websites to e-commerce and custom web apps, we ensure secure, modern, and high-performing solutions.",
        bannerImage: AppImage,
        gradientColor: ["#4F6BF0", "#25BAC3"]
      },
    ],
    OurProcess: [
      {
          title: 'Planning and Research',
          subtitle: 'Defining Goals and Understanding User Needs',
          desc: `This stage involves conducting market research, analyzing competitors, and identifying user expectations. A well-structured plan acts as a roadmap that ensures the app meets business objectives and user demands.`,
          img: img1,
        },
        {
          title: 'Designing the User Interface',
          subtitle: 'Creating an Intuitive and Attractive Design',
          desc: `Once the plan is set, the next step is designing how the app will look and function. UX focuses on the user's journey and ease of navigation, while UI ensures a visually appealing interface. Wireframes, mockups, and prototypes are created to visualize the app.`,
          img: img6,
        },
        {
          title: 'App Development',
          subtitle: 'Writing Code and Building the App',
          desc: `This is the core phase where developers start writing the code based on the approved design. It usually involves two main parts: front-end development (what users see) and back-end development (server-side logic and databases).`,
          img: img7,
        },
        {
          title: 'Testing and Quality Assurance',
          subtitle: 'Identifying Bugs and Improving Performance',
          desc: `Before launching, thorough testing is conducted to find and fix any bugs, glitches, or usability issues. Testing can be manual or automated and covers different aspects like functionality, performance, security, and user interface.`,
          img: img8,
        },
        {
          title: 'Deployment and Maintenance',
          subtitle: 'Launching the App and Providing Ongoing Support',
          desc: `Once the app is tested and approved, it is released to app stores like Google Play or Apple App Store. But the process doesn’t end there—maintenance is crucial. Regular updates, performance monitoring, and user feedback help in improving the app and keeping it relevant over time.`,
          img: img9,
        },
    ],
    OurApproach: [
      {
        heading: "Benefits of Bharatdigital for App Development Services",
        rightImage: rightImg,
      },
    ],
  },

  "software-development": {
    HeroBanner: [
      {
        title: "Software Development",
        para1: "At JobQuick, we specialize in creating high-performing, user-friendly, and visually appealing websites tailored to your business needs. Our expert team designs and develops responsive, SEO-optimized.",
        para2: "From corporate websites to e-commerce and custom web apps, we ensure secure, modern, and high-performing solutions.",
        bannerImage: SoftImage,
        gradientColor: ["#4F6BF0", "#25BAC3"]
      },
    ],
    OurProcess: [
      {
          title: 'Planning and Research',
          subtitle: 'Defining Goals and Understanding User Needs',
          desc: `This stage involves conducting market research, analyzing competitors, and identifying user expectations. A well-structured plan acts as a roadmap that ensures the app meets business objectives and user demands.`,
          img: img17,
        },
        {
          title: 'Designing the User Interface',
          subtitle: 'Creating an Intuitive and Attractive Design',
          desc: `Once the plan is set, the next step is designing how the app will look and function. UX focuses on the user's journey and ease of navigation, while UI ensures a visually appealing interface. Wireframes, mockups, and prototypes are created to visualize the app.`,
          img: img18,
        },
        {
          title: 'App Development',
          subtitle: 'Writing Code and Building the App',
          desc: `This is the core phase where developers start writing the code based on the approved design. It usually involves two main parts: front-end development (what users see) and back-end development (server-side logic and databases).`,
          img: img19,
        },
        {
          title: 'Testing and Quality Assurance',
          subtitle: 'Identifying Bugs and Improving Performance',
          desc: `Before launching, thorough testing is conducted to find and fix any bugs, glitches, or usability issues. Testing can be manual or automated and covers different aspects like functionality, performance, security, and user interface.`,
          img: img20,
        },
        {
          title: 'Deployment and Maintenance',
          subtitle: 'Launching the App and Providing Ongoing Support',
          desc: `Once the app is tested and approved, it is released to app stores like Google Play or Apple App Store. But the process doesn’t end there—maintenance is crucial. Regular updates, performance monitoring, and user feedback help in improving the app and keeping it relevant over time.`,
          img: img21,
        },
    ],
    OurApproach: [
      {
        heading: "Benefits of Bharatdigital for App Development Services",
        rightImage: rightImg,
      },
    ],
  },
};

export default servicesData