<template>
  <div class="top">
    <img class="logo" src="/src/assets/images/px.png" alt />
    <div class="header-search">
      <router-link class="search-link" to="/search">
        <span>搜索游戏</span>
      </router-link>
    </div>
    <router-link class="header-icon r-icon people-icon" to="/login"></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';
.top {
  position: relative;
  padding: 0 120rem / $remCalculation 0 170rem / $remCalculation;
  height: 90rem / $remCalculation;
  background: linear-gradient(to right, #43caff, #05b3fe);
  background: -webkit-linear-gradient(to right, #43caff, #05b3fe);
  .logo {
    position: absolute;
    left: 30rem / $remCalculation;
    top: 50%;
    margin-top: -(26rem / $remCalculation);
    display: block;
    width: 87rem / $remCalculation;
    height: 45rem / $remCalculation;
  }
  .header-search {
    padding: {
      top: 16rem / $remCalculation;
    }
    .search-link {
      display: block;
      height: 56rem / $remCalculation;
      line-height: 56rem / $remCalculation;
      border-radius: 60rem / $remCalculation;
      padding-left: 60rem / $remCalculation;
      background: {
        color: rgba(255, 255, 255, 0.3);
        image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKTSURBVEhLtZZNiE1xGMbvfGpmpYYZsZgdNZSdZIesNWoWKE0WaiKaZuWjJFbIcja2mslKSUTmlhFjxYKFhSgZTRFpmDAzl9/7vs851537ObfjV0/n/z7vx79z7j0fuXoUCoV+NIbuoLdo4Q9w/IKeo3G0D6tDLc3BkC3oBlq2DepB3Sd0FnVpRGPQ20bTJbQYo1YHfe/QTo2rDfXdFN+N1iJ4dvnsbE8SDnE8iOwyT6CvUVUE7xc6pLGVoa6dogfREhB/RqOo6mWirJP8UfQxugLiJQ5DKiuHgstRGhA/Rn1K14XaHnRf7Q7xDzSgkiKY21D6m7F+xKFb6Yahx852yocI4qccWlQSYN6LtBfYZexVatXQux691ziHeFDpODv5DvEJpZqGMcMxLWBmXinf8Lx8S3xDa5RqGkbZrTUbU32u3cvrPEmQXnPWE25mALOua6xDfCBJpH9n1mfczABmjWisQ3w6SfyWZ+YRNzOAWYMa6xBfTRLphjDsZgZU2PBKkpiTZ+ZFNzOAWfs11iEeSxJ5eWZOu5kBjLPn8ozmvkZxb7P497ZYRps9kQGMbGHeRo5tsnzDAd9NEN9U6v/BJg+1n0Nc+9VSA3q3ozx6hvbKLoXEDpS+2VnbU36P0g1Dzy6Uvh9ZL6FTSpdCYuXr6ScaZdmukqpQ00rtCPruzSvAt6dOp8oDjA4SJe8zA+8VOo42qTSF9Fr8w+hFVFeHmmnUo9YAv+InhoFvzKIZZL/PB2Rv9TLw59FLhSl4U9qqCL496S+gZj+i7NNxK+pCk7Id4nltUw5J+wq4hRr9THzD4RhKf3PWdh/ap+MiMs4pVR2aNtggim8j+wRcQPbvm0NP0DW0m5pWtZRBvhf153K53F+QBQ1lNUDiqAAAAABJRU5ErkJggg==');
        repeat: no-repeat;
        position: 20rem / $remCalculation center;
        size: 28rem / $remCalculation 28rem / $remCalculation;
      }
      span {
        color: #fff;
        opacity: 0.6;
      }
    }
  }
  .header-icon {
    position: absolute;
    top: 50%;
    margin: {
      top: -(18rem / $remCalculation);
    }
    width: 34rem / $remCalculation;
    height: 36rem / $remCalculation;
    background: {
      repeat: no-repeat;
      size: 100%;
    }
  }
}
</style>
