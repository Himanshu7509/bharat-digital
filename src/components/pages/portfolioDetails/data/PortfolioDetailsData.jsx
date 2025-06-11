import Img from "../../../assets/stroyss.png";
import Logo from "../../../assets/GoldStoryLogo.png";
import Rect from "../../../assets/stroyss.png";
import Angular from "../../../assets/AngularLogo.png";
import Flutter from "../../../assets/FlutterLogo.png";
import Kubernetes from "../../../assets/KubernetesLogo.png";
import Bootstrap from "../../../assets/BootstrapLogo.png";
import img1 from "../../../assets/box1.png";
import img2 from "../../../assets/box2.png";
import img3 from "../../../assets/box3.png";

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
                heroImage: Img,
                imageAlt: "Web Portfolio Hero",
            },
        ],
        slides: [
            {
                id: 1,
                title:
                    "1979 saw the company grow into a brand name synonymous with Chandni Chowk, Delhi; offering phenomenal artistry in gold and silver ornaments.",
                backgroundImage:
                    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop",
                category: "Heritage Collection",
            },
            {
                id: 2,
                title:
                    "Exquisite craftsmanship meets modern design in our contemporary jewelry collection, blending tradition with innovation.",
                backgroundImage:
                    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&h=800&fit=crop",
                category: "Modern Artistry",
            },
            {
                id: 3,
                title:
                    "Discover the finest gemstones and precious metals crafted into timeless pieces that tell your unique story.",
                backgroundImage:
                    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=800&fit=crop",
                category: "Luxury Collection",
            },
        ],
        goldstory: [
            {
                HeroBanner: [
                    {
                        title: "GoldStory Branding Project",
                        mainTitle: "Building trust with",
                        highlightText: "refined storytelling",
                        endTitle: "and visual identity",
                        accentText: "excellence.",
                        para1:
                            "GoldStory's journey from concept to brand is a reflection of how thoughtful design and clear communication empower user connection and long-term business value.",
                        heroImage: Rect,
                        imageAlt: "GoldStory Hero Image",
                    },
                ],
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
                title: "Multiple Application Screens",
                image: img2,
                alt: "Multiple Application Screens",
                backgroundColor: "#e6edff",
                style: "w-full h-full max-w-full object-contain rounded-lg ml-50",
                centered: true,
            },
            {
                id: 3,
                title: "Divine Idols Website",
                image: img3,
                alt: "Divine Idols Website",
                backgroundColor: "#e6edff",
                style: "w-full h-auto max-w-full object-contain rounded-lg ml-20",
                centered: true,
            },
        ],
    },
};

export default portfoliodetailsdata;