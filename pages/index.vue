<template>
  <div>
    <MyHeader />
    <HeroSection />
    <AboutSection />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import MyHeader from '../components/MyHeader.vue';

export default {
  components: {
    MyHeader,
    AboutSection,
    HeroSection,
    
  }
}
</script>./Index.vue
