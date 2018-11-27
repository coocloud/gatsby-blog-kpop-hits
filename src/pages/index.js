import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby";
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>
                <h1
                    className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
                >
                    KPOP All Day Long
                </h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }, index ) => (
                    <div key={index}>
                        <Link
                            to={node.fields.slug}
                            className={css`
                text-decoration: none;
                color: inherit;
              `
                            }
                        >
                        <h3
                            className={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
                        >
                            {node.frontmatter.title}{" "}
                            <span
                                className={css`
                  color: #bbb;
                `}
                            >
                — {node.frontmatter.date}
              </span>
                        </h3>
                        <p>{node.excerpt}</p>
                        <h5>Time to read: {node.timeToRead} min/s</h5>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }        
        excerpt
        timeToRead
        html
      }
    }
    totalCount
  }
}
`