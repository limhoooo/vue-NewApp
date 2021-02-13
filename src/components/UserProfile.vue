<template>
  <div>
      <div class="user-container">
        <div class="user-description">
            <!-- <div>
                username : {{ info.id }}
            </div>
            <div class="time">
                time : {{info.created}}
            </div> -->
            <div>
                <slot name="username"></slot>
            </div>
            <div class="time">
                <slot name="time"></slot>
                <slot name="karma"></slot>
            </div>

            
        </div>
      </div>

  </div>
</template>

<script>
export default {
    props: {
        info : Object
    }
}
</script>

<style>
    .user-container{
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }
    .user-description{
        padding-left: 8px;
    }
    .time{
        font-size: 0.7rem;
    }
</style>