<script>
  import { ref, onMounted } from 'vue'
  import axios from 'axios';
  import 'primeflex/primeflex.css';

  export default {
    

    setup() {
    // reactive state
    const count = ref();
    const cust_1_transferorders = ref([]);
    const cust_2_transferorders = ref([]);
    const cust_3_transferorders = ref([]);
    const colnames = ref([]);

    // functions that mutate state and trigger updates
    function increment() {
      count.value++;
    }

    // lifecycle hooks
    onMounted(async () => {
        try {
          const [cust_1_response,cust_2_response, cust_3_response] = await Promise.all ([
            axios.get("http://142.93.220.39:3000/transferorders/get/cust_1"),
            axios.get("http://142.93.220.39:3000/transferorders/get/cust_2"),
            axios.get("http://142.93.220.39:3000/transferorders/get/cust_3")
          ]);
          cust_1_transferorders.value = cust_1_response.data;
          cust_2_transferorders.value = cust_2_response.data;
          cust_3_transferorders.value = cust_3_response.data;
          colnames.value = Object.keys(cust_1_response.data[0]);
          
        } catch (err) {
          
        } finally {
          
        }
      });

      return {
        cust_1_transferorders,
        cust_2_transferorders,
        cust_3_transferorders,
        colnames
      }
    }
  }
</script>
  
<template>
  <div class="flex flex-column">
    <Tabs>
      <TabList>
          <Tab value="0">Customer 1</Tab>
          <Tab value="1">Customer 2</Tab>
          <Tab value="2">Customer 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
            <div class="flex flex-row gap-2">
              <Button>Create Order</Button>
              <Button>Delete Order</Button>
              <Button>Edit Order</Button>
            </div>
            <Divider />
            <DataTable :value="cust_1_transferorders" resizableColumns columnResizeMode="fit" showGridlines scrollable scrollHeight="400px" class="responsive-table">
                    <Column v-for="col in colnames" :field="col" :header="col"></Column>
            </DataTable>
        </TabPanel>
        <TabPanel value="1">
            <DataTable :value="cust_2_transferorders" resizableColumns columnResizeMode="fit" showGridlines scrollable scrollHeight="400px" class="responsive-table">
                    <Column v-for="col in colnames" :field="col" :header="col"></Column>
            </DataTable>
        </TabPanel>
        <TabPanel value="2">
            <DataTable :value="cust_3_transferorders" resizableColumns columnResizeMode="fit" showGridlines scrollable scrollHeight="400px" class="responsive-table">
                    <Column v-for="col in colnames" :field="col" :header="col"></Column>
            </DataTable>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>


<style>
  button {
    font-weight: bold;
  }

</style>
<!--
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
-->