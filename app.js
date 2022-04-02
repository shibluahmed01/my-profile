const data = [{
        name: 'Jibon Ahmed',
        age: 25,
        gender: 'male',
        lookingfor: 'male',
        location: 'bogra',
        image: 'img/111.jpg'
    },
    {
        name: 'Shiblu Ahmed',
        age: 22,
        gender: 'male',
        lookingfor: 'male',
        location: 'Rajshahi',
        image: 'img/222.jpg'
    },
    {
        name: 'Rabbi Sheak',
        age: 30,
        gender: 'male',
        lookingfor: 'male',
        location: 'sirajgonj',
        image: 'img/333.jpg'
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