import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";
import InstagramEmbed from "react-instagram-embed"

export default ({data}) => (
    <Layout>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
            All Kpop related stuff
        </p>
        <div>
            <InstagramEmbed
                url='https://www.instagram.com/p/BqrLX3VnX08'
                maxWidth={620}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        </div>
    </Layout>
)

export const query = graphql`
  {
    site {
        siteMetadata {
        title
        }
    }
  }
`