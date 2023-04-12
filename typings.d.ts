interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}

export interface Input extends SanityBody {
    _type: "Input";
    label: string;
    placeholder: string;
    type: string;
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    heroImage: Image;
    name: string;
    role: string;
    socials: Social[];   
}

export interface About extends SanityBody {
    _type: "about";
    title: string;
    description_one: string;
    description_two: string;
    image: Image;
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    description: string;
    image: Image;
    linkToBuild: string;
    linkToSite: string;
    technologies: Technology[];
}

export interface Contact extends SanityBody {
    _type: "contact";
    title: string;
    image: Image;
    description: string[];
    inputs: Input[];
    socials: Social[]
}


