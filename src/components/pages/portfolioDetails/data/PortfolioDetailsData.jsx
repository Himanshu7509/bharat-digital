import WebImg from "../../../assets/stroyss.png";
import GameImg from "@/components/assets/GameDevelopment.png"
import GameImg2 from "@/components/assets/GameDevelopment2.png"
import Gamelogo from "@/components/assets/gamelogo.png"
import Appport1 from "@/components/assets/Appportfolio.png"
import Appport2 from "@/components/assets/Appportfolio2.png"
import soft1 from "@/components/assets/software1.png"
import soft2 from "@/components/assets/software2.png"
import Applogo from "@/components/assets/Applogo.png"
import softlogo from "@/components/assets/softwarelogo.png"
import Logo from "../../../assets/GoldStoryLogo.png";
import Rect from "../../../assets/stroyss.png";
import Angular from "../../../assets/AngularLogo.png";
import Flutter from "../../../assets/FlutterLogo.png";
import Kubernetes from "../../../assets/KubernetesLogo.png";
import Bootstrap from "../../../assets/BootstrapLogo.png";
import img1 from "../../../assets/box1.png";
import img2 from "../../../assets/box2.png";
import img3 from "../../../assets/box3.png";
import gameimg1 from "@/components/assets/gamebox1.png";
import gameimg2 from "@/components/assets/gamebox2.png";
import gameimg3 from "@/components/assets/gamebox3.png";
import appimg1 from "@/components/assets/Appbox1.png";
import appimg2 from "@/components/assets/Appbox2.png";
import appimg3 from "@/components/assets/Appbox3.png";
import softimg1 from "@/components/assets/softwarebox1.png";
import softimg2 from "@/components/assets/softwarebox2.png";
import softimg3 from "@/components/assets/softwarebox3.png";



