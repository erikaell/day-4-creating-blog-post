const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let projects = [];

function addProject() {
  let title = document.getElementById("input-project-title").value;
  let start_date = document.getElementById("input-project-start-date").value;
  let end_date = document.getElementById("input-project-end-date").value;
  let description = document.getElementById("input-project-description").value;
  let image = document.getElementById("input-project-image").files[0];

  image = URL.createObjectURL(image);

  let checkboxes = document.querySelectorAll('input[name="program"]:checked');

  let output = [];
  checkboxes.forEach((checkbox) => {
    output.push(checkbox.value);
  });

  let iconElement = "";
  output.forEach((output) => {
    iconElement += output;
  });

  let project = {
    title: title,
    start_date: start_date,
    end_date: end_date,
    author: "Erika Elliyyin",
    image: image,
    description: description,
    tech: iconElement,
  };

  projects.push(project);

  renderProjects();
}

function renderProjects() {
  let blogContainer = document.getElementById("cards");

  blogContainer.innerHTML = "";

  projects.forEach((data) => {
    blogContainer.innerHTML += `
  <div class="card-container">
  <div class="card">
    <div class="project-image">
      <img src="${data.image}" alt="">
    </div>
    <div class="project-detail">
      <h1>
        <a href="project-detail.html" target="_blank" onclick="
        renderProjectsDetail()">${data.title}</a>
      </h1>
      <p>Durasi: ${getDistanceTime(data.end_date, data.start_date)}</p>
      <p>${data.description}</p>
    </div>
    <div class="techs">${data.tech}</div>              
    <div class="btn-group">
    <button class="btn-edit">Edit</button>
    <button class="btn-delete">Delete</button>
  </div>
</div>`;
  });
}

// function renderProjectsDetail() {
//   let projectContainer = document.getElementById("project-post-detail");

//   projectContainer.innerHTML = "";

//   projects.forEach((data) => {
//     projectContainer.innerHTML += `
//     <div class="post-detail-container">
//     <h1>${data.title}</h1>
//     <div class="project-post-detail-info">
//       <div class="left">
//         <img src="${data.image}" alt="" />
//       </div>
//       <div class="right">
//         <h3>Duration</h3>
//         <h3><i class="fa-solid fa-calendar-days">${getFullTime(
//           data.start_date
//         )}-${getFullTime(data.end_date)}</i></h3>
//         <h3><i class="fa-solid fa-clock">${getDistanceTime(
//           data.end_date,
//           data.start_date
//         )}</i></h3>
//         <h3>Technologies</h3>
//         <div>${data.tech}</div>
//       </div>
//     </div>
//     <div class="desc">
//       <p>${data.description}</p>
//     </div>
//     </div>`;
//   });
// }

function getFullTime(time) {
  let newTime = new Date(time);
  const date = newTime.getDate();
  const monthIndex = newTime.getMonth();
  const year = newTime.getFullYear();

  const fullTime = `${date} ${month[monthIndex]} ${year}`;

  return fullTime;
}

function getDistanceTime(time1, time2) {
  const endDate = new Date(time1);
  const startDate = new Date(time2);

  const distance = endDate - startDate;

  const milisecondsInMonth = 1000 * 60 * 60 * 24 * 30;
  const distanceMonth = Math.floor(distance / milisecondsInMonth);

  // const milisecondsInDay = 1000 * 60 * 60 * 24;
  // const distanceDay = Math.floor(distance / milisecondsInDay);

  if (distanceMonth >= 1) {
    return `${distanceMonth} month ago`;
  } else {
    const milisecondsInDay = 1000 * 60 * 60 * 24;
    const distanceDay = Math.floor(distance / milisecondsInDay);
    return `${distanceDay} day ago`;

    // if (distanceDay >= 1) {
    //   return `${distanceDay} day ago`;
    // } else {
    //   const milisecondsInHour = 1000 * 60 * 60;
    //   const distanceHour = Math.floor(distance / milisecondsInHour);

    // if (distanceHour >= 1) {
    //   return `${distanceHour} hours ago`;
    // } else {
    //   const milisecondsInMinute = 1000 * 60;
    //   const distanceMinute = Math.floor(distance / milisecondsInMinute);

    //   if (distanceMinute >= 1) {
    //     return `${distanceMinute} minutes ago`;
    //   } else {
    //     const milisecondsInSeconds = 1000;
    //     const distanceSeconds = Math.floor(distance / milisecondsInSeconds);
    //     return `${distanceSeconds} seconds ago`;
    //   }
    // }
  }
}
