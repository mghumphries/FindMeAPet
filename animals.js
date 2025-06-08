const allDogs = [
    {
        dogName: "Ashton",
        breed: "Terrier, American Pit Bull/Mix",
        age: 3
    },
    {
        dogName: "Axel",
        breed: "Terrier, American Pit Bull/Mix",
        age: 2
    },
    {
        dogName: "Bama",
        breed: "Siberian Husky/Mix",
        age: 6
    },
    {
        dogName: "Bea",
        breed: "Terrier, American Pit Bull/Mix",
        age: 2
    },
    {
        dogName: "Beanie",
        breed: "Terrier, American Pit Bull/Hound",
        age: 3
    },
    {
        dogName: "Beaux",
        breed: "Catahoula Leopard dog/Mix",
        age: 9
    },
    {
        dogName: "Beaver",
        breed: "Terrier, American Pit Bull/Mix",
        age: 1
    },
    {
        dogName: "Benny Boo",
        breed: "Terrier, American Pit Bull/Mix",
        age: 1
    },
    {
        dogName: "BonBon",
        breed: "Terrier, American Pit Bull/Mix",
        age: 2
    },
    {
        dogName: "Buddy",
        breed: "Terrier, Pit Bull/Mix",
        age: 2
    }
];

function findDogs() {
    let selectedDogs = [];
    let  minAge = document.querySelector("#dogAge");

    let petAge = parseInt(minAge.value);


    allDogs.forEach((dog) => {
        if (dog.age >= petAge) {
            selectedDogs.push(dog);
        }
    });

    let dogList = document.querySelector(".selectedDog");
    dogList.innerHTML = "";

    let dogImg = document.querySelector(".selectedDog");
    

    selectedDogs.forEach((dog, index) => {
            let list = document.createElement("li");
            console.log(list);
            list.innerHTML = `Name: ${dog.dogName}.<br> Breed: ${dog.breed}. <br> Age: ${dog.age} years old. <br><br>`;
            dogList.appendChild(list);
    });
}
