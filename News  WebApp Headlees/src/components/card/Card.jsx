import React from "react";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import "./Card.css";

function CleanHtml(html) {
  const sanitize = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } })
  const safeHTML = parse(sanitize);
  return safeHTML;
}

function Card({ idx, img, date, name, desc, link }) {
  return (
    <div className="card" key={name+idx}>
      <a href={link}><img src={img} /></a>
      <div className="card-body">
        <p>{date}</p>
        <h2><a href={link}>{CleanHtml(name)}</a></h2>
        <p>{CleanHtml(desc)}</p>
        <h5><a href={link}>Read More</a></h5>
      </div>
    </div>
  )
}

export default Card
