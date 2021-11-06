import {gql} from "apollo-server"

const typeDefs = gql`
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