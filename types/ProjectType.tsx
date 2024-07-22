import { Form } from "@/types/FormType"
import { Bug } from "@/types/BugType"

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
    forms: Form[],
    bugs: Bug[],
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
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=11",
                title: "UI Feedback",
                description: "Collecting feedback on the new user interface design.",
                questions: [
                    { title: "Ease of Use", description: "Rate the ease of navigation through the website." },
                    { title: "Visual Appeal", description: "Rate the visual appeal of the new design." }
                ],
                score: 3.5,
                ratings: 20
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=12",
                title: "UX Survey",
                description: "Understanding the user experience with the new design.",
                questions: [
                    { title: "Overall Experience", description: "Rate your overall experience with the website." },
                    { title: "Responsiveness", description: "Rate the website's responsiveness on different devices." },
                    { title: "Feature Accessibility", description: "Rate the accessibility of key features." }
                ],
                score: 4.2,
                ratings: 18
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=13",
                title: "Content Evaluation",
                description: "Gathering opinions on the quality and relevance of content.",
                questions: [
                    { title: "Content Relevance", description: "Rate the relevance of the website content." },
                    { title: "Content Clarity", description: "Rate the clarity of the information provided." }
                ],
                score: 2.3,
                ratings: 15
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=14",
                title: "Design Preferences",
                description: "Understanding user preferences for various design elements.",
                questions: [
                    { title: "Color Scheme", description: "Rate the color scheme used in the design." },
                    { title: "Font Style", description: "Rate the font style and readability." },
                    { title: "Layout Structure", description: "Rate the structure and organization of the layout." }
                ],
                score: 3.4,
                ratings: 17
            },
            {
                id: 5,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=15",
                title: "Navigation Feedback",
                description: "Assessing the effectiveness of the website's navigation.",
                questions: [
                    { title: "Menu Accessibility", description: "Rate the accessibility of the main menu." },
                    { title: "Search Functionality", description: "Rate the effectiveness of the search function." }
                ],
                score: 4.1,
                ratings: 14
            }
        ],
        bugs: [
            { id: 1, title: "Broken Link on Homepage", description: "The 'Contact Us' link on the homepage is broken.", upvotes: 5 },
            { id: 2, title: "Image Load Issue", description: "Images are not loading correctly on mobile devices.", upvotes: 8 }
        ],
        status: ProjectStatus.Public
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Developing a new mobile application for both iOS and Android platforms. The app will provide users with real-time updates, notifications, and an intuitive user interface for seamless interaction.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=2",
        members: 8,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=21",
                title: "Feature Usability",
                description: "Gathering feedback on the usability of key features.",
                questions: [
                    { title: "Ease of Use", description: "Rate the ease of using key features." },
                    { title: "Feature Intuitiveness", description: "Rate the intuitiveness of feature design." }
                ],
                score: 4.6,
                ratings: 22
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=22",
                title: "User Experience Survey",
                description: "Understanding the overall user experience with the app.",
                questions: [
                    { title: "Overall Satisfaction", description: "Rate your overall satisfaction with the app." },
                    { title: "Performance", description: "Rate the app's performance and responsiveness." }
                ],
                score: 4.5,
                ratings: 21
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=23",
                title: "Design Feedback",
                description: "Collecting feedback on the app's design and aesthetics.",
                questions: [
                    { title: "Visual Appeal", description: "Rate the visual appeal of the app." },
                    { title: "Layout Design", description: "Rate the design of the app's layout." }
                ],
                score: 3.7,
                ratings: 19
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=24",
                title: "Notification Preferences",
                description: "Understanding user preferences for app notifications.",
                questions: [
                    { title: "Notification Relevance", description: "Rate the relevance of the notifications received." },
                    { title: "Notification Frequency", description: "Rate the frequency of notifications." }
                ],
                score: 3.4,
                ratings: 16
            },
            {
                id: 5,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=25",
                title: "Navigation Assessment",
                description: "Assessing the ease of navigation within the app.",
                questions: [
                    { title: "Menu Accessibility", description: "Rate the accessibility of the main menu." },
                    { title: "Navigation Flow", description: "Rate the flow of navigation between screens." }
                ],
                score: 4.3,
                ratings: 15
            },
            {
                id: 6,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=26",
                title: "Performance Survey",
                description: "Gathering feedback on the app's performance under different conditions.",
                questions: [
                    { title: "Speed", description: "Rate the speed of the app." },
                    { title: "Reliability", description: "Rate the reliability and stability of the app." }
                ],
                score: 2.2,
                ratings: 18
            },
            {
                id: 7,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=27",
                title: "Feature Requests",
                description: "Collecting user requests for new features or improvements.",
                questions: [
                    { title: "Feature Necessity", description: "Rate the necessity of requested features." },
                    { title: "Overall Impact", description: "Rate the potential impact of requested features." }
                ],
                score: 4.1,
                ratings: 14
            },
            {
                id: 8,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=28",
                title: "Bug Report",
                description: "Reporting any issues or bugs encountered while using the app.",
                questions: [
                    { title: "Bug Severity", description: "Rate the severity of the bugs reported." },
                    { title: "Bug Frequency", description: "Rate the frequency of encountering bugs." }
                ],
                score: 4.0,
                ratings: 10
            },
            {
                id: 9,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=29",
                title: "Onboarding Experience",
                description: "Evaluating the onboarding process for new users.",
                questions: [
                    { title: "Ease of Onboarding", description: "Rate the ease of the onboarding process." },
                    { title: "Clarity of Instructions", description: "Rate the clarity of instructions provided during onboarding." }
                ],
                score: 2.5,
                ratings: 20
            },
            {
                id: 10,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=30",
                title: "Support Feedback",
                description: "Gathering feedback on the app's support and help resources.",
                questions: [
                    { title: "Support Availability", description: "Rate the availability of support resources." },
                    { title: "Support Effectiveness", description: "Rate the effectiveness of the support provided." }
                ],
                score: 3.6,
                ratings: 22
            }
        ],
        bugs: [
            { id: 1, title: "Crash on Launch", description: "The app crashes on launch for some users.", upvotes: 12 },
            { id: 2, title: "Slow Performance", description: "The app performs slowly on older devices.", upvotes: 15 },
            { id: 3, title: "Notification Issues", description: "Notifications are not being received by users.", upvotes: 9 },
            { id: 4, title: "Login Problems", description: "Users are experiencing issues logging in.", upvotes: 11 },
            { id: 5, title: "UI Glitch", description: "UI elements are misaligned on some screens.", upvotes: 7 },
            { id: 6, title: "Data Sync Error", description: "Data does not sync correctly between devices.", upvotes: 10 },
            { id: 7, title: "Battery Drain", description: "The app causes excessive battery drain.", upvotes: 8 }
        ],
        status: ProjectStatus.Private
    },
    {
        id: 3,
        title: "Marketing Campaign",
        description: "Creating and launching a comprehensive marketing campaign to promote our latest product. This includes social media advertisements, email marketing, and influencer collaborations.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=30",
        members: 5,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=31",
                title: "Social Media Impact",
                description: "Evaluating the impact of social media advertisements.",
                questions: [
                    { title: "Ad Relevance", description: "Rate the relevance of social media advertisements." },
                    { title: "Ad Engagement", description: "Rate the level of engagement with social media ads." }
                ],
                score: 4.4,
                ratings: 15
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=32",
                title: "Email Marketing Effectiveness",
                description: "Gathering feedback on the effectiveness of email marketing campaigns.",
                questions: [
                    { title: "Email Content", description: "Rate the content quality of marketing emails." },
                    { title: "Email Frequency", description: "Rate the frequency of marketing emails." }
                ],
                score: 4.2,
                ratings: 14
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=33",
                title: "Influencer Collaboration",
                description: "Assessing the impact of collaborations with influencers.",
                questions: [
                    { title: "Influencer Reach", description: "Rate the reach of the influencers used." },
                    { title: "Influencer Engagement", description: "Rate the level of engagement from influencer posts." },
                    { title: "Collaboration Effectiveness", description: "Rate the overall effectiveness of influencer collaborations." }
                ],
                score: 3.3,
                ratings: 13
            }
        ],
        bugs: [
            { id: 1, title: "Broken Link in Email", description: "A broken link in the marketing email campaign.", upvotes: 6 }
        ],
        status: ProjectStatus.Public
    },
    {
        id: 4,
        title: "Data Migration",
        description: "Migrating all company data from legacy systems to a new cloud-based platform. Ensuring data integrity, security, and minimal downtime during the transition.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=443",
        members: 6,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=41",
                title: "Migration Plan Feedback",
                description: "Gathering feedback on the data migration plan.",
                questions: [
                    { title: "Plan Clarity", description: "Rate the clarity of the migration plan." },
                    { title: "Plan Feasibility", description: "Rate the feasibility of the migration plan." }
                ],
                score: 3.1,
                ratings: 12
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=42",
                title: "Security Measures",
                description: "Assessing the adequacy of security measures during migration.",
                questions: [
                    { title: "Data Security", description: "Rate the security of data during migration." },
                    { title: "Access Control", description: "Rate the effectiveness of access controls." }
                ],
                score: 3.3,
                ratings: 11
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=43",
                title: "Downtime Management",
                description: "Evaluating the management of downtime during migration.",
                questions: [
                    { title: "Downtime Communication", description: "Rate the communication about downtime." },
                    { title: "Downtime Impact", description: "Rate the impact of downtime on operations." }
                ],
                score: 2.2,
                ratings: 10
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=44",
                title: "Post-Migration Review",
                description: "Collecting feedback on the post-migration process.",
                questions: [
                    { title: "Data Integrity", description: "Rate the integrity of data post-migration." },
                    { title: "System Performance", description: "Rate the performance of the new system." }
                ],
                score: 2.4,
                ratings: 14
            },
            {
                id: 5,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=45",
                title: "Migration Tools Assessment",
                description: "Evaluating the tools used for data migration.",
                questions: [
                    { title: "Tool Effectiveness", description: "Rate the effectiveness of migration tools." },
                    { title: "Tool Usability", description: "Rate the usability of the migration tools." }
                ],
                score: 1.3,
                ratings: 13
            },
            {
                id: 6,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=46",
                title: "User Training",
                description: "Gathering feedback on training provided for the new system.",
                questions: [
                    { title: "Training Quality", description: "Rate the quality of training provided." },
                    { title: "Training Relevance", description: "Rate the relevance of the training content." }
                ],
                score: 2.5,
                ratings: 15
            },
            {
                id: 7,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=47",
                title: "Support During Migration",
                description: "Assessing the support provided during the migration.",
                questions: [
                    { title: "Support Availability", description: "Rate the availability of support during migration." },
                    { title: "Support Effectiveness", description: "Rate the effectiveness of the support provided." }
                ],
                score: 2.6,
                ratings: 16
            },
            {
                id: 8,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=48",
                title: "User Feedback",
                description: "Collecting user feedback on the new system post-migration.",
                questions: [
                    { title: "User Satisfaction", description: "Rate overall user satisfaction with the new system." },
                    { title: "System Usability", description: "Rate the usability of the new system." }
                ],
                score: 3.7,
                ratings: 17
            }
        ],
        bugs: [
            { id: 1, title: "Data Loss", description: "Some data was lost during the migration.", upvotes: 10 },
            { id: 2, title: "System Downtime", description: "Unexpected system downtime occurred.", upvotes: 7 },
            { id: 3, title: "Access Issues", description: "Users experienced issues accessing the new system.", upvotes: 9 },
            { id: 4, title: "Performance Issues", description: "The new system is experiencing performance issues.", upvotes: 8 }
        ],
        status: ProjectStatus.Private
    },
    {
        id: 5,
        title: "Customer Feedback Analysis",
        description: "Analyzing customer feedback to identify trends, issues, and areas for improvement. Using advanced analytics tools to generate actionable insights for enhancing customer satisfaction.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=5",
        members: 4,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=51",
                title: "Overall Satisfaction",
                description: "Measuring overall customer satisfaction.",
                questions: [
                    { title: "Product Quality", description: "Rate the quality of the product." },
                    { title: "Customer Service", description: "Rate the quality of customer service." }
                ],
                score: 4.5,
                ratings: 20
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=52",
                title: "Feature Requests",
                description: "Collecting customer requests for new features.",
                questions: [
                    { title: "Feature Importance", description: "Rate the importance of requested features." },
                    { title: "Feature Usability", description: "Rate the usability of requested features." }
                ],
                score: 4.4,
                ratings: 18
            }
        ],
        bugs: [
            { id: 1, title: "Feedback Form Error", description: "The feedback form is not submitting correctly.", upvotes: 5 },
            { id: 2, title: "Analytics Dashboard Issue", description: "The analytics dashboard is displaying incorrect data.", upvotes: 6 },
            { id: 3, title: "Email Notification Failure", description: "Email notifications are not being sent out.", upvotes: 7 }
        ],
        status: ProjectStatus.Archived
    },
    {
        id: 6,
        title: "New Product Development",
        description: "Developing a new product line based on market research and customer demand. The project involves product design, prototyping, testing, and preparing for mass production.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=6",
        members: 12,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=61",
                title: "Concept Feedback",
                description: "Gathering feedback on the new product concept.",
                questions: [
                    { title: "Concept Appeal", description: "Rate the appeal of the product concept." },
                    { title: "Concept Feasibility", description: "Rate the feasibility of the product concept." }
                ],
                score: 4.6,
                ratings: 19
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=62",
                title: "Prototype Testing",
                description: "Evaluating the prototype of the new product.",
                questions: [
                    { title: "Prototype Quality", description: "Rate the quality of the product prototype." },
                    { title: "Prototype Usability", description: "Rate the usability of the product prototype." },
                    { title: "Prototype Durability", description: "Rate the durability of the product prototype." }
                ],
                score: 2.5,
                ratings: 21
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=63",
                title: "Market Research",
                description: "Gathering insights from market research.",
                questions: [
                    { title: "Market Demand", description: "Rate the market demand for the new product." },
                    { title: "Competitive Analysis", description: "Rate the competitive positioning of the new product." }
                ],
                score: 3.4,
                ratings: 17
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=64",
                title: "User Testing",
                description: "Collecting feedback from user testing.",
                questions: [
                    { title: "User Experience", description: "Rate the overall user experience of the product." },
                    { title: "User Feedback", description: "Rate the usability and functionality based on user feedback." }
                ],
                score: 2.7,
                ratings: 22
            },
            {
                id: 5,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=65",
                title: "Production Readiness",
                description: "Assessing the readiness of the product for mass production.",
                questions: [
                    { title: "Production Feasibility", description: "Rate the feasibility of mass production." },
                    { title: "Production Cost", description: "Rate the cost-effectiveness of mass production." }
                ],
                score: 4.6,
                ratings: 20
            },
            {
                id: 6,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=66",
                title: "Launch Strategy",
                description: "Gathering feedback on the launch strategy for the new product.",
                questions: [
                    { title: "Launch Plan", description: "Rate the clarity and effectiveness of the launch plan." },
                    { title: "Marketing Readiness", description: "Rate the readiness of marketing materials for launch." }
                ],
                score: 4.5,
                ratings: 18
            }
        ],
        bugs: [
            { id: 1, title: "Prototype Defect", description: "A defect found in the product prototype.", upvotes: 7 },
            { id: 2, title: "Material Issue", description: "Issues with the material used in the prototype.", upvotes: 6 },
            { id: 3, title: "Production Delay", description: "Delays in the production schedule.", upvotes: 8 },
            { id: 4, title: "Cost Overrun", description: "The project is over budget.", upvotes: 9 },
            { id: 5, title: "Design Flaw", description: "A design flaw identified during testing.", upvotes: 10 }
        ],
        status: ProjectStatus.Public
    },
    {
        id: 7,
        title: "Internal Software Upgrade",
        description: "Upgrading the internal software systems to improve performance, security, and user experience. This project involves thorough testing and training for all employees.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=72",
        members: 7,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=71",
                title: "User Feedback on Current System",
                description: "Collecting feedback on the current internal software system.",
                questions: [
                    { title: "Current System Usability", description: "Rate the usability of the current system." },
                    { title: "Current System Performance", description: "Rate the performance of the current system." }
                ],
                score: 1.2,
                ratings: 10
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=72",
                title: "Upgrade Plan Feedback",
                description: "Gathering feedback on the software upgrade plan.",
                questions: [
                    { title: "Upgrade Plan Clarity", description: "Rate the clarity of the upgrade plan." },
                    { title: "Upgrade Plan Feasibility", description: "Rate the feasibility of the upgrade plan." }
                ],
                score: 4.3,
                ratings: 12
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=73",
                title: "Training Program",
                description: "Evaluating the training program for the new software.",
                questions: [
                    { title: "Training Quality", description: "Rate the quality of the training program." },
                    { title: "Training Relevance", description: "Rate the relevance of the training content." }
                ],
                score: 3.4,
                ratings: 11
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=74",
                title: "Post-Upgrade Feedback",
                description: "Collecting feedback after the software upgrade.",
                questions: [
                    { title: "New System Usability", description: "Rate the usability of the new system." },
                    { title: "New System Performance", description: "Rate the performance of the new system." }
                ],
                score: 4.5,
                ratings: 13
            }
        ],
        bugs: [],
        status: ProjectStatus.Private
    },
    {
        id: 8,
        title: "Website Redesign",
        description: "Redesigning the company website to improve user experience and engagement. This project includes UI/UX design, content updates, and SEO optimization.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=8",
        members: 6,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=81",
                title: "Current Website Feedback",
                description: "Collecting feedback on the current website.",
                questions: [
                    { title: "Current Design", description: "Rate the design of the current website." },
                    { title: "Current Navigation", description: "Rate the ease of navigation on the current website." }
                ],
                score: 4.1,
                ratings: 9
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=82",
                title: "New Design Concepts",
                description: "Gathering feedback on new website design concepts.",
                questions: [
                    { title: "New Design Appeal", description: "Rate the appeal of the new design concepts." },
                    { title: "New Design Usability", description: "Rate the usability of the new design concepts." }
                ],
                score: 4.3,
                ratings: 11
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=83",
                title: "Content Updates",
                description: "Collecting feedback on website content updates.",
                questions: [
                    { title: "Content Relevance", description: "Rate the relevance of the updated content." },
                    { title: "Content Quality", description: "Rate the quality of the updated content." }
                ],
                score: 3.4,
                ratings: 12
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=84",
                title: "SEO Optimization",
                description: "Evaluating the effectiveness of SEO optimization.",
                questions: [
                    { title: "SEO Impact", description: "Rate the impact of SEO optimization." },
                    { title: "SEO Strategy", description: "Rate the effectiveness of the SEO strategy." }
                ],
                score: 3.5,
                ratings: 13
            },
            {
                id: 5,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=85",
                title: "User Testing",
                description: "Collecting feedback from user testing of the redesigned website.",
                questions: [
                    { title: "User Experience", description: "Rate the overall user experience of the redesigned website." },
                    { title: "User Feedback", description: "Rate the usability and functionality based on user feedback." }
                ],
                score: 2.6,
                ratings: 14
            }
        ],
        bugs: [
            { id: 1, title: "Broken Links", description: "Several links on the redesigned website are broken.", upvotes: 6 },
            { id: 2, title: "Page Load Speed", description: "The redesigned website has slow page load speeds.", upvotes: 8 }
        ],
        status: ProjectStatus.Public
    },
    {
        id: 15,
        title: "AI Integration",
        description: "Integrating AI capabilities into existing software to enhance functionality and user experience. This includes developing machine learning models and implementing AI-driven features.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=15",
        members: 10,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=151",
                title: "AI Feature Feedback",
                description: "Collecting feedback on newly integrated AI features.",
                questions: [
                    { title: "Feature Usability", description: "Rate the usability of the AI features." },
                    { title: "Feature Performance", description: "Rate the performance of the AI features." }
                ],
                score: 2.5,
                ratings: 20
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=152",
                title: "AI Model Accuracy",
                description: "Evaluating the accuracy of the implemented AI models.",
                questions: [
                    { title: "Model Accuracy", description: "Rate the accuracy of the AI models." },
                    { title: "Model Reliability", description: "Rate the reliability of the AI models." }
                ],
                score: 4.4,
                ratings: 18
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=153",
                title: "User Experience",
                description: "Collecting feedback on the user experience with AI features.",
                questions: [
                    { title: "User Satisfaction", description: "Rate the overall satisfaction with AI features." },
                    { title: "Ease of Use", description: "Rate the ease of use of AI features." }
                ],
                score: 3.6,
                ratings: 22
            }
        ],
        bugs: [
            { id: 1, title: "Model Training Error", description: "An error occurred during AI model training.", "upvotes": 5 },
            { id: 2, title: "Feature Malfunction", description: "One of the AI features is not working as expected.", "upvotes": 7 },
            { id: 3, title: "Integration Issue", description: "Issues encountered during AI integration.", "upvotes": 6 }
        ],
        status: ProjectStatus.Public
    },
    {
        id: 16,
        title: "Blockchain Implementation",
        description: "Implementing blockchain technology to enhance security and transparency of transactions. This project involves developing blockchain protocols and integrating them with existing systems.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=16",
        members: 8,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=161",
                title: "Blockchain Usability",
                description: "Evaluating the usability of the blockchain system.",
                questions: [
                    { title: "System Usability", description: "Rate the usability of the blockchain system." },
                    { title: "System Performance", description: "Rate the performance of the blockchain system." }
                ],
                score: 4.3,
                ratings: 15
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=162",
                title: "Security Assessment",
                description: "Assessing the security features of the blockchain implementation.",
                questions: [
                    { title: "Security Strength", description: "Rate the strength of the blockchain security features." },
                    { title: "Security Usability", description: "Rate the usability of the security features." }
                ],
                score: 2.4,
                ratings: 16
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=163",
                title: "Integration Feedback",
                description: "Collecting feedback on blockchain integration with existing systems.",
                questions: [
                    { title: "Integration Ease", description: "Rate the ease of blockchain integration." },
                    { title: "Integration Performance", description: "Rate the performance of blockchain integration." }
                ],
                score: 4.5,
                ratings: 18
            }
        ],
        bugs: [
            { id: 1, title: "Transaction Error", description: "An error occurred during a blockchain transaction.", "upvotes": 6 },
            { id: 2, title: "Security Vulnerability", description: "A vulnerability was found in the blockchain security.", "upvotes": 8 }
        ],
        status: ProjectStatus.Private
    },
    {
        id: 17,
        title: "Remote Work Transition",
        description: "Facilitating the transition to remote work for all employees. This project includes providing necessary tools, setting up secure connections, and creating remote work policies.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=17",
        members: 12,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=171",
                title: "Remote Work Tools",
                description: "Evaluating the tools provided for remote work.",
                questions: [
                    { title: "Tool Effectiveness", description: "Rate the effectiveness of the remote work tools." },
                    { title: "Tool Usability", description: "Rate the usability of the remote work tools." }
                ],
                score: 3.4,
                ratings: 19
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=172",
                title: "Connection Security",
                description: "Assessing the security of remote work connections.",
                questions: [
                    { title: "Security Strength", description: "Rate the strength of the connection security." },
                    { title: "Connection Reliability", description: "Rate the reliability of the remote work connections." }
                ],
                score: 4.5,
                ratings: 20
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=173",
                title: "Work Policy Feedback",
                description: "Collecting feedback on remote work policies.",
                questions: [
                    { title: "Policy Clarity", description: "Rate the clarity of remote work policies." },
                    { title: "Policy Feasibility", description: "Rate the feasibility of remote work policies." }
                ],
                score: 3.6,
                ratings: 18
            }
        ],
        bugs: [
            { id: 1, title: "Tool Compatibility Issue", description: "Compatibility issues with remote work tools.", "upvotes": 7 },
            { id: 2, title: "Connection Drop", description: "Remote work connections dropping frequently.", "upvotes": 8 },
            { id: 3, title: "Security Breach", description: "A security breach occurred in the remote work system.", "upvotes": 9 }
        ],
        status: ProjectStatus.Public
    },
    {
        id: 18,
        title: "Legacy System Upgrade",
        description: "Upgrading legacy systems to improve efficiency and reduce maintenance costs. This project involves migrating data, updating software, and training employees.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=18",
        members: 7,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=181",
                title: "Current System Assessment",
                description: "Assessing the current legacy systems.",
                questions: [
                    { title: "System Performance", description: "Rate the performance of the current system." },
                    { title: "System Usability", description: "Rate the usability of the current system." }
                ],
                score: 4.1,
                ratings: 10
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=182",
                title: "Upgrade Plan Feedback",
                description: "Gathering feedback on the upgrade plan.",
                questions: [
                    { title: "Plan Clarity", description: "Rate the clarity of the upgrade plan." },
                    { title: "Plan Feasibility", description: "Rate the feasibility of the upgrade plan." }
                ],
                score: 4.2,
                ratings: 12
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=183",
                title: "Employee Training",
                description: "Collecting feedback on employee training for the new system.",
                questions: [
                    { title: "Training Effectiveness", description: "Rate the effectiveness of the training." },
                    { title: "Training Clarity", description: "Rate the clarity of the training materials." }
                ],
                score: 2.3,
                ratings: 14
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=184",
                title: "Data Migration Feedback",
                description: "Gathering feedback on data migration process.",
                questions: [
                    { title: "Migration Ease", description: "Rate the ease of the data migration process." },
                    { title: "Migration Accuracy", description: "Rate the accuracy of data migration." }
                ],
                score: 3.4,
                ratings: 15
            }
        ],
        bugs: [
            { id: 1, title: "Migration Error", description: "An error occurred during data migration.", "upvotes": 4 },
            { id: 2, title: "Compatibility Issue", description: "Compatibility issues with new system.", "upvotes": 6 }
        ],
        status: ProjectStatus.Archived
    },
    {
        id: 19,
        title: "Digital Transformation",
        description: "Leading a comprehensive digital transformation across the organization. This includes adopting new technologies, automating processes, and enhancing digital literacy.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=19",
        members: 15,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=191",
                title: "Technology Adoption",
                description: "Assessing the adoption of new technologies.",
                questions: [
                    { title: "Adoption Ease", description: "Rate the ease of adopting new technologies." },
                    { title: "Technology Usability", description: "Rate the usability of the new technologies." }
                ],
                score: 3.2,
                ratings: 20
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=192",
                title: "Process Automation",
                description: "Gathering feedback on process automation.",
                questions: [
                    { title: "Automation Effectiveness", description: "Rate the effectiveness of process automation." },
                    { title: "Automation Usability", description: "Rate the usability of automated processes." }
                ],
                score: 3.3,
                ratings: 18
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=193",
                title: "Digital Literacy",
                description: "Collecting feedback on digital literacy training.",
                questions: [
                    { title: "Training Effectiveness", description: "Rate the effectiveness of digital literacy training." },
                    { title: "Training Clarity", description: "Rate the clarity of the training materials." }
                ],
                score: 4.4,
                ratings: 22
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=194",
                title: "Overall Transformation Feedback",
                description: "Gathering overall feedback on digital transformation.",
                questions: [
                    { title: "Transformation Impact", description: "Rate the overall impact of digital transformation." },
                    { title: "Employee Adaptation", description: "Rate the ease of adaptation to digital transformation." }
                ],
                score: 2.5,
                ratings: 25
            }
        ],
        bugs: [
            { id: 1, title: "Technology Bug", description: "A bug in the newly adopted technology.", "upvotes": 8 },
            { id: 2, title: "Automation Error", description: "An error in the automated process.", "upvotes": 7 },
            { id: 3, title: "Training Material Error", description: "An error found in the training materials.", "upvotes": 5 }
        ],
        status: ProjectStatus.Archived
    },
    {
        id: 20,
        title: "Sustainability Initiative",
        description: "Launching a sustainability initiative to reduce the company's environmental footprint. This includes implementing green practices, reducing waste, and promoting sustainability.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=20",
        members: 5,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=201",
                title: "Green Practices Feedback",
                description: "Collecting feedback on newly implemented green practices.",
                questions: [
                    { title: "Practice Effectiveness", description: "Rate the effectiveness of green practices." },
                    { title: "Practice Usability", description: "Rate the usability of green practices." }
                ],
                score: 2.3,
                ratings: 10
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=202",
                title: "Waste Reduction",
                description: "Assessing the effectiveness of waste reduction efforts.",
                questions: [
                    { title: "Reduction Impact", description: "Rate the impact of waste reduction efforts." },
                    { title: "Reduction Usability", description: "Rate the usability of waste reduction methods." }
                ],
                score: 2.4,
                ratings: 12
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=203",
                title: "Sustainability Training",
                description: "Gathering feedback on sustainability training.",
                questions: [
                    { title: "Training Effectiveness", description: "Rate the effectiveness of sustainability training." },
                    { title: "Training Clarity", description: "Rate the clarity of sustainability training materials." }
                ],
                score: 4.5,
                ratings: 15
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=204",
                title: "Sustainability Feedback",
                description: "Collecting overall feedback on sustainability initiatives.",
                questions: [
                    { title: "Initiative Impact", description: "Rate the overall impact of sustainability initiatives." },
                    { title: "Employee Engagement", description: "Rate the level of employee engagement in sustainability initiatives." }
                ],
                score: 3.6,
                ratings: 18
            }
        ],
        bugs: [
            { id: 1, title: "Green Practice Issue", description: "Issues encountered with green practices.", "upvotes": 3 },
            { id: 2, title: "Training Material Error", description: "Errors found in sustainability training materials.", "upvotes": 4 }
        ],
        status: ProjectStatus.Archived
    },
    {
        id: 21,
        title: "CRM System Upgrade",
        description: "Upgrading the Customer Relationship Management (CRM) system to improve customer engagement and sales processes. This project involves data migration, new feature integration, and user training.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=21",
        members: 6,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=211",
                title: "Current CRM Assessment",
                description: "Assessing the current CRM system.",
                questions: [
                    { title: "System Performance", description: "Rate the performance of the current CRM system." },
                    { title: "System Usability", description: "Rate the usability of the current CRM system." }
                ],
                score: 5.0,
                ratings: 12
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=212",
                title: "Upgrade Feedback",
                description: "Gathering feedback on the planned CRM upgrade.",
                questions: [
                    { title: "Upgrade Plan Clarity", description: "Rate the clarity of the CRM upgrade plan." },
                    { title: "Upgrade Plan Feasibility", description: "Rate the feasibility of the CRM upgrade plan." }
                ],
                score: 4.2,
                ratings: 14
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=213",
                title: "User Training",
                description: "Collecting feedback on CRM user training.",
                questions: [
                    { title: "Training Effectiveness", description: "Rate the effectiveness of the CRM user training." },
                    { title: "Training Clarity", description: "Rate the clarity of the CRM training materials." }
                ],
                score: 3.3,
                ratings: 16
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=214",
                title: "New Feature Feedback",
                description: "Gathering feedback on new CRM features.",
                questions: [
                    { title: "Feature Usability", description: "Rate the usability of the new CRM features." },
                    { title: "Feature Performance", description: "Rate the performance of the new CRM features." }
                ],
                score: 2.4,
                ratings: 18
            }
        ],
        bugs: [
            { id: 1, title: "Migration Error", description: "An error occurred during CRM data migration.", "upvotes": 5 },
            { id: 2, title: "Feature Malfunction", description: "A new CRM feature is not working as expected.", "upvotes": 6 },
            { id: 3, title: "Training Material Error", description: "Errors found in CRM training materials.", "upvotes": 7 }
        ],
        status: ProjectStatus.Private
    },
    {
        id: 22,
        title: "Customer Support Enhancement",
        description: "Enhancing the customer support system to provide better service and faster response times. This project includes implementing new support tools, training support staff, and optimizing support processes.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=22",
        members: 8,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=221",
                title: "Support Tools Feedback",
                description: "Collecting feedback on new customer support tools.",
                questions: [
                    { title: "Tool Effectiveness", description: "Rate the effectiveness of the new support tools." },
                    { title: "Tool Usability", description: "Rate the usability of the new support tools." }
                ],
                score: 4.2,
                ratings: 10
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=222",
                title: "Support Staff Training",
                description: "Gathering feedback on customer support staff training.",
                questions: [
                    { title: "Training Effectiveness", description: "Rate the effectiveness of the support staff training." },
                    { title: "Training Clarity", description: "Rate the clarity of the support training materials." }
                ],
                score: 3.3,
                ratings: 12
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=223",
                title: "Process Optimization",
                description: "Collecting feedback on support process optimization.",
                questions: [
                    { title: "Process Efficiency", description: "Rate the efficiency of the support processes." },
                    { title: "Process Usability", description: "Rate the usability of the optimized support processes." }
                ],
                score: 2.4,
                ratings: 15
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=224",
                title: "Overall Support Feedback",
                description: "Gathering overall feedback on customer support enhancement.",
                questions: [
                    { title: "Support Satisfaction", description: "Rate the overall satisfaction with customer support." },
                    { title: "Response Time", description: "Rate the response time of the customer support." }
                ],
                score: 1.5,
                ratings: 18
            }
        ],
        bugs: [
            { id: 1, title: "Tool Compatibility Issue", description: "Compatibility issues with new support tools.", "upvotes": 3 },
            { id: 2, title: "Process Bug", description: "A bug in the optimized support process.", "upvotes": 4 }
        ],
        status: ProjectStatus.Private
    },
    {
        id: 23,
        title: "E-commerce Platform Update",
        description: "Updating the e-commerce platform to enhance user experience and increase sales. This project involves improving website design, adding new features, and optimizing the checkout process.",
        imageUrl: "https://loremflickr.com/320/240/cat?lock=23",
        members: 10,
        forms: [
            {
                id: 1,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=231",
                title: "Website Design Feedback",
                description: "Collecting feedback on the new website design.",
                questions: [
                    { title: "Design Usability", description: "Rate the usability of the new website design." },
                    { title: "Design Aesthetics", description: "Rate the aesthetics of the new website design." }
                ],
                score: 4.5,
                ratings: 15
            },
            {
                id: 2,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=232",
                title: "Feature Usability",
                description: "Gathering feedback on the usability of new features.",
                questions: [
                    { title: "Feature Usability", description: "Rate the usability of the new features." },
                    { title: "Feature Performance", description: "Rate the performance of the new features." }
                ],
                score: 4.6,
                ratings: 17
            },
            {
                id: 3,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=233",
                title: "Checkout Process",
                description: "Evaluating the new checkout process.",
                questions: [
                    { title: "Process Usability", description: "Rate the usability of the new checkout process." },
                    { title: "Process Speed", description: "Rate the speed of the new checkout process." }
                ],
                score: 4.7,
                ratings: 20
            },
            {
                id: 4,
                imageSrc: "https://loremflickr.com/320/240/cat?lock=234",
                title: "Overall Platform Feedback",
                description: "Collecting overall feedback on the e-commerce platform update.",
                questions: [
                    { title: "Platform Usability", description: "Rate the overall usability of the updated platform." },
                    { title: "Platform Performance", description: "Rate the overall performance of the updated platform." }
                ],
                score: 4.8,
                ratings: 25
            }
        ],
        bugs: [
            { id: 1, title: "Design Bug", description: "A bug in the new website design.", "upvotes": 4 },
            { id: 2, title: "Feature Malfunction", description: "A new feature is not working as expected.", "upvotes": 5 }
        ],
        status: ProjectStatus.Archived
    }
];