import { useCallback } from "react";
import { UserIcon } from "lucide-react";

import Sidebar from "./components/sidebar";
import { Hero, HeroBody, HeroContent } from "./components/hero/hero";
import {
  Actions,
  IconInfo,
  IconPlay,
  Kicker,
  Meta,
  Summary,
  Title,
  Button,
  Row,
  RowTitle,
  Shell,
  SidebarSlot,
  Main
} from "./components/styled/shared";

import Carousel from "./components/carousel";
import useMovies from "./hooks/useMovies";
import EmbedPlayer from "./components/embeded_video_player/embeded_video_player";
import { HeroSkeleton } from "./components/hero/hero.skeleton";
import TrendingSkeleton from "./components/trending/trending.skeleton";

function App() {
  const { list, featured, featured_details, set_featured, loading } = useMovies();

  const handleStoreFeatured = useCallback((feat: any) => {
    localStorage.setItem('featured', feat.id);
    set_featured(feat);
  }, []);

  return (
    <Shell>
      <SidebarSlot>
        <Sidebar
          activeKey="home"
          onNavigate={(key: any) => console.log("goto:", key)}
          user={{ name: "Daniel", avatar: <UserIcon /> }}
        />
      </SidebarSlot>
      <Main>
        {featured ?
          <Hero bg={featured.poster_path}>
            {featured && !loading && <EmbedPlayer movieId={featured.id} />}
            <HeroBody>
              <HeroContent>
                <Kicker>Movie</Kicker>
                <Title>{featured.title}</Title>
                <Meta>
                  <span>{new Date(featured.release_date).getFullYear()}</span>
                  <span>{featured.adult}</span>
                  <span>{`${featured_details?.runtime} min`}</span>
                </Meta>
                <Summary>
                  {featured.overview}
                </Summary>
                <Actions>
                  <Button><IconPlay />Play</Button>
                  <Button variant="ghost"><IconInfo /> More Info</Button>
                </Actions>
              </HeroContent>
            </HeroBody>
          </Hero> :
          <HeroSkeleton />
        }
        {loading && <TrendingSkeleton />}
        {list && featured && <Row>
          <RowTitle>Trending Now</RowTitle>
          <Carousel items={list} onSlideClick={handleStoreFeatured} />
        </Row>}
      </Main>
    </Shell >
  );
}

export default App;

