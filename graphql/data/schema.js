const schema = `
    type Review {
        Id: Int!
        Name: String
        Score: Int!
        Comment: String
    }

    type Query {
        reviews: [Review]
    }

    type Mutation {
        newReview (ID: Int!, Name: String, Score: Int!, Comment: String): Review
    }

`
export default schema
