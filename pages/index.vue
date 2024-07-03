<template>
  <div>
    <Header />
    <HeroSection />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
    AboutSection,
    HeroSection,
    
  }
}
</script>./Index.vue
