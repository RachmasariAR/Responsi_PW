<template>
  <section class="about">
    <h2>About Me</h2>
    <p>Mahasiswa semester 4 jurusan S1 Informatika, Universitas Amikom Yogyakarta yang saat ini sedang 
        mengambil konsentrasi Software Engineer dan Big Data Analytics dengan pengalaman berorganisasi 
        dan bekerja dalam tim. Senang mempelajari hal baru, memiliki keterampilan komunikasi, dan 
        berdedikasi untuk bekerja dalam tim. Bersemangat mengejar karir terutama dalam bidang pengolahan 
        dan analisis data.</p>

        <div class="responsive-container-block bigContainer">
          <div class="responsive-container-block Container bottomContainer">
            <div class="ultimateImg">
              <img class="mainImg" src="../components/Foto.JPG">
              <div class="purpleBox">
                <p class="purpleText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
                </p>
                <img class="stars" src="../components/Foto.JPG">
              </div>
            </div>
            <div class="allText bottomText">
              <p class="text-blk headingText">
                About Me
              </p>
              <p class="text-blk subHeadingText">
                Rachmasari Annisa Rida
              </p>
              <p class="text-blk description">
                Mahasiswa semester 4 jurusan S1 Informatika, Universitas Amikom Yogyakarta yang saat ini sedang 
                mengambil konsentrasi Software Engineer dan Big Data Analytics dengan pengalaman berorganisasi 
                dan bekerja dalam tim. Senang mempelajari hal baru, memiliki keterampilan komunikasi, dan 
                berdedikasi untuk bekerja dalam tim. Bersemangat mengejar karir terutama dalam bidang pengolahan 
                dan analisis data.
              </p>
              <a class="explore">
                Curriculum Vitae
              </a>
            </div>
          </div>
        </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about {
  text-align: left;
  padding: 100px 0;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 6s ease infinite;
}

* {
  font-family: "Poppins", sans-serif;
}

.responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

a {
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
}

.text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  line-height: 25px;
}

.mainImg {
  color: black;
  width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.explore{
  
}
</style>
