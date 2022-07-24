import { URL_PROFILE_PIC } from './constants';
import githubLogo from './images/github.png';
import instagramLogo from './images/instagram.png';
import linkedinLogo from './images/linkedin.png';
import youtubeLogo from './images/youtube.png';

export const messages = {
    hero: {
        title: 'Lucas Della Sala',
        subtitle: 'Full stack developer',
        img: URL_PROFILE_PIC,
        detail: "I'm a full-stack web developer with experience in UI implementations with React and microservices with GraphQL and NodeJs (with Typescript). I currently work at MODO, the Argentine bank wallet, where I am part of the Person To Merchant Online (PTMO) team. My tasks are to develop and participate in decision-making related to the roadmap of the product that we implement and understand the product of other teams with which we interact."
    },
    work: {
        title: 'Work experience',
        items: [
            {
                title: 'Backend Engineer',
                info: 'MODO | 10/2021 - Present',
                detail: 'Implementation of microservices (REST APIs) in Typescript with Express, Nest, MongoDB, and PostgreSQL. Monitoring and alerts with Datadog and Pino. Trunk based development with Github Actions.'
            },
            {
                title: 'Full Stack Engineer',
                info: 'Freelance with Embedx (Chile) | 10/2021 - 06/2022',
                detail: 'Integration Embedx Insurances Apis with VTEX IO (Ecommerce). Development with React (Hooks), GraphQL and Node with Typescript. QA and Support.'
            },
            {
                title: 'First Party Apps Tech Lead',
                info: 'VTEX | 7/2021 - 10/2021',
                detail: 'Implementation of frontend apps with React (Hooks) and GraphQL and creation of microservices in Node & Koa with Typescript. Teaching and code review for the Software Engineers team and for Partners. Functional analysis and leadership of meetings (daily, retro, backlog refinement, planning).'
            },
            {
                title: 'First Party Apps Engineer',
                info: 'VTEX | 11/2020 - 7/2021',
                detail: 'Implementation of frontend apps with React (Hooks) and GraphQL with Typescript. Creation of microservices in Node & Koa with Typescript. In charge of support for partners and customers.'
            },
            {
                title: 'Full Stack Web Developer',
                info: 'Freelance with Cultura Buzz (Spain) | 09/2020-10/2020',
                detail: 'Back End with NodeJS, Express and MongoDB. Front End in React with Hooks.'
            },
            {
                title: 'Physics and Chemistry Teacher',
                info: 'Buenos Aires Public Highschool | 2016 - 2021',
                detail: 'Up to four courses simultaneously (100 students). Practical laboratory classes. School support classes.'
            }
        ]
    },
    education: {
        title: 'Education',
        items: [
            {
                title: 'Bachelor of Computer Science',
                info: 'Universidad de Buenos Aires',
                detail: 'In progress, 2019 - Present📚'
            },
            {
                title: 'Bachelor of Economic Science',
                info: 'Universidad de Buenos Aires',
                detail: 'In progress, 2018 - Present📚'
            },
            {
                title: 'Full Stack Development Bootcamp',
                info: 'Acámica',
                detail: '08/2019 - 06/2020✅'
            },
        ]
    },
    socialMedia: {
        list: [
            {
                img: githubLogo,
                url: 'https://github.com/lucasdellasala/',
                alt: 'Github Logo'
            },
            {
                img: instagramLogo,
                url: 'https://www.instagram.com/dellasalalucas',
                alt: 'Instagram Logo'
            },
            {
                img: linkedinLogo,
                url: 'https://www.linkedin.com/in/lucasdellasala/?locale=en_US',
                alt: 'Linkedin Logo'
            },
            {
                img: youtubeLogo,
                url: 'https://www.youtube.com/channel/UCoXdnmepeg11cX_MheeS10w',
                alt: 'Youtube Logo'
            }
        ]
    }
}
