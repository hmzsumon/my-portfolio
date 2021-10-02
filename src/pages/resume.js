import React from "react"
import Seo from "../components/Seo"

const resume = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>

          <button type="submit" className="submit-btn btn">
            <a
              href="https://pdfhost.io/v/KqWGFVHnf_HMs_Resumepdf.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </a>
          </button>
        </article>
      </section>
    </>
  )
}

export default resume
