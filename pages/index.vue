<template>
  <div>
    <StyledHeader>
      <StyledTitle>title</StyledTitle>
    </StyledHeader>
  </div>
</template>

<script lang="ts">
import { StyledHeader, StyledTitle } from '~~/styled/StyledHeader'
export default defineComponent({
  name: 'IndexPage',
  components: {
    StyledHeader,
    StyledTitle
  }
})
</script>
