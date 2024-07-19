export enum ProjectStatus {
    Private="Private", Public="Public", Archived="Archived"
}
export const statusColors: { [key in ProjectStatus]: string } = {
    [ProjectStatus.Private]: "blue",
    [ProjectStatus.Public]: "green",
    [ProjectStatus.Archived]: "gray"
};
export interface Project {
    id: number,
    title: string,
    description?: string,
    imageUrl?: string,
    members: number,
    forms: number,
    bugs: number,
    status: ProjectStatus
}
export const ProjectDefaults: Pick<Project, 'description' | 'imageUrl'> = {
    description: 'No Description',
    imageUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
}

export const exampleProjects: Project[] = [
    {
        id: 1,
        title: "Website Redesign",
        description: "A project aimed at overhauling the current company website with a modern design. This includes improving the user interface, enhancing user experience, and ensuring mobile responsiveness.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=1",
        members: 10,
        forms: 5,
        bugs: 2,
        status: ProjectStatus.Public
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Developing a new mobile application for both iOS and Android platforms. The app will provide users with real-time updates, notifications, and an intuitive user interface for seamless interaction.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=2",
        members: 8,
        forms: 10,
        bugs: 7,
        status: ProjectStatus.Private
    },
    {
        id: 3,
        title: "Marketing Campaign",
        description: "Creating and launching a comprehensive marketing campaign to promote our latest product. This includes social media advertisements, email marketing, and influencer collaborations.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=30",
        members: 5,
        forms: 3,
        bugs: 1,
        status: ProjectStatus.Public
    },
    {
        id: 4,
        title: "Data Migration",
        description: "Migrating all company data from legacy systems to a new cloud-based platform. Ensuring data integrity, security, and minimal downtime during the transition.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=443",
        members: 6,
        forms: 8,
        bugs: 4,
        status: ProjectStatus.Private
    },
    {
        id: 5,
        title: "Customer Feedback Analysis",
        description: "Analyzing customer feedback to identify trends, issues, and areas for improvement. Using advanced analytics tools to generate actionable insights for enhancing customer satisfaction.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=5",
        members: 4,
        forms: 2,
        bugs: 3,
        status: ProjectStatus.Archived
    },
    {
        id: 6,
        title: "New Product Development",
        description: "Developing a new product line based on market research and customer demand. The project involves product design, prototyping, testing, and preparing for mass production.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=6",
        members: 12,
        forms: 6,
        bugs: 5,
        status: ProjectStatus.Public
    },
    {
        id: 7,
        title: "Internal Software Upgrade",
        description: "Upgrading the internal software systems to improve performance, security, and user experience. This project involves thorough testing and training for all employees.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=72",
        members: 7,
        forms: 4,
        bugs: 2,
        status: ProjectStatus.Private
    },
    {
        id: 8,
        title: "Corporate Training Program",
        description: "Designing and implementing a comprehensive training program for employees. The program focuses on skill development, compliance training, and leadership workshops.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=18",
        members: 3,
        forms: 5,
        bugs: 0,
        status: ProjectStatus.Public
    },
    {
        id: 9,
        title: "E-commerce Platform Launch",
        description: "Launching a new e-commerce platform to expand our online presence. The platform will offer a seamless shopping experience, multiple payment options, and robust customer support.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=9",
        members: 9,
        forms: 7,
        bugs: 6,
        status: ProjectStatus.Archived
    },
    {
        id: 10,
        title: "SEO Optimization",
        description: "Improving the company's search engine rankings through effective SEO strategies. This includes keyword research, on-page optimization, and link-building efforts.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=140",
        members: 5,
        forms: 2,
        bugs: 1,
        status: ProjectStatus.Private
    },
    {
        id: 11,
        title: "Employee Wellness Program",
        description: "Developing a wellness program aimed at improving employee health and well-being. The program includes fitness challenges, mental health resources, and nutrition workshops.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=10",
        members: 4,
        forms: 3,
        bugs: 0,
        status: ProjectStatus.Public
    },
    {
        id: 12,
        title: "System Integration",
        description: "Integrating various software systems used across the company to improve efficiency and data accuracy. The project focuses on creating seamless communication between different platforms.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=11",
        members: 6,
        forms: 4,
        bugs: 3,
        status: ProjectStatus.Private
    },
    {
        id: 13,
        title: "Community Outreach Initiative",
        description: "Launching a community outreach initiative to engage with local communities and support various social causes. The project includes volunteer programs, donations, and awareness campaigns.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=12",
        members: 7,
        forms: 3,
        bugs: 2,
        status: ProjectStatus.Public
    },
    {
        id: 14,
        title: "Legacy System Decommissioning",
        description: "Decommissioning outdated legacy systems to reduce maintenance costs and improve operational efficiency. The project involves data archiving and ensuring continuity of operations.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=13",
        members: 5,
        forms: 1,
        bugs: 0,
        status: ProjectStatus.Archived
    }
];