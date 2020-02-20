/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const mainUser = document.querySelector('.cards');

axios
	.get('https://api.github.com/users/miragekamran/followers')
	.then((res) => {
    console.log(res)
		const followersArray = res.data;
		const list = followersArray.map((user) => {
			return user.login;
		});
		const followersList = list.slice(0, 20);
		return followersList;
	})
	.then((followersList) => {
		followersList.forEach((user) => {
      axios
        .get(`https://api.github.com/users/${user}`)
        .then((res) => {
          console.log(res)
          const data = res.data;
          const newCard = gitHubCardCreator(data);
          mainUser.appendChild(newCard);
			  });
		});
	})
	.catch((err) => console.log(err));

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//const followersArray = [];

// Step 3: function that accepts a single object as its only argument. By using this function we create a components
function gitHubCardCreator(user) {

  // creating elements.
  const myCard = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const NameOfUsers = document.createElement('h3');
  const userNameofUsers = document.createElement('p');
  const usersLocation = document.createElement('p');
  const usersProfile = document.createElement('p');
  const usersAddLink = document.createElement('a');
  const usersFollowers = document.createElement('p');
  const usersFollowing = document.createElement('p');
  const usersBio = document.createElement('p');

  // adding classes.
  myCard.classList.add('card');
  cardInfo.classList.add('card-info');
  NameOfUsers.classList.add('name');
  userNameofUsers.classList.add('username');

  // appending to the myCard div.
  myCard.appendChild(userImage);
  myCard.appendChild(cardInfo);
  cardInfo.appendChild(NameOfUsers);
  cardInfo.appendChild(userNameofUsers);
  cardInfo.appendChild(usersLocation);
  cardInfo.appendChild(usersProfile);
  usersProfile.appendChild(usersAddLink);
  cardInfo.appendChild(usersFollowers);
  cardInfo.appendChild(usersFollowing);
  cardInfo.appendChild(usersBio);

  

  // adding src and text content
  userImage.src = user.avatar_url;
  userImage.alt = 'github user';
  NameOfUsers.textContent = user.name;
  userNameofUsers.textContent = user.login;
  usersLocation.textContent = user.location;
  usersProfile.textContent = 'Profile:';
  usersAddLink.href = user.html_url;
  usersAddLink.textContent = user.html_url;
  usersAddLink.style.cursor = 'pointer';
  usersFollowers.textContent = `Followers: ${user.followers}`;
  usersFollowing.textContent = `Following: ${user.following}`;
  usersBio.textContent = `Bio: ${user.bio}`;

  console.log(myCard);

  return myCard;
}

console.log(gitHubCardCreator());

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
