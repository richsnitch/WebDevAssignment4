<script>
export default {
    props: {
        result_array: Array
    },
    watch: {
        result_array() {
            console.log(this.result_array);
        }
    }
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Image</th>
                <th>Name</th>
                <th>Genres</th>
                <th>Followers</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in result_array" :class="(index % 2 === 0) ? 'even' : 'odd'">
                <td>{{ index+1 }}</td>
                <td>  
                    <img v-if="item.images.length > 0" :src="item.images[0].url" alt="Photo of artist" height="100"/>
                    <div v-else class="no_img"></div>  
                </td>
                <td>{{ item.name }}</td>
                <td>
                    <ul>
                        <li v-for="genre in item.genres">{{ genre }}</li>
                    </ul>
                </td>
                <td>{{ item.followers.total }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style>
.even {
    width: 40rem;
    margin: 0;
    background-color: rgb(162, 206, 235);
}

.odd {
    width: 40rem;
    margin: 0;
    background-color: rgb(241, 241, 241);
}
th, td {
    border: solid 1px black;
}
.no_img {
    height: 80px;
}
</style>
