const placesBtn = document.querySelectorAll(".placeBtn");
const icons = document.querySelectorAll(".iconsDirection");
const count = document.querySelector(".count");
const countFull = document.querySelector(".countFull");
const foodGalleryCard = document.querySelectorAll(".foodGalleryCard");

let leftRightCounter = count.textContent;

const changePlace = (tag, nouveau, valid) => {
  const container = document.querySelector(`.${tag}-container`);

  if (valid) {
    container.innerHTML = `${nouveau}`;
  } else {
    console.error("Élément introuvable pour :", tag);
  }
};

const kinshasaTransit = (id) => {
  if (id) {
    changePlace(
      `changePicture`,
      `
      <div class="placeDescription kin-description">
                <p>
                Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, ipsam explicabo iste nesciunt id ut odit.
                Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </p>
        </div>
        <div class="placePicture kin-picture">
                <div class="pic">
                        <img src="./img/kin.jpg" alt="Kinshasa">
                </div>
        </div>
        `,
      true
    );
  }
};
const londonTransit = (id) => {
  if (id) {
    changePlace(
      `changePicture`,
      `
        <div class="placeDescription london-description">
            <p>London, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, ipsam explicabo iste nesciunt id ut odit.Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div class="placePicture london-picture">
            <div class="pic">
                <img src="./img/london.png" alt="London">
            </div>
        </div>
        `,
      true
    );
  }
};
const dubaiTransit = (id) => {
  if (id) {
    changePlace(
      `changePicture`,
      `
        <div class="placeDescription dubai-description">
            <p>Dubai, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, ipsam explicabo iste nesciunt id ut odit.Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div class="placePicture dubai-picture">
            <div class="pic">
                <img src="./img/dubai.png" alt="dubai">
            </div>
        </div>
        `,
      true
    );
  }
};
const moscowTransit = (id) => {
  if (id) {
    changePlace(
      `changePicture`,
      `
        <div class="placeDescription moscow-description">
            <p>Moscow, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, ipsam explicabo iste nesciunt id ut odit.Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div class="placePicture moscow-picture">
            <div class="pic">
                <img src="./img/moscow.png" alt="moscow">
            </div>
        </div>
        `,
      true
    );
  }
};
const parisTransit = (id) => {
  if (id) {
    changePlace(
      `changePicture`,
      `
        <div class="placeDescription paris-description">
            <p>Paris, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, placeat repellat dignissimos veritatis voluptates cum quaerat repellendus maxime quos alias iusto, ipsam explicabo iste nesciunt id ut odit.Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus expedita mollitia, Kinshase, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div class="placePicture paris-picture">
            <div class="pic">
                <img src="./img/paris.png" alt="paris">
            </div>
        </div>
        `,
      true
    );
  }
};

const leftChange = (id) => {
  if (id) {
    if (leftRightCounter > 1) {
      leftRightCounter--;
      count.textContent = leftRightCounter;
    } else {
      leftRightCounter = countFull.textContent;
      count.textContent = leftRightCounter;
    }
  } else {
    console.log("id non trouvé");
  }

  foodGalleryCard.forEach((foodGallery) => {
    if (leftRightCounter == foodGallery.id) {
      document.querySelector(".neutre").classList.remove("neutre");
      foodGallery.classList.add("neutre");
    }
  });
};
const rightChange = (id) => {
  if (id) {
    if (leftRightCounter < countFull.textContent) {
      leftRightCounter++;
      count.textContent = leftRightCounter;
    } else {
      leftRightCounter = 1;
      count.textContent = leftRightCounter;
    }
  } else {
    console.log("id non trouvé");
  }

  foodGalleryCard.forEach((foodGallery) => {
    if (leftRightCounter == foodGallery.id) {
      document.querySelector(".neutre").classList.remove("neutre");
      foodGallery.classList.add("neutre");
    }
  });
};

placesBtn.forEach((placeBtn) => {
  placeBtn.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    placeBtn.classList.add("active");

    switch (e.currentTarget.id) {
      case "kinshasa":
        kinshasaTransit(e.currentTarget.id);
        break;
      case "london":
        londonTransit(e.currentTarget.id);
        break;
      case "dubai":
        dubaiTransit(e.currentTarget.id);
        break;
      case "moscow":
        moscowTransit(e.currentTarget.id);
        break;
      case "paris":
        parisTransit(e.currentTarget.id);
        break;
      default:
        break;
    }
  });
});

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    switch (e.currentTarget.id) {
      case "left":
        leftChange(e.currentTarget.id);
        break;
      case "right":
        rightChange(e.currentTarget.id);
        break;
      default:
        break;
    }
  });
});

// COMING SOON
let targetDate = localStorage.getItem("countDownTarget");

if (!targetDate) {
  const now = new Date();
  now.setDate(now.getDate() + 102);
  targetDate = now.getTime();
  localStorage.setItem("countDownTarget", targetDate);
}
const upDateCountDown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    const finished = document.querySelector(".finished");
    finished.innerHTML = `Bienvenue chez Food Lover !`;
    localStorage.removeItem("countDownTarget");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").textContent = days;
  document.getElementById("hour").textContent = hours;
  document.getElementById("minute").textContent = minutes;
  document.getElementById("seconde").textContent = seconds;
};

upDateCountDown();
setInterval(upDateCountDown, 1);

// SCROLL
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    logo_nav.style.height = "70px";
  } else {
    logo_nav.style.height = "0";
  }
});
