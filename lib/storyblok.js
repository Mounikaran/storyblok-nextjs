import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'lrkGlrxLsZkV3ofZsSdQGwtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok
