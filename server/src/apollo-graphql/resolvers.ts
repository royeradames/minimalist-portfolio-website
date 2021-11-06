const resolvers = {
    Query: {
        // get a list of projects
        portfolio: (_, __, {dataSources}) =>  dataSources.db.getProjects(),
        // Find a project by ID
        projectById: (_, {id}, {dataSources}, info) => dataSources.db.getProjectById(id),
        // Find a project by the title
        projectByTitle: (_, {title}, {dataSources}) => dataSources.db.getProjectByTitle(title),
    },
}

export default resolvers