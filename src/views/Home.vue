<template>
    <div>
      <v-row class="d-flex">
        <v-col cols="6">
          <v-text-field v-model="playlistUrl" placeholder="Enter YouTube playlist URL" >

</v-text-field>
 <v-btn  @click="downloadPlaylist">Download</v-btn>


  <ul>
    <li v-for="video in videos" :key="video.id">
      <a :href="video.downloadLink" target="_blank">{{ video.title }}</a>
    </li>
  </ul>
        </v-col>


        
      </v-row>
    <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="desserts"
    item-value="name"
    class="elevation-1"
  ></v-data-table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { VDataTable } from 'vuetify/labs/VDataTable'
  
  export default {
    components:{
      VDataTable,
    },
    data() {
      return {
        playlistUrl: '',
        videos: [],
        itemsPerPage: 5,
        headers: [
          {
            title: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            key: 'name',
          },
          { title: 'Calories', align: 'end', key: 'calories' },
          { title: 'Fat (g)', align: 'end', key: 'fat' },
          { title: 'Carbs (g)', align: 'end', key: 'carbs' },
          { title: 'Protein (g)', align: 'end', key: 'protein' },
          { title: 'Iron (%)', align: 'end', key: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22',
          },
        ],
      };
    },
    methods: {
      async downloadPlaylist() {
        const playlistId = ""
        const apiKey = 'AIzaSyDqgqyDsRnNCBuOAu0sh4bQU9oLC8otgxY'; // Replace with your YouTube Data API key
  
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
          );
  
          this.videos = response.data.items.map(item => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            downloadLink: `https://www.googleapis.com/download?videoId=${item.snippet.resourceId.videoId}`
          }));
        } catch (error) {
          console.error('Error downloading playlist:', error);
        }
      },
      extractPlaylistId(url) {
        // Extract playlist ID from the URL using regular expressions or other techniques
      }
    }
  };
  </script>
  
  <style scoped>
  /* CSS styles for the component */
  </style>


<!-- <template>
    sjjshdfjhsd
    {{ authUserStore.Name }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthUserStore } from '../stores/module'    

export default defineComponent({

    setup() {
        const authUserStore = useAuthUserStore()
       

      
        setTimeout(() => {
            authUserStore.test()
            console.log(authUserStore)
}, 1000)

return{
    authUserStore
}

    }

})
</script> -->
