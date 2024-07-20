<template>
    <v-container>

        <v-col>
            <v-row class="col-sm-12">
                <h1>
                    Se chegou aqui é porque funcionou :{{ count }}
                    
                </h1>
                <v-col>
                    <v-btn @click="increment">Botao</v-btn>
                </v-col>
                
            </v-row>
        </v-col>
    </v-container>
</template>
<script>
export default {
    name: 'AppTest2',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }  
}
</script>