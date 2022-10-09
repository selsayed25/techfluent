import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle = "About">
			<h2>
				"Our goal is to help the unhelped to becoming people with the feeling of confidence and passion to learn and discover the world they can shape." 
			</h2>
      <p>Techfluent was founder by a high school sophomore named Sami Elsayed who has a huge interest in coding, building computers, and helping others for the common good. Techfluent first went public on October 30, 2022, with only Elsayed working on the project.</p>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage