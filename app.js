const data = [{
        name: 'Jibon Ahmed',
        age: 25,
        gender: 'male',
        lookingfor: 'male',
        location: 'bogra',
        image: 'https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/339168878_106671355726879_8028751554780059055_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGyyXtbSiiWokR1M-SL2HulLlzUNz88f5MuXNQ3Pzx_k8YN8gfEw4wmW08l1I2dfh2Orwy71a31R5H9ErBNJWbx&_nc_ohc=7aNkajvf7hIAX9iRSl7&_nc_ht=scontent.frjh1-1.fna&oh=00_AfB0phXuA46f1AGXtiO9100xlWDuBGFy3L7Gyiut2mlonA&oe=64301CC6'
    },
    {
        name: 'Shiblu Ahmed',
        age: 22,
        gender: 'male',
        lookingfor: 'male',
        location: 'Rajshahi',
        image: 'https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/328890854_6049339775125967_4957679846861641276_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEsEQMGABUL1QCAWvQYGi_1veZIDFRML2C95kgMVEwvYPFgzNY-WuJXHuSh_neYNCPizwJdAuvXfhItdWXbsiED&_nc_ohc=7o2ILzlNuhUAX9SskCL&_nc_ht=scontent.frjh1-1.fna&oh=00_AfA0hkn6g3XQlsFtAkT8aHJl7fsOUGxujofBhofcvX943g&oe=643191DB'
    },
    {
        name: 'Rabbi Sheak',
        age: 30,
        gender: 'male',
        lookingfor: 'male',
        location: 'sirajgonj',
        image: 'https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/326455273_1819425548414981_5190579311752826900_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFXoYyY5ewQgiPQiDePfof7GSlvSrOFIzcZKW9Ks4UjN-CL1JLDTRvnirs26BCa3g4_7rtZc4vnkn2RpEjFI7VJ&_nc_ohc=H_9qjmbPwScAX9ZKI2F&_nc_ht=scontent.frjh1-1.fna&oh=00_AfDzkugGvFVy6QW9qW2gJl9wHerTisfex4L3gbW8xFCTbA&oe=64300C0A'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">Name: ${currentProfile.name}</li>
          <li class="list-group-item">Age: ${currentProfile.age}</li>
          <li class="list-group-item">Location: ${currentProfile.location}</li>
          <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
      `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // No more profiles
        window.location.reload();
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}