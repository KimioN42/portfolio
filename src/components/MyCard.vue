<template>
  <div class="my-card-container">
    <div class="profilepic">
      <img src="../assets/profilepic.jpeg" class="profile-pic" />
    </div>
    <div class="my-info">
      <h1>Hello, world! (:</h1>
      <br />
      <br />
      <p>
        I'm a 25 years-old developer with about 2 years of professional
        experience mostly in back-end projects (+ 4 years of college experience
        altogether). Now transitioning to a full-stack role, so I'm spending
        most of my days studying everything that I can about web-development,
        back-end development as well as the best practices in the industry. I
        created this website to showcase some of my projects and as a challenge
        to myself. A little bit more about me: Enthusiastic and self-learning,
        I'm passionate about everything related to programming. Skilled at
        thinking on my feet, and capable of learning new tasks very quickly. On
        my free time I love studying new technologies and concepts. I just
        recently graduated with a software engineering degree at
        <a href="https://www.sheridancollege.ca/" target="_blank"
          >Sheridan College</a
        >, and currently working as a fullstack developer at
        <a href="https://ingate.app/">Ingate</a
        ><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">.</a>
      </p>
    </div>
    <div class="my-links">
      <span>You can find me on: </span>
      <br /><br />
      <div class="my-links-icons">
        <a href="https://www.linkedin.com/in/kimio-nishino/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/KimioN42" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/5033494/kimion42"
          target="_blank"
        >
          <i class="fab fa-stack-overflow"></i>
        </a>
        <a href="https://leetcode.com/kimionishino1/" target="_blank">
          <i class="fa fa-code"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line semi
export default {};
</script>
<style scoped>
.my-card-container {
  margin: auto;
  text-align: center;
  vertical-align: center;
  border: 1px solid rgb(45, 45, 45);
  border-radius: 1em;
  box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  padding: 3em;
}

.profilepic {
  padding-bottom: 1.5em;
  /* border: 1px solid white; */
}

.profilepic img {
  max-width: 75%;
  max-height: 75%;
  border-radius: 100%;
  border: 1px solid rgb(45, 45, 45);
}

.my-info {
  padding: 1em;
  /* border: 1px solid white; */
}

.my-info p {
  letter-spacing: 1px;
}

@media (max-width: 365px) {
  .my-info p {
    letter-spacing: normal;
  }
}

.my-info p a {
  color: var(--light-mode-font);
}

.my-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  vertical-align: auto;
  padding: 1em;
  color: var(--light-mode-font);
  /* border: 1px solid red; */
  align-items: center;
  color: var(--light-mode-font);
}

.my-links-icons a {
  font-size: 2em;
  margin: 0.5em 0.5em;
  color: var(--light-mode-font);
}

.my-links-icons a:visited {
  color: var(--light-mode-font);
}

@media (prefers-color-scheme: dark) {
  .my-info p a {
    color: var(--dark-mode-font);
  }

  .my-links {
    color: var(--dark-mode-font);
  }

  .my-links-icons a {
    color: var(--dark-mode-font);
  }

  .my-links a:visited {
    color: var(--dark-mode-font);
  }
}

@media (max-width: 768px) {
  .my-card-container {
    padding: 0.5em;
  }
}
</style>
