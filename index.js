// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(res => console.log(res.message));

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(data => data.json())
//     .then((res) => {
//     if (res.status !== 'success'){
//         return;
//     }

//         const imgSrc = res.message

//         document.querySelector('.js-img').innerHTML = `
//             <img 
//             src='${imgSrc}'
//             width='400'>
//         `;
//     });


// document.addEventListener('DOMContentLoaded', function() {
//     const activityElement = document.getElementById('activity');
//     const button = document.getElementById('new-activity-btn');

//     async function fetchActivity() {
//         try {
//             const response = await fetch("https://www.boredapi.com/api/activity/");
//             const data = await response.json();
//             activityElement.textContent = data.activity;
//         } catch (error) {
//             activityElement.textContent = 'Не удалось получить дело. Попробуйте снова.';
//         }
//     }

//     button.addEventListener('click', fetchActivity);
// });


document.addEventListener('DOMContentLoaded', function() {
    const activityElement = document.getElementById('activity');
    const button = document.getElementById('new-activity-btn');

    async function fetchActivity() {
        try {
            const response = await fetch("https://www.boredapi.com/api/activity/");
            const data = await response.json();
            activityElement.textContent = data.activity;
        } catch (error) {
            activityElement.textContent = 'Не удалось найти занятие. Попробуйте снова.';
        }
    }

    button.addEventListener('click', fetchActivity);
});    