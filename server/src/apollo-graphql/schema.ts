import {gql} from "apollo-server"

const typeDefs = gql`
    "A project is a list of project specific infromation"
    type Project{
        ProjectId: ID!
        "the project title"
        Title: String!
        "the introduction of the project"
        Intro: String
        "the work title for the project"
        JobTitle: String
        "the background information of the project"
        Background: String
        "a list of technologies used in this project"
        Techstack: String
        "Hero image for the project detail page"
        heroImg: Image
        "Image of the project in desktop size"
        desktopPreview: Image
        "Image of the project in mobile size"
        mobilePreview: Image
    }

    "Project Images"
    type Image{
        imagesId: ID!
        "the image title"
        imageTitle: String
        "The alt text of the image"
        imageAltText: String
        "The project image"
        imgSrc: String!
    }

` 
export default typeDefs