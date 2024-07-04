<template>
  <section class="about">
    <!-- <h2>About Me</h2>
    <p>Mahasiswa semester 4 jurusan S1 Informatika, Universitas Amikom Yogyakarta yang saat ini sedang 
        mengambil konsentrasi Software Engineer dan Big Data Analytics dengan pengalaman berorganisasi 
        dan bekerja dalam tim. Senang mempelajari hal baru, memiliki keterampilan komunikasi, dan 
        berdedikasi untuk bekerja dalam tim. Bersemangat mengejar karir terutama dalam bidang pengolahan 
        dan analisis data.</p> -->

        <div class="responsive-container-block bigContainer">
          <div class="responsive-container-block Container bottomContainer">
            <div class="ultimateImg">
              <img class="mainImg" src="~/assets/Foto.JPG" height="100">
            </div>
            <div class="col-md-8">
              <div class="allText bottomText">
                <h2 class="text-blk headingText">
                  About Me
                </h2>
                <h5 class="text-blk subHeadingText">
                  Rachmasari Annisa Rida
                </h5>
                <p class="text-blk description">
                  Mahasiswa semester 4 jurusan S1 Informatika, Universitas Amikom Yogyakarta yang saat ini sedang 
                  mengambil konsentrasi Software Engineer dan Big Data Analytics dengan pengalaman berorganisasi 
                  dan bekerja dalam tim. Senang mempelajari hal baru, memiliki keterampilan komunikasi, dan 
                  berdedikasi untuk bekerja dalam tim. Bersemangat mengejar karir terutama dalam bidang pengolahan 
                  dan analisis data.
                </p>
                <button>
                  <a class="explore" href="https://drive.google.com/file/d/1LChpTxkduFRyoPVA7E-xXWQ1Ft9Wjs8O/view?usp=sharing">
                  Curriculum Vitae
                </a>
                </button>
              </div>
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
  color:black;
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
  width: 500px;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.explore{

}

</style>
