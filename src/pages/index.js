import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function yearsDiff() {
  const date1 = new Date()
  const date2 = new Date("2017-02-15")
  const yearsDiff = Math.abs(date2.getFullYear() - date1.getFullYear())
  return yearsDiff < 10 ? `0${yearsDiff}` : yearsDiff
}

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio | Mattias Prada" />
    <h2 className="keywords">
      Leadership, product focus and code craftmanship
    </h2>
    <h1 className="name">Mattias Prada</h1>
    <div className="line top"></div>
    <div className="role">Engineering Manager from Stockholm, Sweden</div>
    <p className="copy first">
      I believe anyone can build fantastic products given the opportunity, if
      they have a passion, the right support and are eager to learn.
    </p>
    <p className="copy second">
      Today I work at Epidemic Sound, where I support an amazing team of highly
      skilled Fullstack Software Engineers, and occasionally also get my hands
      dirty with code, which I love.
    </p>
    <p className="copy third">
      We build products that helps our end users discover new music on our
      platform; through search, recommendations and curation.
    </p>
    <p className="copy fourth">
      I thrive when I get to learn new things, and discuss topics close to my
      heart like functional programming, system architecture, web performance
      and design.
    </p>
    <div className="line bottom"></div>
    <div className="squares left">
      <div className="square white"></div>
      <div className="square white"></div>
      <div className="square white"></div>
    </div>
    <div className="squares right">
      <div className="square black"></div>
      <div className="square black"></div>
    </div>
    <p className="copy fifth">
      I have a background in sound and broadcast engineering, but started my
      professional journey into software engineering in 2017.
    </p>
    <p className="copy sixth">
      For leisure I enjoy spending time with my son and partner, as well as
      playing video games, reading, watching rocket launches and learning new
      things.
    </p>
    <div className="number">{yearsDiff()}</div>
    <div className="links">
      <a href="https://www.linkedin.com/in/mattias-prada-2aa2a743/">Linkedin</a>
      <a href="https://github.com/apelsinet">GitHub</a>
    </div>
  </Layout>
)

export default IndexPage
