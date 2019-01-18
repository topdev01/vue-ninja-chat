<template> 
<div class="chat container">
<h2 class= "center teal-text">Ninja Chat</h2>
<div class="card">
    <div class="card-content">
        <ul class="messages">
            <li>
                <span class="teal-text">Name</span>
                <span class="grey-text text-darken-3">Text</span>
                 <span class="grey-text time">Time</span>
            </li>
        </ul>
    </div>
    <div class="card-action">
        <!--  http://andreybleme.com/2018-01-07/sharing-data-across-vuejs-components/ -->
        <!--  passes a prop called name -->
        <!-- :name is short for v-bind='name'-->
       <NewMessage :name = "name"/>
    </div>
</div>

    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
export default {
 
 
 //props - input parameters from parent to child component
name: 'Chat',
props: ['name'],
components: {
    NewMessage
},
data(){
        return{
            
        }

}


}
</script>


<style>

.chat{
    text-align: left;
}

.chat h2{
font-size: 2.6em;
margin-bottom: 40px;
}
.chat span {
    font-size:1.4em;
}
.chat .time {
    display:block;
    font-size: 1.2em;
}



</style>


