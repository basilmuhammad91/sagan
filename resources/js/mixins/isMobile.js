export default {
  data() {
    return {
      isMobile: false
    }
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 640;
    }
  },
  created() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
}
