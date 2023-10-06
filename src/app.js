const app = Vue.createApp({
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Produk 1',
            description: 'Deskripsi Produk 1',
            price: 19.99,
            image: 'produk1.jpg',
          },
          {
            id: 2,
            name: 'Produk 2',
            description: 'Deskripsi Produk 2',
            price: 24.99,
            image: 'produk2.jpg',
          },
          // Tambahkan produk lainnya di sini
        ],
        cart: [],
      };
    },
    methods: {
      addToCart(product) {
        this.cart.push(product);
      },
    },
  });
  
  app.component('product-list', {
    props: ['products'],
    template: `
      <section>
        <article v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>Harga: ${{productprice}}</p>
          <button @click="$emit('add-to-cart', product)">Tambahkan ke Keranjang</button>
        </article>
      </section>
    `,
  });
  
  app.mount('#app');
  