    
// let heroInfo = {
//     name: "Minh Cường",
//     job: "freelance react developer",
//     imgUrl: "https://picsum.photos/200/300",
//   };
  
//   let personalDetail = {
//     name: "Minh Cường",
//     dob: "06 June 1995",
//     spokenLanguages: ["English", "France", "German"],
//     nationality: "Vietnam",
//     interest: ["Music", "Reading", "Journey"],
//     techs: [
//       {
//         id: 1,
//         imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
//         techName: "Android",
//         exp: 2,
//       },
//       {
//         id: 2,
//         imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
//         techName: "Angular",
//         exp: 1,
//       },
//       {
//         id: 3,
//         imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
//         techName: "Bootstrap",
//         exp: 3,
//       },
//       {
//         id: 4,
//         imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
//         techName: "Vue",
//         exp: 2,
//       },
//       {
//         id: 5,
//         imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
//         techName: "React",
//         exp: 2 / 3,
//       },
//       {
//         id: 6,
//         imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
//         techName: "Mongodb",
//         exp: 0.25,
//       },
//       {
//         id: 7,
//         imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
//         techName: "Laravel",
//         exp: 1,
//       },
//       {
//         id: 8,
//         imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
//         techName: "Node.js",
//         exp: 5 / 6,
//       },
//     ],
//   };
  
//   let projects = [
//     {
//       id: 1,
//       imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
//       projectName: "Auto Drive Project",
//       link: "https://abcd-example.com",
//       tags: ["Angular", "React", "Jquery"],
//     },
//     {
//       id: 2,
//       imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
//       projectName: "Ecommerce Project",
//       link: "https://abcd-example.com",
//       tags: ["Bootstrap", "CSS", "Javascript"],
//     },
//     {
//       id: 3,
//       imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
//       projectName: "Chat Application",
//       link: "https://abcd-example.com",
//       tags: ["MongoDB", "Javascript"],
//     },
//     {
//       id: 4,
//       imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
//       projectName: "Social Media Platform",
//       link: "https://abcd-example.com",
//       tags: ["Vue", "Javascript"],
//     },
//     {
//       id: 5,
//       imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
//       projectName: "Image Sharing Platform",
//       link: "https://abcd-example.com",
//       tags: ["React", "Javascript"],
//     },
//   ];
 
//   localStorage.setItem('personalDetail', JSON.stringify(personalDetail));
//   localStorage.setItem('projects', JSON.stringify(projects));
//   localStorage.setItem('heroInfo', JSON.stringify(heroInfo));

        let personalDetailLocal = JSON.parse(localStorage.getItem('personalDetail'));
        let projectsLocal = JSON.parse(localStorage.getItem('projects'));
        let heroInfoLocal = JSON.parse(localStorage.getItem('heroInfo'));
console.log(personalDetailLocal );
        let renderheroInfo = () => {
            let nameElement = document.getElementById('name');
            nameElement.textContent=`Hi, I'm ${heroInfoLocal.name}`

            let jobElement = document.getElementById('job');
            jobElement.innerHTML=`I'm ${heroInfoLocal.job} <br />
            Developer`
            let imgUrlElement=document.getElementById('imgUrl');
            imgUrlElement.innerHTML=`<img src="${heroInfoLocal.imgUrl}" alt="">`;

        };

        let renderTechs = () => {
            let techListElement = document.getElementById("listTech");
            let techListElement1 = document.getElementById("listTech1");
            techListElement.innerHTML = '';
            techListElement1.innerHTML = '';
        
            personalDetailLocal.techs.forEach(techs => {
                if (techs.id <= 5) {
                    let techItem = document.createElement('div');
                    techItem.innerHTML = `<div class="card">
                        <span><img src="${techs.imgUrl}" alt="${techs.techName}" id="anh"></span>
                        <div>
                            <span>${techs.techName}</span>
                            <span>${techs.exp * 12} Months Experience</span>
                        </div>
                    </div>`;
                    techListElement.appendChild(techItem);
                } else {
                    let techItem = document.createElement('div');
                    techItem.innerHTML = `<div class="card">
                        <span><img src="${techs.imgUrl}" alt="${techs.techName}" id="anh"></span>
                        <div>
                            <span>${techs.techName}</span>
                            <span>${techs.exp * 12} Months Experience</span>
                        </div>
                    </div>`;
                    techListElement1.appendChild(techItem);
                }
            });
        };
        

        let renderPersonalDetail = () => {
            let dateOfBirthElement=document.getElementById('dateOfBirth');
            dateOfBirthElement.textContent="personalDetail.dob";
            let spokenLanguagesElement=document.getElementById('spokenLanguages');
            spokenLanguagesElement.textContent="personalDetail.spokenLanguages.join(', ')"
            let nationalityElement=document.getElementById('nationality');
            nationalityElement.textContent="personalDetail.nationality"
            let interestElement=document.getElementById('interest');
            interestElement.textContent="personalDetail.interest.join(', ')"

        };


        let renderProjects = () => {
            let projectListElement = document.getElementById('projectList');
            projectListElement.innerHTML = '';

            projectsLocal.forEach(projects => {
                let listItem = document.createElement('li');
                listItem.innerHTML = `<div class="cv1"><img src="${projects.imgUrl}" alt="${projects.projectName}">
                                        <div>
                                        <h3>${projects.projectName}</h3>
                                        <p><a href="${projects.link}" >Project Link</a></p>
                                        <button>${projects.tags}</button>
                                        </div>
                                        </div>`
                projectListElement.appendChild(listItem);
            });
        };
        renderheroInfo();
        renderPersonalDetail();
        renderProjects();
        renderTechs();
        function thue(){
            alert("vui lòng để lại lời nhắn và thông tin liên lạc cho tôi !!!")
        }



 