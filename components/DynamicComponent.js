import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import FeaturedArticles from "./FeaturedArticles";
import Placeholder from "./Placeholder";
// import ArticleTeaser from "./ArticleTeaser";

// resolve Storyblok components to Next.js components
const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  "featured-articles": FeaturedArticles,
  // 'article' : ArticleTeaser,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    // wrap with SbEditable for visual editing
    return <Component blok={blok} />;
  }

  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