const portfoliodetailsdata = {
    "web-portfolio": {
        HeroBanner: [
            {
                title: "Web Portfolio Showcase",
                mainTitle: "Empowering tech",
                highlightText: "companies to build",
                endTitle: "better",
                accentText: "AI.",
                para1:
                    "Real-time code collaboration. Interactive virtual events. Off-sites in the metaverse. When Fluxonians have ideas to help teams work better, we build them. Make your workday better with Fluxon Apps.",
                heroImage: WebImg,
                imageAlt: "Web Portfolio Hero",
            },
        ],
        goldstory: [
            {
                brand: {
                    name: "Goldstory",
                    logo: Logo,
                    previewBtn: "Preview",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    image: Rect,
                },
                overview: {
                    title: "Overview",
                    description:
                        "More and more businesses are integrating AI into their tech stacks. By enabling their clients to test and improve the performance of their large language models (LLMs), Braintrust help them ship better products, faster. Acting as development partner, Fluxon built a powerful yet user-friendly interface for the Braintrust product, greatly accelerating its time to market.",
                },
                ask: {
                    title: "The ask",
                    description:
                        "As a new company with a small team, Braintrust were looking for a partner they could trust to develop their AI software user interface. Speed to market was critical, so they needed an experienced team that could build the UI rapidly, while implementing client feedback and requests.",
                },
                services: {
                    title: "Services",
                    items: [
                        "AI dev",
                        "App dev",
                        "Web dev",
                        "User testing",
                        "Game dev",
                        "Software dev",
                    ],
                },
                deliverables: {
                    title: "Deliverables",
                    items: [
                        "Intuitive user interface",
                        "Prompt playground",
                        "Large dataset visualization",
                    ],
                },
                solution: {
                    title: "The solution",
                    description:
                        "Fluxon built an easy-to-use interface that enables Braintrust's clients to quickly evaluate and optimize the quality of their LLMs' responses. For Braintrust, adaptability and flexibility in development were key. Together, we rapidly iterated on feedback and requests from users, building new features and finetuning others as needed. The result was a powerful yet elegantly simple UI – one that's helping the next generation of AI-powered companies to perfect their models.",
                    technologies: [
                        { name: "Angular", logo: Angular },
                        { name: "Flutter", logo: Flutter },
                        { name: "Kubernetes", logo: Kubernetes },
                        { name: "Docker", logo: Kubernetes },
                        { name: "Bootstrap", logo: Bootstrap },
                    ],
                },
                impact: {
                    title: "The impact",
                    description:
                        "Fluxon's rapid development approach helped Braintrust get an impressive new product to market swiftly. Trusting us to deliver a robust UI, their team was free to focus on perfecting the backend and growing the business. By building an excellent product and remaining consistently responsive to their clients' needs, Braintrust have proven themselves to be an indispensable partner.",
                },
            },
        ],
        projectGallery: [
            {
                id: 1,
                title: "Goldstory",
                image: img1,
                alt: "Goldstory Project",
                backgroundColor: "#e6edff",
                style: "w-[432px] h-[303px] object-contain",
                centered: true,
            },
            {
                id: 2,
                title: "",
                image: img2,
                alt: "Multiple Application Screens",
                backgroundColor: "#e6edff",
                style: "w-full h-full max-w-full object-cover rounded-lg ml-20 overflow-hidden",
                centered: true,
            },
            {
                id: 3,
                title: "",
                image: img3,
                alt: "Divine Idols Website",
                backgroundColor: "#e6edff",
                style: "w-full h-auto max-w-full object-contain rounded-lg ml-25 overflow-hidden",
                centered: true,
            },
        ],
    },
     "Game-portfolio": {
        HeroBanner: [
            {
                title: "Game Portfolio Showcase",
                mainTitle: "Empowering tech",
                highlightText: "companies to build",
                endTitle: "better",
                accentText: "AI.",
                para1:
                    "Real-time code collaboration. Interactive virtual events. Off-sites in the metaverse. When Fluxonians have ideas to help teams work better, we build them. Make your workday better with Fluxon Apps.",
                heroImage: GameImg,
                imageAlt: "Game Portfolio Hero",
            },
        ],
        goldstory: [
            {

                brand: {
                    name: "Kids Puzzle Game",
                    logo: Gamelogo,
                    previewBtn: "Preview",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    image: GameImg2,
                },
                overview: {
                    title: "Overview",
                    description:
                        "More and more businesses are integrating AI into their tech stacks. By enabling their clients to test and improve the performance of their large language models (LLMs), Braintrust help them ship better products, faster. Acting as development partner, Fluxon built a powerful yet user-friendly interface for the Braintrust product, greatly accelerating its time to market.",
                },
                ask: {
                    title: "The ask",
                    description:
                        "As a new company with a small team, Braintrust were looking for a partner they could trust to develop their AI software user interface. Speed to market was critical, so they needed an experienced team that could build the UI rapidly, while implementing client feedback and requests.",
                },
                services: {
                    title: "Services",
                    items: [
                        "AI dev",
                        "App dev",
                        "Web dev",
                        "User testing",
                        "Game dev",
                        "Software dev",
                    ],
                },
                deliverables: {
                    title: "Deliverables",
                    items: [
                        "Intuitive user interface",
                        "Prompt playground",
                        "Large dataset visualization",
                    ],
                },
                solution: {
                    title: "The solution",
                    description:
                        "Fluxon built an easy-to-use interface that enables Braintrust's clients to quickly evaluate and optimize the quality of their LLMs' responses. For Braintrust, adaptability and flexibility in development were key. Together, we rapidly iterated on feedback and requests from users, building new features and finetuning others as needed. The result was a powerful yet elegantly simple UI – one that's helping the next generation of AI-powered companies to perfect their models.",
                    technologies: [
                        { name: "Angular", logo: Angular },
                        { name: "Flutter", logo: Flutter },
                        { name: "Kubernetes", logo: Kubernetes },
                        { name: "Docker", logo: Kubernetes },
                        { name: "Bootstrap", logo: Bootstrap },
                    ],
                },
                impact: {
                    title: "The impact",
                    description:
                        "Fluxon's rapid development approach helped Braintrust get an impressive new product to market swiftly. Trusting us to deliver a robust UI, their team was free to focus on perfecting the backend and growing the business. By building an excellent product and remaining consistently responsive to their clients' needs, Braintrust have proven themselves to be an indispensable partner.",
                },
            },
        ],
        projectGallery: [
            {
                id: 1,
                title: "",
                image: gameimg1,
                alt: "Goldstory Project",
                backgroundColor: "#e6edff",
                style: "w-[432px]  object-contain",
                centered: true,
            },
            {
                id: 2,
                title: "",
                image: gameimg2,
                alt: "Multiple Application Screens",
                backgroundColor: "#e6edff",
                style: "w-full h-full max-w-full object-cover rounded-lg ",
                centered: true,
            },
            {
                id: 3,
                title: "Kids Puzzle",
                image: gameimg3,
                alt: "Divine Idols Website",
                backgroundColor: "#e6edff",
                style: "w-full h-auto max-w-full object-contain rounded-lg ",
                centered: true,
            },
        ],
    },
     "App-portfolio": {
        HeroBanner: [
            {
                title: "App Portfolio Showcase",
                mainTitle: "Empowering tech",
                highlightText: "companies to build",
                endTitle: "better",
                accentText: "AI.",
                para1:
                    "Real-time code collaboration. Interactive virtual events. Off-sites in the metaverse. When Fluxonians have ideas to help teams work better, we build them. Make your workday better with Fluxon Apps.",
                heroImage: Appport1,
                imageAlt: "App Portfolio Hero",
            },
        ],
        goldstory: [
            {

                brand: {
                    name: "GharPeShiksha App",
                    logo: Applogo,
                    previewBtn: "Preview",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    image: Appport2,
                },
                overview: {
                    title: "Overview",
                    description:
                        "More and more businesses are integrating AI into their tech stacks. By enabling their clients to test and improve the performance of their large language models (LLMs), Braintrust help them ship better products, faster. Acting as development partner, Fluxon built a powerful yet user-friendly interface for the Braintrust product, greatly accelerating its time to market.",
                },
                ask: {
                    title: "The ask",
                    description:
                        "As a new company with a small team, Braintrust were looking for a partner they could trust to develop their AI software user interface. Speed to market was critical, so they needed an experienced team that could build the UI rapidly, while implementing client feedback and requests.",
                },
                services: {
                    title: "Services",
                    items: [
                        "AI dev",
                        "App dev",
                        "Web dev",
                        "User testing",
                        "Game dev",
                        "Software dev",
                    ],
                },
                deliverables: {
                    title: "Deliverables",
                    items: [
                        "Intuitive user interface",
                        "Prompt playground",
                        "Large dataset visualization",
                    ],
                },
                solution: {
                    title: "The solution",
                    description:
                        "Fluxon built an easy-to-use interface that enables Braintrust's clients to quickly evaluate and optimize the quality of their LLMs' responses. For Braintrust, adaptability and flexibility in development were key. Together, we rapidly iterated on feedback and requests from users, building new features and finetuning others as needed. The result was a powerful yet elegantly simple UI – one that's helping the next generation of AI-powered companies to perfect their models.",
                    technologies: [
                        { name: "Angular", logo: Angular },
                        { name: "Flutter", logo: Flutter },
                        { name: "Kubernetes", logo: Kubernetes },
                        { name: "Docker", logo: Kubernetes },
                        { name: "Bootstrap", logo: Bootstrap },
                    ],
                },
                impact: {
                    title: "The impact",
                    description:
                        "Fluxon's rapid development approach helped Braintrust get an impressive new product to market swiftly. Trusting us to deliver a robust UI, their team was free to focus on perfecting the backend and growing the business. By building an excellent product and remaining consistently responsive to their clients' needs, Braintrust have proven themselves to be an indispensable partner.",
                },
            },
        ],
        projectGallery: [
            {
                id: 1,
                title: "",
                image: appimg1,
                alt: "Goldstory Project",
                backgroundColor: "#e6edff",
                style: "w-[432px] h-[303px] object-contain",
                centered: true,
            },
            {
                id: 2,
                title: "",
                image: appimg2,
                alt: "Multiple Application Screens",
                backgroundColor: "#e6edff",
                style: "w-full h-full max-w-full object-cover rounded-lg ",
                centered: true,
            },
            {
                id: 3,
                title: "Ghar pe siksha",
                image: appimg3,
                alt: "Divine Idols Website",
                backgroundColor: "#e6edff",
                style: "w-full h-auto max-w-full object-contain rounded-lg ",
                centered: true,
            },
        ],
    },
     "Software-portfolio": {
        HeroBanner: [
            {
                title: "Software Portfolio Showcase",
                mainTitle: "Empowering tech",
                highlightText: "companies to build",
                endTitle: "better",
                accentText: "AI.",
                para1:
                    "Real-time code collaboration. Interactive virtual events. Off-sites in the metaverse. When Fluxonians have ideas to help teams work better, we build them. Make your workday better with Fluxon Apps.",
                heroImage: soft1,
                imageAlt: "Software Portfolio Hero",
            },
        ],
        goldstory: [
            {

                brand: {
                    name: "Remote Desktop Management Software",
                    logo: softlogo,
                    previewBtn: "Preview",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    image: soft2,
                },
                overview: {
                    title: "Overview",
                    description:
                        "More and more businesses are integrating AI into their tech stacks. By enabling their clients to test and improve the performance of their large language models (LLMs), Braintrust help them ship better products, faster. Acting as development partner, Fluxon built a powerful yet user-friendly interface for the Braintrust product, greatly accelerating its time to market.",
                },
                ask: {
                    title: "The ask",
                    description:
                        "As a new company with a small team, Braintrust were looking for a partner they could trust to develop their AI software user interface. Speed to market was critical, so they needed an experienced team that could build the UI rapidly, while implementing client feedback and requests.",
                },
                services: {
                    title: "Services",
                    items: [
                        "AI dev",
                        "App dev",
                        "Web dev",
                        "User testing",
                        "Game dev",
                        "Software dev",
                    ],
                },
                deliverables: {
                    title: "Deliverables",
                    items: [
                        "Intuitive user interface",
                        "Prompt playground",
                        "Large dataset visualization",
                    ],
                },
                solution: {
                    title: "The solution",
                    description:
                        "Fluxon built an easy-to-use interface that enables Braintrust's clients to quickly evaluate and optimize the quality of their LLMs' responses. For Braintrust, adaptability and flexibility in development were key. Together, we rapidly iterated on feedback and requests from users, building new features and finetuning others as needed. The result was a powerful yet elegantly simple UI – one that's helping the next generation of AI-powered companies to perfect their models.",
                    technologies: [
                        { name: "Angular", logo: Angular },
                        { name: "Flutter", logo: Flutter },
                        { name: "Kubernetes", logo: Kubernetes },
                        { name: "Docker", logo: Kubernetes },
                        { name: "Bootstrap", logo: Bootstrap },
                    ],
                },
                impact: {
                    title: "The impact",
                    description:
                        "Fluxon's rapid development approach helped Braintrust get an impressive new product to market swiftly. Trusting us to deliver a robust UI, their team was free to focus on perfecting the backend and growing the business. By building an excellent product and remaining consistently responsive to their clients' needs, Braintrust have proven themselves to be an indispensable partner.",
                },
            },
        ],
        projectGallery: [
            {
                id: 1,
                title: "",
                image: softimg1,
                alt: "Goldstory Project",
                backgroundColor: "#e6edff",
                style: "w-[432px] h-[303px] object-contain",
                centered: true,
            },
            {
                id: 2,
                title: "Remote Desktop Management Software",
                image: softimg2,
                alt: "Multiple Application Screens",
                backgroundColor: "#e6edff",
                style: "w-full h-full max-w-full object-contain rounded-lg px-6 pb-0",
                centered: true,
            },
            {
                id: 3,
                title: "",
                image: softimg3,
                alt: "Divine Idols Website",
                backgroundColor: "#e6edff",
                style: "w-full h-auto max-w-full object-contain rounded-lg p-9 pr-0",
                centered: true,
            },
        ],
    },
};

export default portfoliodetailsdata;