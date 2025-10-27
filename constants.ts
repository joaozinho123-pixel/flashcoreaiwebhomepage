
import React from 'react';
import { BrainIcon } from './components/icons/BrainIcon';
import { CodeIcon } from './components/icons/CodeIcon';
import { ImageIcon } from './components/icons/ImageIcon';
import { SearchIcon } from './components/icons/SearchIcon';
import { TextAnalysisIcon } from './components/icons/TextAnalysisIcon';
import { CreativeWritingIcon } from './components/icons/CreativeWritingIcon';

export const LOGO_B64 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgNjAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwBvbHlnb24gcG9ybnRzPSIzMCwwIDEwLDUwIDMwLDUwIDIwLDEwMCA1MCw0MCAzMCw0MCIgZmlsbD0iI0ZBQ0MxNSIvPjwvc3ZnPg==';

export const TOOLS = [
    {
        title: 'Image Generation',
        description: 'Create stunning, high-fidelity images from simple text prompts. Our model understands context and nuance to bring your vision to life.',
        Icon: ImageIcon,
    },
    {
        title: 'DeepSearch',
        description: 'Leverage the power of the web with AI-driven search capabilities. Get summarized, accurate answers with cited sources.',
        Icon: SearchIcon,
    },
    {
        title: 'DeepThink',
        description: 'Tackle complex problems with advanced reasoning. Ideal for strategic planning, data analysis, and creative brainstorming.',
        Icon: BrainIcon,
    },
    {
        title: 'Code Generation',
        description: 'Accelerate your development workflow. Generate clean, efficient code in multiple languages, from snippets to full applications.',
        Icon: CodeIcon,
    },
    {
        title: 'Text Analysis',
        description: 'Gain deep insights from any document. Perform sophisticated text summarization, translation, and sentiment analysis.',
        Icon: TextAnalysisIcon,
    },
    {
        title: 'Creative Writing',
        description: 'Your creative partner. Get assistance with marketing copy, scripts, social media content, and brainstorming new ideas.',
        Icon: CreativeWritingIcon,
    },
];

export const ABOUT_CONTENT = `
Flashcore AI is a state-of-the-art artificial intelligence platform designed to push the boundaries of what's possible. Our mission is to provide accessible, powerful, and intuitive AI tools that empower creators, developers, and businesses to innovate faster and more effectively.

Powered by Google's advanced Gemini models, Flashcore AI is built on a foundation of cutting-edge research. This allows our platform to excel in understanding complex prompts, generating nuanced content, and providing reliable, verifiable information.

Our capabilities extend far beyond the basics. With Flashcore, you can:
- **Create Stunning Visuals:** Generate high-fidelity images and art from simple text descriptions.
- **Access Instant Knowledge:** Utilize AI-driven deep search to get summarized, accurate answers with cited sources.
- **Solve Complex Problems:** Employ advanced reasoning for strategic planning, data analysis, and creative brainstorming.
- **Accelerate Development:** Generate clean, efficient code in multiple languages, from snippets to full applications.
- **Master Language:** Perform sophisticated text analysis, summarization, translation, and sentiment analysis.
- **Boost Creativity:** Get assistance with creative writing, marketing copy, scripts, and social media content.
- **And much more...**

We believe in a future where AI is a collaborative partner in human creativity and problem-solving. Join us on this journey and see what you can create with the power of Flashcore.
`;

export const PRIVACY_CONTENT = `
Last updated: [Date]

Your privacy is important to us. It is Flashcore AI's policy to respect your privacy regarding any information we may collect from you across our website.

1. Information We Collect
We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.

2. Use of Information
We use the information we collect to operate, maintain, and provide the features and functionality of the service, to analyze how the service is used, diagnose service or technical problems, maintain security, and personalize content.

3. Data Retention
We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.

4. Sharing of Information
We don’t share any personally identifying information publicly or with third-parties, except when required to by law.

Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.

Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
`;
