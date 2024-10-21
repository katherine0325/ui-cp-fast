export default {
  name: 'Home',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    goPrice() {
      window.scrollTo({ top: 1850, behavior: 'smooth' });
    },
    goCase() {
      window.scrollTo({ top: 2600, behavior: 'smooth' });
    },
    goTaobao() {
      window.open('https://item.taobao.com/item.htm?id=845327404625&pisk=gdIZeRbZjnfQxAZWdpK2UWzIxGx9VhV7QiOXntXDCCAM1i1VnK9DiAxmmBvHHBibBhav0sRFMCT6ji7K0TBAfRKbBhB9DnV7NusVBOKY5biXGi-hKK9uccmijOCeWi6_NuZ5LPv9c9V5fESeGKvSmnYMo9XH9LAmmsYitJJDhf0mjsX3LBpjSAAimvvHhLpDmmAmxBv2emADiKYnxBpDmIcsfgjxTKTgFbdhelh47FAlIBomqYpwSRWZlmnApdYN61AeReseQFRkRvba1gWlIgpVD802gt_G1pC44W-hb1SM8nrqvh6P-18F7SoeJwXRme7La4BRI17krGqUKs5heaKGjSn66ZXhmBsghmRlPTKepiNKjI7hoGT9DfVwLGWP0ZSy_jphShjA7j02SppeNJyFGFQkE0504e0xkFe9LQwMSq3vSQ9eNJyEkqL9rpR7IFf..&spm=a21xtw.29178619.product_shelf.3.58bf25few2nm11', '_blank');
    },
    downloadCase() {
      const link = document.createElement('a');
      link.href = '/static/cp-fast-dist.zip';
      link.download = 'cp-fast-dist.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  }
}
