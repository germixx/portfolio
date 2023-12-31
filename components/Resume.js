import React from 'react'

function Resume(props) {

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  if (props.data) {
    var skillmessage = props.data.skillmessage;
    var education = props.data.education.map(function (education) {
      return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
    })
    var work = props.data.work.map(function (work) {
      let hh = <div key={work.company}><h3>{work.company}</h3>
        <p key={work.company} className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
        <div>
          <ul>
            {
              work.description.map(desc => {
                return <li key={desc} style={{ margin: 5 }}> • {desc}</li>;
              })
            }
          </ul>
        </div>

      </div>
      return hh;
    })

    var skills = props.data.skills.map((skills) => {
      var className = 'bar-expand ' + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span
            style={{ width: skills.level, backgroundColor: skills.color }}
            className={className}>
          </span>
          <em>{skills.name}</em>
        </li>
      )
    })
  }

  return <section id="resume">
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            {education}
          </div>
        </div>
      </div>
    </div>


    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>
      <div className="nine columns main-col">
        {work}
      </div>
    </div>
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
      <div className="nine columns main-col">
        <p>{skillmessage}
        </p>
        <div className="bars">
          <ul className="skills">
            {skills}
          </ul>
        </div>
      </div>
    </div>
  </section>
}

export default Resume
