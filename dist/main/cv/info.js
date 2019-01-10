// Render menu

const arr = [{
  menu: "Home",
  href: "#home"
},
{
  menu: "About",
  href: "#about"
},
{
  menu: "Education/Courses",
  href: "#education"
},
{
  menu: "Work Experience",
  href: "#work"
},
{
  menu: "Skills",
  href: "#skills"
},
{
  menu: "Events",
  href: "#events"
},
{
  menu: "Contacts",
  href: "#contacts"
}
]

function renderMenuList () {
  let renderedMenu = "";
  for (let i = 0; i < arr.length; i++) {
      renderedMenu += `
      <li> <a href="${arr[i].href}">${arr[i].menu}</a></li>
      `
      
      document.querySelector(".menu-content").innerHTML = renderedMenu;
  }
}

renderMenuList();

// Render Online courses

const coursesArr = [{
  title: "Free Code Camp",
  href: "https://www.freecodecamp.org/",
  name: "Responsive Web Design",
  certificatHref: ""
},
{
  title: "Udemy",
  href: "https://www.udemy.com/introduction-to-software-testing-or-software-qa/learn/v4/overview",
  name: "Introduction to Software Testing or Software QA",
  certificatHref: "https://www.udemy.com/certificate/UC-8EYI52LZ/"
},
{
  title: "Udemy",
  href: "https://www.udemy.com/software-testing-qa-fundamentals-and-manual-testing-concept/learn/v4/content",
  name: "Software Testing, QA Testing, Manual Testing, SDLC, Test Plan",
  certificatHref: "https://www.udemy.com/certificate/UC-J6JBZRY6/"
},
{
  title: "Udemy",
  href: "ttps://www.udemy.com/code-your-first-game/learn/v4/overview",
  name: "Code Your First Game: Arcade Classic in JavaScript on Canvas",
  certificatHref: "https://www.udemy.com/certificate/UC-6Q9W4PCK/"
},
{
  title: "Udemy",
  href: "https://www.udemy.com/modern-javascript-from-the-beginning/learn/v4/content",
  name: "CoModern JavaScript From The Beginning",
  certificatHref: ""
},
{
  title: "watch and code",
  href: "https://watchandcode.com/courses/enrolled/60264",
  name: "Practical JavaScript",
  certificatHref: ""
}
]

function renderOnlineCoursesList () {
  let renderedOnlineCourses = "";
  for (let i = 0; i < coursesArr.length; i++) {
      renderedOnlineCourses += `
      <li class="timeline-item">
        <div class="timeline-info">
          <span>${coursesArr[i].title}</span>
          <a href="${coursesArr[i].certificatHref}"
            target="_blank" title="Certificate"> <img src="img/Pdf.png" alt="Pdf"/>
          </a>
        </div>
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <a href="${coursesArr[i].href}" target="_blank">
          <h3 class="timeline-title">${coursesArr[i].name}</h3>
          </a>
        </div>
      </li>
      `
      
      document.querySelector("#courses-timeline").innerHTML = renderedOnlineCourses;
  }
}

renderOnlineCoursesList();

// Render Online courses

const eventsArr = [{
  date: "2017.11.04",
  title: "Dienai tapk 3WA studentu: nemokami web programavimo mokymai"
},
{
  date: "2017.11.18",
  title: "Django girls programavimo dirbtuvės Vilniuje"
},
{
  date: "2017.12.18",
  title: "CodeAcademy Kalėdos: Nauji metai - naujas startas"
},
{
  date: "2018.02.13",
  title: "Devbridge Group OPEN DAYS in Vilnius"
},
{
  date: "2018.03.01",
  title: "Smashing Front-End/UX Meet-up V"
},
{
  date: "2018.03.21",
  title: "Adform renginys CodeAcademy studentams"
},
{
  date: "2018.05.31",
  title: "Front-End meetup vol. 1"
},
{
  date: "2018.06.08",
  title: "WOMEN GO TECH visus kviečia prisiliesti prie technologijų"
},
{
  date: "2018.06.12",
  title: "TransferGo hosts: VGC Meetup #23"
},
{
  date: "2018.07.04",
  title: "Ko nori darbdaviai su Alna Software"
},
{
  date: "2018.07.26",
  title: "Kaip aš tapau programuotoju"
},
{
  date: "2018.10.11",
  title: "Front-End meetup vol. 2"
},
{
  date: "2018.10.17",
  title: "Devbridge group Sourcery for Front-End workshop"
},
{
  date: "2018.12.19",
  title: "VGC Christmas Party"
}
]

function renderEventsList () {
  let renderedEvents = "";
  for (let i = 0; i < eventsArr.length; i++) {
    renderedEvents += `
      <li class="timeline-item">
        <div class="timeline-info">
          <span>${eventsArr[i].date}</span>
        </div>
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">${eventsArr[i].title}</h3>
        </div>
      </li>
      `
      
      document.querySelector("#events-timeline").innerHTML = renderedEvents;
  }
}

renderEventsList();