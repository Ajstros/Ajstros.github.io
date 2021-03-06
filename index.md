<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="resume.css">
    <title>Abe Stroschein Resume</title>
  </head>
  <body>
    <div class="contact">
      <h1>Abe Stroschein</h1>
      <h2>2115 Summit Avenue, St Paul, MN 55105-1094 | 952-201-4363 | <a href="mailto:ajstros@gmail.com" target="blank">ajstros@gmail.com</a></h2>
      <hr>
    </div>

    <div class="tab">
      <button onclick="displayContent(event, 'About Me')" class="tabBtn" id="default">About Me</button>
      <button onclick="displayContent(event, 'Experience')" class="tabBtn">Experience</button>
      <button onclick="displayContent(event, 'Education')" class="tabBtn">Education</button>
      <button onclick="displayContent(event, 'Leadership')" class="tabBtn">Leadership</button>
      <button onclick="displayContent(event, 'PDF')" class="tabBtn">PDF</button>
    </div>

    <div class="content" id="About Me">
      <h1>Abe Stroschein</h1>
      <p>
        My name is Abe Stroschein. I am a Freshman Computer Engineering Major
        at the University of St. Thomas. In addition to programming I enjoy
        ultimate frisbee, rock climbing, and playing drum set.
      </p>
    </div>

    <div class="content" id="Experience">
      <h1>Sunday Custodian, Faith Lutheran Church</h1>
        <p class="date">August 20, 2017 - August 23, 2020</p>
        <ul>
          <li>Open and set up the church before people arrive</li>
          <li>Unlock doors, turn on lights, set out tables, nametags, papers</li>
          <li>Help Pastors and other staff with other tasks</li>
          <li>Work with volunteers to set out refreshments, wash dishes</li>
          <li>Operate industrial coffee maker</li>
          <li>Operate industrial dish washer</li>
          <li>Lock up the church</li>
        </ul>
      <h1>Programming</h1>
        <p>I coded this webpage from scratch using HTML, CSS, and JS.
          I also have some experience with the Python programming language. Here
          is a link to a <a href="https://github.com/Ajstros/tic-tac-toe" target="blank" style="background-color: rgb(139, 176, 232);">tic-tac-toe</a> program I made using Python.</p>
    </div>

    <div class="content" id="Education">
      <h1>Computer Engineering Major at St. Thomas University (Freshman)</h1>
        <p class="date">September 9, 2020 - Present</p>
        <ul>
          <li>1 of 4 Science Scholars</li>
          <li>Symphonic Wind Ensemble</li>
          <li>Computer Science Club</li>
        </ul>
    </div>

    <div class="content" id="Leadership">
      <h1>Waconia High School Drumline Captain</h1>
        <p class="date">March 2019 - July 2019</p>
        <ul>
          <li>Lead sectionals, warm-ups</li>
          <li>Organize drumline before performances</li>
          <li>Serve as contact between directors and drumline</li>
        </ul>

      <h1>Boy Scout Troop 3327 (Waconia) Senior Patrol Leader</h1>
        <p class="date">October 2017 - April 2018</p>
        <ul>
          <li>Communicate meetings and campouts to the troop</li>
          <li>Lead troop meetings</li>
          <li>Hold leadership planning meetings</li>
        </ul>
    </div>

    <div class="content" id="PDF">
      <h1>PDF Download</h1>
      <a href="resume.pdf" target="blank">PDF Resume</a>
      <p>This is PDF version of my resume for print use.</p>
    </div>

  </body>
  <script src="resume.js"></script>
</html>
